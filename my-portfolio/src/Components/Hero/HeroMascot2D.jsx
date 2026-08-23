import React, { useEffect, useRef, useState } from "react";

// --- Eye tracking tuning -------------------------------------------------
// All distances below are SVG user units (the mascot's `0 0 200 240`
// viewBox), except PUPIL_REACH_PX which is a screen-space cursor distance.

// Resting centre of each dark capsule, matching the <ellipse> cx/cy below.
const EYE_BASE = [
  { cx: 76, cy: 86 },
  { cx: 124, cy: 86 },
];

// The mascot has no white sclera — the dark capsule *is* the pupil, so the
// cap is what keeps it sitting inside the dome face rather than sliding off
// it. The capsule is taller than it is wide (rx 7.5 / ry 14), so it gets a
// little more vertical travel to match its shape. At these caps the left eye
// sweeps x 62..97 and the right 110..145, both comfortably inside the dome
// (x 34..166 at the eye line), and y 63..109 against a dome top of y 16.
const PUPIL_MAX_X = 6.8;
const PUPIL_MAX_Y = 9.2;

// Cursor distance at which the pupils reach full deflection. Ramping in with
// distance stops them snapping to the cap the instant the cursor appears.
const PUPIL_REACH_PX = 260;

// Per-frame approach to the target. Low enough to smooth out pointer jitter,
// high enough that the eyes don't lag noticeably behind the cursor.
const PUPIL_EASE = 0.2;

// Below this the offset is visually identical — skip the DOM write.
const PUPIL_EPSILON = 0.001;

// --- Body tilt tuning ----------------------------------------------------
// The body leans toward the cursor as well as the eyes. `mousePos` arrives
// normalised against the hero container's half-size, so on a wide viewport a
// cursor a few hundred px away reads as a small fraction and the lean barely
// registers. Normalising to a pure direction and ramping that over a fixed
// reach decouples the lean from viewport width, so it commits at the sort of
// distance the cursor actually sits at.
const TILT_REACH = 0.42;
const TILT_MAX_X = 20;
const TILT_MAX_Y = 26;
const SHIFT_MAX_X = 26;
const SHIFT_MAX_Y = 18;

/**
 * HeroMascot2D Component
 * A 2D/2.5D floating ghost mascot matching heyabhay.design:
 * - Smooth SVG dome shape & 3-stop vertical gradient
 * - Dynamic waving skirt hem animation (cloth wave effect)
 * - Eye tracking mouse movement (eyes follow cursor)
 * - Frosted "Click on Ghost" pill badge on lower body
 */
