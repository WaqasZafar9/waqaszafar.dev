import { useCallback, useEffect, useRef, useState } from "react";
import HeroMascot2D from "./HeroMascot2D";
import ParticleField from "./ParticleField";
import GroundShadow from "./GroundShadow";

const GHOST_LINES = [
  "AI can't eat me 👻",
  "Boo! Scroll down, the work is real.",
  "I haunt production. Rarely.",
  "Ship it Friday? Bold.",
  "Yes, it is responsive.",
  "Still faster than your last build.",
];

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
  const [overInteractive, setOverInteractive] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const lineCursorRef = useRef(-1);

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

  useEffect(() => {
    if (reducedMotion) return undefined;
    const heroSection = containerRef.current?.closest("section");
    if (!heroSection) return undefined;

    const handleMove = (e) => {
      setPointerPos({ x: e.clientX, y: e.clientY });
      setIsPointerVisible(true);
      setOverInteractive(Boolean(e.target.closest("a, button")));

      const node = containerRef.current;
      if (!node) return;

      const rect = node.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);

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
      setOverInteractive(false);
      setMousePos({ x: 0, y: 0 });
    };

    heroSection.addEventListener("mousemove", handleMove);
    heroSection.addEventListener("mouseleave", handleLeave);

    return () => {
      heroSection.removeEventListener("mousemove", handleMove);
      heroSection.removeEventListener("mouseleave", handleLeave);
    };
  }, [reducedMotion]);

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

  useEffect(() => {
    if (line !== null) lineCursorRef.current = line;
  }, [line]);

  const handlePoke = useCallback(() => {
    setLine((current) =>
      current !== null
        ? null
        : (lineCursorRef.current + 1) % GHOST_LINES.length
    );
  }, []);

  const showBubble = line !== null;
  const showBadge =
    (isNear || hovered) && !reducedMotion && isPointerVisible && !overInteractive;

  return (
    <>
      {isPointerVisible && !reducedMotion && !overInteractive && (
        <div
          aria-hidden="true"
          className="pointer-events-none fixed top-0 left-0 z-50 h-4 w-4 rounded-full bg-foreground shadow-[0_0_16px_color-mix(in_srgb,var(--color-foreground)_90%,transparent),0_0_30px_color-mix(in_srgb,var(--color-primary)_70%,transparent)] transition-transform duration-75 ease-out"
          style={{
            transform: `translate3d(${pointerPos.x}px, ${pointerPos.y}px, 0) translate(-50%, -50%) scale(${
              hovered ? 1.5 : 1
            })`,
          }}
        />
      )}

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
        {!reducedMotion && (
          <ParticleField mousePos={mousePos} compact={compact} active={isHeroVisible} />
        )}

        <div
          className={`pointer-events-none absolute left-1/2 top-1/2 h-[min(75vw,520px)] w-[min(75vw,520px)] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[110px] transition-all duration-700 ${
            hovered ? "bg-primary/[0.32] scale-105" : "bg-primary/[0.18] scale-100"
          }`}
          style={{
            transform: `translate(-50%, -50%) translate3d(${mousePos.x * 18}px, ${mousePos.y * 18}px, 0)`,
          }}
        />

        {!reducedMotion && (
          <GroundShadow floatY={floatY / 70} hovered={hovered} />
        )}

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

        <div
          className={`absolute left-[54%] sm:left-[56%] top-[6%] sm:top-[8%] z-30 max-w-[15rem] transition-all duration-300 ease-out ${
            showBubble
              ? "translate-y-0 opacity-100 scale-100"
              : "pointer-events-none translate-y-1 opacity-0 scale-95"
          }`}
        >
          <div className="relative rounded-2xl bg-white px-4 py-2.5 text-xs sm:text-sm font-semibold leading-snug text-[#0a0b12] shadow-[0_12px_32px_-8px_rgba(0,0,0,0.6)]">
            {showBubble ? GHOST_LINES[line] : ""}
            <span className="absolute -bottom-1.5 left-4 h-3 w-3 rotate-45 rounded-[2px] bg-white" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroVisual;
