import { useCallback, useEffect, useRef, useState } from "react";
import HeroMascot2D from "./HeroMascot2D";
import ParticleField from "./ParticleField";
import GroundShadow from "./GroundShadow";

// Speech bubble lines cycled when ghost or "Click on Ghost" badge is clicked
const GHOST_LINES = [
  "AI can't eat me 👻",
  "Boo! Scroll down, the work is real.",
  "I haunt production. Rarely.",
  "Ship it Friday? Bold.",
  "Yes, it is responsive.",
  "Still faster than your last build.",
];

// How close (px) the cursor must get to the mascot's centre before the hint
// appears. The ghost is ~300px tall, so this reaches a good way past its
// edge in every direction.
const GHOST_NEAR_RADIUS = 400;

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const list = window.matchMedia(query);
    const sync = () => setMatches(list.matches);

    sync();
    list.addEventListener("change", sync);
    return () => list.removeEventListener("change", sync);
  }, [query]);

  return matches;
}

/**
 * HeroVisual Component
 * Renders the interactive floating 2D mascot object:
 * - Glowing white dot pointer tracking mouse movement (Screenshot 3)
 * - Frosted "Click on Ghost" pill badge on ghost body (Screenshot 1)
 * - White speech bubble ("AI can't eat me 👻") on click (Screenshot 2)
 * - Particle depth field & ambient room glow
 */
