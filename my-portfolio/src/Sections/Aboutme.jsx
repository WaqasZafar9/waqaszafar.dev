import { useEffect, useRef, useState } from "react";
import { FaBriefcase, FaGlobe, FaLaptopCode, FaLayerGroup } from "react-icons/fa";
import portrait from "../assets/my.png";

const STATS = [
  { icon: FaLayerGroup, value: "15+", label: "Projects Completed" },
  { icon: FaGlobe, value: "10+", label: "Clients Globally" },
  { icon: FaBriefcase, value: "1+", label: "Years Experience" },
  { icon: FaLaptopCode, value: "10+", label: "Tech Stack" },
];

const WORKED_ON = [
  "Lab 23 Technology",
  "Zanderio AI",
  "Lahoriya",
  "LYNX Systems",
  "Social Swirl",
  "Guest Pass",
];

// Decorative depth motes — position, size and drift speed.
const MOTES = [
  { top: "18%", left: "12%", size: 3, duration: 9, delay: 0 },
  { top: "32%", left: "82%", size: 2, duration: 11, delay: 1.4 },
  { top: "58%", left: "8%", size: 2, duration: 8, delay: 0.7 },
  { top: "70%", left: "88%", size: 3, duration: 12, delay: 2.1 },
  { top: "12%", left: "68%", size: 2, duration: 10, delay: 3 },
  { top: "46%", left: "92%", size: 2, duration: 9.5, delay: 1.1 },
];

const FOCUS_RING =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-night";

