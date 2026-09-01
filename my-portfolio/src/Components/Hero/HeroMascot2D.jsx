import { useEffect, useRef, useState } from "react";

const EYE_BASE = [
  { cx: 76, cy: 86 },
  { cx: 124, cy: 86 },
];

const PUPIL_MAX_X = 6.8;
const PUPIL_MAX_Y = 9.2;

const PUPIL_REACH_PX = 260;

const PUPIL_EASE = 0.2;

const PUPIL_EPSILON = 0.001;

const TILT_REACH = 0.42;
const TILT_MAX_X = 20;
const TILT_MAX_Y = 26;
const SHIFT_MAX_X = 26;
const SHIFT_MAX_Y = 18;

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
  const pointerRef = useRef(null);
  const appliedRef = useRef([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ]);
  const snapRef = useRef(false);

  useEffect(() => {
    if (!active) return undefined;
    let animationId;
    const animateWave = () => {
      setWaveTime((t) => t + 0.04);
      animationId = requestAnimationFrame(animateWave);
    };
    animationId = requestAnimationFrame(animateWave);
    return () => cancelAnimationFrame(animationId);
  }, [active]);

  useEffect(() => {
    if (!active || typeof window === "undefined") return undefined;

    if (
      !window.matchMedia("(pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return undefined;
    }

    const svg = svgRef.current;
    if (!svg) return undefined;

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

      const svgRect = svg.getBoundingClientRect();
      const scale = Math.min(svgRect.width / 200, svgRect.height / 240);
      if (!scale) return;

      const pointer = pointerRef.current;

      const targets = EYE_BASE.map((_, index) => {
        const node = eyeRefs.current[index];
        if (!node) return null;
        if (!pointer) return { x: 0, y: 0 };

        const rect = node.getBoundingClientRect();
        const applied = appliedRef.current[index];
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

  const aimLength = Math.hypot(mousePos.x, mousePos.y);
  const aimReach = Math.min(1, aimLength / TILT_REACH);
  const aimX = aimLength ? (mousePos.x / aimLength) * aimReach : 0;
  const aimY = aimLength ? (mousePos.y / aimLength) * aimReach : 0;

  const tiltX = -aimY * TILT_MAX_X;
  const tiltY = aimX * TILT_MAX_Y;
  const shiftX = aimX * SHIFT_MAX_X;
  const shiftY = aimY * SHIFT_MAX_Y;

  const w1 = Math.sin(waveTime * 2.5) * 4;
  const w2 = Math.cos(waveTime * 2.5) * 4;
  const w3 = Math.sin(waveTime * 2.5 + 1.5) * 4;
  const w4 = Math.cos(waveTime * 2.5 + 1.5) * 4;

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
        <div
          className={`absolute inset-2 rounded-full bg-primary/40 blur-[35px] transition-all duration-300 ${
            hovered ? "scale-125 opacity-80" : "scale-100 opacity-50"
          }`}
        />

        <svg
          ref={svgRef}
          viewBox="0 0 200 240"
          className="relative z-10 h-full w-full drop-shadow-[0_15px_35px_color-mix(in_srgb,var(--color-primary)_40%,transparent)] transition-all duration-300"
          role="presentation"
        >
          <defs>
            <linearGradient id="ghostBodyGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="52%" stopColor="#cfd7fa" />
              <stop offset="100%" stopColor="#7a8edf" />
            </linearGradient>
          </defs>

          <path fill="url(#ghostBodyGrad)" d={ghostBodyPath} />

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
