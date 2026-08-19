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

  // Smooth continuous idle floating animation loop
  useEffect(() => {
    if (reducedMotion) return undefined;
    let animationId;
    let time = 0;

    const animate = () => {
      time += 0.03;
      setFloatY(Math.sin(time) * 10);
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [reducedMotion]);

  // Track global mouse position for the white glowing dot pointer (Screenshot 3)
  useEffect(() => {
    if (reducedMotion) return undefined;

    const handleGlobalMouseMove = (e) => {
      setPointerPos({ x: e.clientX, y: e.clientY });
      setIsPointerVisible(true);
    };

    const handleGlobalMouseLeave = () => {
      setIsPointerVisible(false);
    };

    window.addEventListener("mousemove", handleGlobalMouseMove);
    document.addEventListener("mouseleave", handleGlobalMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleGlobalMouseMove);
      document.removeEventListener("mouseleave", handleGlobalMouseLeave);
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

  // Track mouse coordinates across container for proximity & eye tracking
  const handleMouseMove = (e) => {
    if (reducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    setMousePos({ x, y });

    const dist = Math.hypot(x, y);
    setIsNear(dist < 0.88);
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
    setIsNear(false);
  };

  const handlePoke = useCallback(() => {
    setLine((current) => {
      const next = current === null ? 0 : (current + 1) % GHOST_LINES.length;
      return next;
    });
  }, []);

  const showBubble = line !== null;
  const showBadge = (isNear || hovered) && !reducedMotion;

  return (
    <>
      {/* Glowing White Dot Tracking Pointer (Screenshot 3) */}
      {isPointerVisible && !reducedMotion && (
        <div
          aria-hidden="true"
          className="pointer-events-none fixed top-0 left-0 z-50 h-4 w-4 rounded-full bg-white shadow-[0_0_16px_rgba(255,255,255,0.9),0_0_30px_rgba(139,147,255,0.7)] transition-transform duration-75 ease-out"
          style={{
            transform: `translate3d(${pointerPos.x}px, ${pointerPos.y}px, 0) translate(-50%, -50%) scale(${
              hovered ? 1.5 : 1
            })`,
          }}
        />
      )}

      <div
        ref={containerRef}
        aria-hidden="true"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="pointer-events-auto absolute inset-0 select-none"
        style={{
          transform: `translateY(${-scrollProgress * 80}px)`,
          opacity: Math.max(0.2, 1 - scrollProgress * 1.2),
        }}
      >
        {/* Background Floating Particles */}
        {!reducedMotion && (
          <ParticleField mousePos={mousePos} compact={compact} />
        )}

        {/* Ambient Room Glow Behind Mascot */}
        <div
          className={`pointer-events-none absolute left-1/2 top-1/2 h-[min(75vw,520px)] w-[min(75vw,520px)] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[110px] transition-all duration-700 ${
            hovered ? "bg-accent/[0.32] scale-105" : "bg-accent/[0.18] scale-100"
          }`}
          style={{
            transform: `translate(-50%, -50%) translate3d(${mousePos.x * 18}px, ${mousePos.y * 18}px, 0)`,
          }}
        />

        {/* Dynamic Ground Contact Shadow & Glow */}
        {!reducedMotion && (
          <GroundShadow floatY={floatY / 70} hovered={hovered} />
        )}

        {/* Main Mascot Component */}
        <div className="pointer-events-auto absolute inset-0">
          <HeroMascot2D
            mousePos={mousePos}
            hovered={hovered}
            showBadge={showBadge}
            onHoverChange={setHovered}
            onPoke={handlePoke}
            floatY={floatY}
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