function Aboutme() {
  const sceneRef = useRef(null);
  const [revealed, setRevealed] = useState(false);

  // Fire the staggered reveal once, when the section first scrolls into view.
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );

    observer.observe(scene);
    return () => observer.disconnect();
  }, []);

  // Cursor parallax written straight to CSS variables through rAF
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return undefined;

    const fine = window.matchMedia("(pointer: fine)");
    const still = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || still.matches) return undefined;

    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let frame = 0;

    const handleMove = (event) => {
      const rect = scene.getBoundingClientRect();
      target.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      target.y = ((event.clientY - rect.top) / rect.height) * 2 - 1;
    };

    const handleLeave = () => {
      target.x = 0;
      target.y = 0;
    };

    const tick = () => {
      current.x += (target.x - current.x) * 0.06;
      current.y += (target.y - current.y) * 0.06;
      scene.style.setProperty("--mx", current.x.toFixed(4));
      scene.style.setProperty("--my", current.y.toFixed(4));
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    scene.addEventListener("mousemove", handleMove);
    scene.addEventListener("mouseleave", handleLeave);

    return () => {
      cancelAnimationFrame(frame);
      scene.removeEventListener("mousemove", handleMove);
      scene.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <section
      ref={sceneRef}
      className={`relative overflow-hidden px-5 pt-3 pb-12 font-sans sm:px-6 sm:pt-4 sm:pb-16 lg:pt-6 lg:pb-20 bg-[#08090c] ${
        revealed ? "is-visible" : ""
      }`}
      style={{ "--mx": "0", "--my": "0" }}
    >
      {/* Global Ambient Glow behind section (unchanged — this is the portrait's backlight) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[min(88vw,680px)] w-[min(88vw,680px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.08] blur-[140px]"
        style={{
          transform:
            "translate(-50%, -50%) translate3d(calc(var(--mx) * 18px), calc(var(--my) * 18px), 0)",
        }}
      />

      {/* Top hairline — matches the accent separator every other section opens with */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 h-px w-full bg-linear-to-r from-transparent via-accent/50 to-transparent"
      />

      {/* Faint room-scale dot grid for texture, so the black reads as depth
          rather than a void. Fades out toward the edges. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(139, 147, 255, 0.5) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage:
            "radial-gradient(ellipse 70% 65% at 50% 45%, #000 35%, transparent 82%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 65% at 50% 45%, #000 35%, transparent 82%)",
        }}
      />

      {/* Side ambient light — gives the two text columns their own soft
          glow instead of sitting in flat black next to the portrait's light. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[10%] top-[8%] h-[420px] w-[420px] rounded-full bg-accent-violet/[0.1] blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[10%] bottom-[6%] h-[420px] w-[420px] rounded-full bg-accent/[0.1] blur-[130px] animate-pulse"
        style={{ animationDuration: "5s" }}
      />

      {/* Depth motes */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {MOTES.map((mote) => (
          <span
            key={`${mote.top}-${mote.left}`}
            className="about-float absolute rounded-full bg-accent/40"
            style={{
              top: mote.top,
              left: mote.left,
              height: `${mote.size}px`,
              width: `${mote.size}px`,
              animationDuration: `${mote.duration}s`,
              animationDelay: `${mote.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-y-10 lg:grid-cols-12 lg:grid-rows-[1fr_auto] lg:gap-x-8 lg:gap-y-0">
        {/* Portrait — pure black centerpiece (UNTOUCHED) */}
        <div
          className="reveal relative lg:col-span-6 lg:col-start-4 lg:row-start-1 lg:z-10 lg:flex lg:flex-col lg:items-center lg:justify-end"
          style={{ "--d": "120ms" }}
        >
          {/* Portrait stage — parallax + perspective wrapper */}
          <div
            className="relative mx-auto w-full max-w-[420px] sm:max-w-[520px] lg:max-w-[620px] xl:max-w-[680px] [perspective:1000px] transition-transform duration-200 ease-out"
            style={{
              transform:
                "translate3d(calc(var(--mx) * -16px), calc(var(--my) * -12px), 0) rotateX(calc(var(--my) * -3deg)) rotateY(calc(var(--mx) * 4deg))",
            }}
          >
            <div className="relative z-10">
              {/* Image container */}
              <div className="relative flex h-[420px] items-end overflow-hidden sm:h-[520px] lg:h-[620px] xl:h-[680px]">
                <img
                  src={portrait}
                  alt="Waqas Zafar, Software Engineer"
                  width={491}
                  height={508}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="h-full w-full select-none object-cover object-bottom grayscale contrast-[1.35] brightness-[0.94] translate-y-[6%]"
                  style={{
                    maskImage:
                      "linear-gradient(to bottom, #000 0%, #000 52%, rgba(0,0,0,0.55) 74%, transparent 90%)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, #000 0%, #000 52%, rgba(0,0,0,0.55) 74%, transparent 90%)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Actions — in normal flow beneath portrait */}
          <div className="reveal relative z-30 -mt-14 flex w-full flex-col items-center gap-4 text-center sm:-mt-20 lg:-mt-24" style={{ "--d": "560ms" }}>
            {/* "Previously designed for" Header with Brand Badges */}
            <div className="flex items-center gap-3 bg-[#08090c]/80 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/15 shadow-xl">
              <span className="text-xs sm:text-sm font-normal text-ink-soft/90 tracking-wide">
                Previously designed for
              </span>
              <div className="flex items-center gap-1.5">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md shadow-md p-1.5 transition-all duration-300 hover:scale-110 hover:border-white/40"
                  title="Lab 23 Technology"
                >
                  <img src="/Icons/lab23.svg" alt="Lab 23" className="h-full w-full object-contain" />
                </div>
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md shadow-md p-1.5 transition-all duration-300 hover:scale-110 hover:border-white/40"
                  title="Zanderio AI"
                >
                  <img src="/Icons/zanderio.svg" alt="Zanderio AI" className="h-full w-full object-contain" />
                </div>
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md shadow-md p-1.5 transition-all duration-300 hover:scale-110 hover:border-white/40"
                  title="Social Swirl"
                >
                  <img src="/Icons/social-swirl-logo.png" alt="Social Swirl" className="h-full w-full object-contain" />
                </div>
              </div>
            </div>

            {/* 2 Sleek CTA Buttons matching Reference Screenshot */}
            <div className="flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:justify-center">
              <a
                href="#projects"
                className={`group inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/20 bg-[#0a0b10]/95 px-7 py-3 text-sm font-medium tracking-wide text-white backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/50 hover:bg-[#131520] hover:shadow-[0_12px_32px_rgba(139,147,255,0.25)] sm:w-auto ${FOCUS_RING}`}
              >
                View Impact &amp; Work
              </a>
              <a
                href="https://calendly.com/mwaqaszafar76/30min"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/20 bg-[#0a0b10]/95 px-7 py-3 text-sm font-medium tracking-wide text-white backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/50 hover:bg-[#131520] hover:shadow-[0_12px_32px_rgba(139,147,255,0.25)] sm:w-auto ${FOCUS_RING}`}
              >
                Book a 30 min call
              </a>
            </div>
          </div>
        </div>

        {/* Introduction (Left Column moved down with top padding) */}
        <div
          className="reveal relative z-20 group/intro lg:col-span-3 lg:col-start-1 lg:row-start-1 lg:flex lg:flex-col lg:justify-start pt-8 sm:pt-12 lg:pt-24"
          style={{ "--d": "0ms" }}
        >
          {/* Aligned Editorial Label */}
          <p className="mb-6 flex items-center gap-3 text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-ink-muted">
            <span
              aria-hidden="true"
              className="h-px w-8 bg-accent-soft/70 shadow-[0_0_8px_rgba(139,147,255,0.6)]"
            />
            About Me
          </p>

          <h2 className="text-balance text-2xl font-semibold leading-[1.18] tracking-tight text-ink sm:text-[1.75rem] lg:text-3xl">
            I build things that{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-accent-soft to-accent-violet">
              still work after launch day
            </span>
            .
          </h2>
          <p className="mt-5 text-pretty text-[0.9375rem] leading-relaxed text-ink-soft">
            I&apos;m Waqas — a Software Engineer at Lab 3 Technology, working
            mostly in React and Next.js. I came up through internships and a lot
            of side projects, which is where I learned the interesting part
            isn&apos;t getting something on screen — it&apos;s keeping it fast
            and maintainable once real people use it.
          </p>
          <p className="mt-4 text-pretty text-[0.9375rem] leading-relaxed text-ink-soft">
            I work across the stack, on web and mobile, and I like problems that
            sit close to the product.
          </p>
        </div>

        {/* What I build (Right Column moved down with top padding) */}
        <div
          className="reveal relative z-20 lg:col-span-3 lg:col-start-10 lg:row-start-1 lg:flex lg:flex-col lg:justify-start pt-8 sm:pt-12 lg:pt-24"
          style={{ "--d": "420ms" }}
        >
          {/* Header: WHAT I BUILD */}
          <p className="flex items-center gap-3 text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-ink-muted lg:justify-end">
            <span
              aria-hidden="true"
              className="h-px w-8 bg-accent-soft/70 shadow-[0_0_8px_rgba(139,147,255,0.6)]"
            />
            What I Build
          </p>

          {/* Stat cards — icon, headline number, label */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="group rounded-2xl border border-white/10 bg-card px-4 py-5 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-elevated cursor-default"
              >
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05] text-accent-soft transition-colors duration-300 group-hover:bg-accent/10">
                  <stat.icon className="text-base" />
                </div>
                <p className="mt-3 text-2xl font-bold text-white">{stat.value}</p>
                <p className="mt-1 text-[0.6875rem] font-medium uppercase tracking-wide text-ink-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Selected Products & Teams Footer Block */}
          <div className="mt-8 pt-5 border-t border-white/[0.08]">
            <p className="flex items-center gap-3 text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-ink-muted lg:justify-end">
              <span
                aria-hidden="true"
                className="h-px w-8 bg-accent-soft/70 shadow-[0_0_8px_rgba(139,147,255,0.6)]"
              />
              Selected products &amp; teams
            </p>
            <div className="mt-4 flex flex-wrap gap-2 lg:justify-end">
              {WORKED_ON.map((name) => (
                <span
                  key={name}
                  className="cursor-default rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-ink-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-white/[0.08] hover:text-white hover:shadow-[0_8px_20px_-8px_rgba(139,147,255,0.4)]"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutme;