function HeroVisual() {
  const containerRef = useRef(null);
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const compact = useMediaQuery("(max-width: 767px)");

  const [hovered, setHovered] = useState(false);
  const [line, setLine] = useState(null);
  const [floatY, setFloatY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [pointerPos, setPointerPos] = useState({ x: -100, y: -100 });
  const [isPointerVisible, setIsPointerVisible] = useState(false);
  const [isNear, setIsNear] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  // Which quote comes next. Kept outside `line` so dismissing a line doesn't
  // lose our place in the rotation.
  const lineCursorRef = useRef(-1);

  // Only run the rAF float loop (and its 60/sec re-renders) while the hero
  // is actually on screen — otherwise it keeps re-rendering forever, fighting
  // the browser for main-thread time on every scroll frame on every page.
  useEffect(() => {
    const node = containerRef.current;
    if (!node || typeof IntersectionObserver === "undefined") return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setIsHeroVisible(entry.isIntersecting),
      { rootMargin: "200px 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Smooth continuous idle floating animation loop
  useEffect(() => {
    if (reducedMotion || !isHeroVisible) return undefined;
    let animationId;
    let time = 0;

    const animate = () => {
      time += 0.03;
      setFloatY(Math.sin(time) * 10);
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [reducedMotion, isHeroVisible]);

  // Track the cursor across the whole Hero section — not the whole document.
  // The dot is a fixed-position overlay, so a window-level listener made it
  // follow the cursor everywhere on the site (sitting on top of button text
  // in other sections); this keeps it a Hero-only accent.
  //
  // Aim, proximity and the dot all derive from this one listener. They used
  // to hang off the mascot wrapper's own mousemove, but that wrapper is a
  // bounded ~620x440 box (see Herosec), so leaving it — including simply
  // moving below the ghost — read as "cursor gone" and snapped the mascot
  // back to neutral. Listening at the section keeps them live across the
  // whole hero, with distance measured from the mascot itself.
  useEffect(() => {
    if (reducedMotion) return undefined;
    const heroSection = containerRef.current?.closest("section");
    if (!heroSection) return undefined;

    const handleMove = (e) => {
      setPointerPos({ x: e.clientX, y: e.clientY });
      setIsPointerVisible(true);

      const node = containerRef.current;
      if (!node) return;

      const rect = node.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);

      // Normalised against the mascot's own half-size, then capped by
      // magnitude rather than per-axis so the aim direction survives the
      // clamp once the cursor is outside the wrapper.
      const nx = dx / (rect.width / 2);
      const ny = dy / (rect.height / 2);
      const length = Math.hypot(nx, ny);
      const cap = length > 1 ? 1 / length : 1;
      setMousePos({ x: nx * cap, y: ny * cap });

      setIsNear(Math.hypot(dx, dy) < GHOST_NEAR_RADIUS);
    };

    const handleLeave = () => {
      setIsPointerVisible(false);
      setIsNear(false);
      setMousePos({ x: 0, y: 0 });
    };

    heroSection.addEventListener("mousemove", handleMove);
    heroSection.addEventListener("mouseleave", handleLeave);

    return () => {
      heroSection.removeEventListener("mousemove", handleMove);
      heroSection.removeEventListener("mouseleave", handleLeave);
    };
  }, [reducedMotion]);

  // Track page scroll position for smooth mascot displacement
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = window.innerHeight * 0.8;
      const progress = Math.min(1, Math.max(0, scrollY / maxScroll));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Remember where we got to, so dismissing a line doesn't restart the
  // rotation. Recorded here rather than inside the updater below: StrictMode
  // double-invokes updaters, so advancing the cursor in there would skip a
  // quote on every click.
  useEffect(() => {
    if (line !== null) lineCursorRef.current = line;
  }, [line]);

  const handlePoke = useCallback(() => {
    setLine((current) =>
      // Clicking again dismisses the current line; the one after that opens
      // the next quote, so the ghost keeps cycling across separate showings.
      current !== null
        ? null
        : (lineCursorRef.current + 1) % GHOST_LINES.length
    );
  }, []);

  const showBubble = line !== null;
  const showBadge = (isNear || hovered) && !reducedMotion && isPointerVisible;

  return (
    <>
      {/* Glowing White Dot Tracking Pointer (Screenshot 3) */}
      {isPointerVisible && !reducedMotion && (
        <div
          aria-hidden="true"
          className="pointer-events-none fixed top-0 left-0 z-50 h-4 w-4 rounded-full bg-white shadow-[0_0_16px_rgba(255,255,255,0.9),0_0_30px_rgba(52,168,90,0.7)] transition-transform duration-75 ease-out"
          style={{
            transform: `translate3d(${pointerPos.x}px, ${pointerPos.y}px, 0) translate(-50%, -50%) scale(${
              hovered ? 1.5 : 1
            })`,
          }}
        />
      )}

      {/* "Click on Ghost" hint — rides along with the cursor while it's near
          the mascot. Fixed + pointer-events-none so it sits under the cursor
          without ever intercepting the click it's asking for. Its transform
          isn't transitioned, so it stays stuck to the pointer rather than
          trailing it. */}
      {!reducedMotion && (
        <div
          aria-hidden="true"
          className={`pointer-events-none fixed top-0 left-0 z-40 transition-opacity duration-200 ${
            showBadge ? "opacity-100" : "opacity-0"
          }`}
          style={{
            transform: `translate3d(${pointerPos.x}px, ${pointerPos.y}px, 0) translate(18px, 16px)`,
          }}
        >
          <span className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-black/40 dark:border-white/40 bg-black/20 dark:bg-white/20 px-4 py-1.5 text-xs font-medium text-foreground shadow-lg backdrop-blur-md">
            Click on Ghost
          </span>
        </div>
      )}

      <div
        ref={containerRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 select-none"
        style={{
          transform: `translateY(${-scrollProgress * 80}px)`,
          opacity: Math.max(0.2, 1 - scrollProgress * 1.2),
        }}
      >
        {/* Background Floating Particles */}
        {!reducedMotion && (
          <ParticleField mousePos={mousePos} compact={compact} active={isHeroVisible} />
        )}

        {/* Ambient Room Glow Behind Mascot */}
        <div
          className={`pointer-events-none absolute left-1/2 top-1/2 h-[min(75vw,520px)] w-[min(75vw,520px)] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[110px] transition-all duration-700 ${
            hovered ? "bg-primary/[0.32] scale-105" : "bg-primary/[0.18] scale-100"
          }`}
          style={{
            transform: `translate(-50%, -50%) translate3d(${mousePos.x * 18}px, ${mousePos.y * 18}px, 0)`,
          }}
        />

        {/* Dynamic Ground Contact Shadow & Glow */}
        {!reducedMotion && (
          <GroundShadow floatY={floatY / 70} hovered={hovered} />
        )}

        {/* Main Mascot Component — only the ghost's own box opts back into
            pointer events (see HeroMascot2D), so the rest of this layer
            stays click-through for the content sitting under it. */}
        <div className="pointer-events-none absolute inset-0">
          <HeroMascot2D
            mousePos={mousePos}
            hovered={hovered}
            onHoverChange={setHovered}
            onPoke={handlePoke}
            floatY={floatY}
            active={isHeroVisible}
          />
        </div>

        {/* White Speech Bubble (Appears on clicking Ghost or Badge - Screenshot 2) */}
        <div
          className={`absolute left-[54%] sm:left-[56%] top-[6%] sm:top-[8%] z-30 max-w-[15rem] transition-all duration-300 ease-out ${
            showBubble
              ? "translate-y-0 opacity-100 scale-100"
              : "pointer-events-none translate-y-1 opacity-0 scale-95"
          }`}
        >
          <div className="relative rounded-2xl bg-white px-4 py-2.5 text-xs sm:text-sm font-semibold leading-snug text-[#0a0b12] shadow-[0_12px_32px_-8px_rgba(0,0,0,0.6)]">
            {showBubble ? GHOST_LINES[line] : ""}
            {/* White Tail pointing down-left toward ghost top-right */}
            <span className="absolute -bottom-1.5 left-4 h-3 w-3 rotate-45 rounded-[2px] bg-white" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroVisual;