function HeroMascot2D({
  mousePos = { x: 0, y: 0 },
  hovered = false,
  onHoverChange = () => {},
  onPoke = () => {},
  floatY = 0,
  active = true,
}) {
  const [waveTime, setWaveTime] = useState(0);

  const svgRef = useRef(null);
  const eyeRefs = useRef([]);
  // Latest cursor position in client coords; null while the pointer is away,
  // which eases the pupils back to centre. Held in a ref (not state) so
  // pointer motion never triggers a React re-render.
  const pointerRef = useRef(null);
  // Offsets currently written to the DOM, in user units.
  const appliedRef = useRef([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ]);
  // Set on resize so the next frame jumps straight to the corrected aim
  // instead of easing in from a now-stale position.
  const snapRef = useRef(false);

  // Waving skirt hem animation loop — only while the mascot is on screen.
  useEffect(() => {
    if (!active) return undefined;
    let animationId;
    const animateWave = () => {
      setWaveTime((t) => t + 0.04);
      animationId = requestAnimationFrame(animateWave);
    };
    animationId = requestAnimationFrame(animateWave);
    // Bug fix: cancelAnimationFrame needs the numeric request id, not the
    // callback reference — the old code (`cancelAnimationFrame(animateWave)`)
    // silently never canceled anything.
    return () => cancelAnimationFrame(animationId);
  }, [active]);

  // Eye tracking — each pupil aims independently at the real cursor position.
  //
  // The whole loop runs outside React: the pointer lands in a ref and the
  // offsets are written straight to the <ellipse> nodes, so tracking adds no
  // re-renders on top of the wave loop above. Each frame does its layout
  // reads first and its style writes after, so the two never interleave into
  // a read/write thrash.
  useEffect(() => {
    if (!active || typeof window === "undefined") return undefined;

    // Touch-only devices have no hovering cursor to follow, and reduced
    // motion opts out of the movement entirely. Both leave the eyes at rest.
    if (
      !window.matchMedia("(pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return undefined;
    }

    const svg = svgRef.current;
    if (!svg) return undefined;

    // Track across the whole hero so the eyes keep following wherever the
    // cursor roams in it, not just over the mascot itself.
    const heroSection = svg.closest("section") ?? window;

    const handleMove = (event) => {
      pointerRef.current = { x: event.clientX, y: event.clientY };
    };
    const handleLeave = () => {
      pointerRef.current = null;
    };
    const handleResize = () => {
      snapRef.current = true;
    };

    heroSection.addEventListener("mousemove", handleMove);
    heroSection.addEventListener("mouseleave", handleLeave);
    window.addEventListener("resize", handleResize);

    let frame = requestAnimationFrame(function step() {
      frame = requestAnimationFrame(step);

      // --- read phase --------------------------------------------------
      // The mascot floats and tilts every frame, so its on-screen geometry
      // is re-measured rather than cached. That also means a resize needs no
      // separate re-measure to stay accurate.
      const svgRect = svg.getBoundingClientRect();
      // preserveAspectRatio defaults to uniform scaling, so one factor maps
      // user units to px on both axes — and screen angles equal user-space
      // angles, letting the aim be computed directly in client coords.
      const scale = Math.min(svgRect.width / 200, svgRect.height / 240);
      if (!scale) return;

      const pointer = pointerRef.current;

      const targets = EYE_BASE.map((_, index) => {
        const node = eyeRefs.current[index];
        if (!node) return null;
        if (!pointer) return { x: 0, y: 0 };

        const rect = node.getBoundingClientRect();
        const applied = appliedRef.current[index];
        // Subtract the offset written last frame to recover the eye's
        // resting centre. Without this the measurement includes the aim it
        // produced, and the pupil walks away from the eye over time.
        const centerX = rect.left + rect.width / 2 - applied.x * scale;
        const centerY = rect.top + rect.height / 2 - applied.y * scale;

        const dx = pointer.x - centerX;
        const dy = pointer.y - centerY;
        const angle = Math.atan2(dy, dx);
        const reach = Math.min(1, Math.hypot(dx, dy) / PUPIL_REACH_PX);

        return {
          x: Math.cos(angle) * PUPIL_MAX_X * reach,
          y: Math.sin(angle) * PUPIL_MAX_Y * reach,
        };
      });

      // --- write phase -------------------------------------------------
      const ease = snapRef.current ? 1 : PUPIL_EASE;
      snapRef.current = false;

      targets.forEach((target, index) => {
        const node = eyeRefs.current[index];
        if (!node || !target) return;

        const applied = appliedRef.current[index];
        const nextX = applied.x + (target.x - applied.x) * ease;
        const nextY = applied.y + (target.y - applied.y) * ease;

        if (
          Math.abs(nextX - applied.x) < PUPIL_EPSILON &&
          Math.abs(nextY - applied.y) < PUPIL_EPSILON
        ) {
          return;
        }

        applied.x = nextX;
        applied.y = nextY;
        // On an SVG child a CSS translate is in user units, so the capped
        // offset stays proportional to the eye at every viewport size.
        node.style.transform = `translate(${nextX}px, ${nextY}px)`;
      });
    });

    return () => {
      cancelAnimationFrame(frame);
      heroSection.removeEventListener("mousemove", handleMove);
      heroSection.removeEventListener("mouseleave", handleLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, [active]);

  // Calculate 3D perspective tilt and shift from cursor coordinates. The
  // vector is reduced to a direction and re-scaled by its own ramped
  // magnitude, so the mascot leans the way the cursor actually lies and
  // reaches a full lean well before the cursor gets to the hero's edge.
  const aimLength = Math.hypot(mousePos.x, mousePos.y);
  const aimReach = Math.min(1, aimLength / TILT_REACH);
  const aimX = aimLength ? (mousePos.x / aimLength) * aimReach : 0;
  const aimY = aimLength ? (mousePos.y / aimLength) * aimReach : 0;

  const tiltX = -aimY * TILT_MAX_X;
  const tiltY = aimX * TILT_MAX_Y;
  const shiftX = aimX * SHIFT_MAX_X;
  const shiftY = aimY * SHIFT_MAX_Y;

  // Calculate dynamic bottom skirt wave offsets
  const w1 = Math.sin(waveTime * 2.5) * 4;
  const w2 = Math.cos(waveTime * 2.5) * 4;
  const w3 = Math.sin(waveTime * 2.5 + 1.5) * 4;
  const w4 = Math.cos(waveTime * 2.5 + 1.5) * 4;

  // Dynamic SVG path for ghost body with continuous waving skirt hem
  const ghostBodyPath = `
    M 100 16
    C 64 16, 34 46, 34 82
    V 172
    Q 48 ${184 + w1}, 62 174
    Q 76 ${164 - w2}, 90 174
    Q 104 ${184 + w3}, 118 174
    Q 132 ${164 - w4}, 146 174
    Q 160 ${184 + w1}, 166 172
    V 82
    C 166 46, 136 16, 100 16
    Z
  `;

  return (
    <div className="relative flex h-full w-full items-center justify-center [perspective:1000px]">
      {/* 2D Ghost Container with Explicit Sizing & 3D Perspective Tilt */}
      <div
        onClick={onPoke}
        onMouseEnter={() => onHoverChange(true)}
        onMouseLeave={() => onHoverChange(false)}
        className="group pointer-events-auto relative flex h-[260px] w-[210px] sm:h-[300px] sm:w-[250px] md:h-[320px] md:w-[270px] items-center justify-center cursor-pointer select-none transition-transform duration-200 ease-out"
        style={{
          transform: `translate3d(${shiftX}px, ${shiftY + floatY}px, 0px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(${
            hovered ? 1.06 : 1.0
          })`,
        }}
      >
        {/* Soft Ambient Body Glow */}
        <div
          className={`absolute inset-2 rounded-full bg-primary/40 blur-[35px] transition-all duration-300 ${
            hovered ? "scale-125 opacity-80" : "scale-100 opacity-50"
          }`}
        />

        {/* 2D SVG Ghost Mascot */}
        <svg
          ref={svgRef}
          viewBox="0 0 200 240"
          className="relative z-10 h-full w-full drop-shadow-[0_15px_35px_rgba(52,168,90,0.4)] transition-all duration-300"
          role="presentation"
        >
          <defs>
            {/* Smooth 3-Stop Vertical Gradient */}
            <linearGradient id="ghostBodyGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="52%" stopColor="#cfd7fa" />
              <stop offset="100%" stopColor="#7a8edf" />
            </linearGradient>
          </defs>

          {/* Ghost Body Silhouette with Waving Skirt Hem */}
          <path fill="url(#ghostBodyGrad)" d={ghostBodyPath} />

          {/* Left Capsule Eye (Tracks Mouse Movement) */}
          <ellipse
            ref={(node) => {
              eyeRefs.current[0] = node;
            }}
            cx={EYE_BASE[0].cx}
            cy={EYE_BASE[0].cy}
            rx="7.5"
            ry="14"
            fill="#090a10"
          />

          {/* Right Capsule Eye (Tracks Mouse Movement) */}
          <ellipse
            ref={(node) => {
              eyeRefs.current[1] = node;
            }}
            cx={EYE_BASE[1].cx}
            cy={EYE_BASE[1].cy}
            rx="7.5"
            ry="14"
            fill="#090a10"
          />
        </svg>
      </div>
    </div>
  );
}

export default HeroMascot2D;
