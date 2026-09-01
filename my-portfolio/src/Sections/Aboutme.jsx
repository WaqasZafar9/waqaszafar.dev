import { useEffect, useRef, useState } from "react";
import { FaBriefcase, FaGlobe, FaLaptopCode, FaLayerGroup } from "react-icons/fa";
import portrait from "../assets/my.webp";
import ShinyButton from "../Components/ShinyButton/ShinyButton";

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
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

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
      className={`relative overflow-hidden px-5 pt-3 pb-12 font-sans sm:px-6 sm:pt-4 sm:pb-16 lg:pt-6 lg:pb-20 bg-background ${
        revealed ? "is-visible" : ""
      }`}
      style={{ "--mx": "0", "--my": "0" }}
    >
      {/* Flat, solid dark backdrop — no grid/haze layers. Content sits on a
          clean surface so text and cards carry all the contrast. */}
      <div className="pointer-events-none absolute inset-0 dark:bg-[#0b0e14]" />

      {/* One soft glow directly behind the portrait — just enough lift to
          keep the black from feeling like a void, without fogging the page. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[min(55vw,460px)] w-[min(55vw,460px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.1] blur-[120px]"
        style={{
          transform:
            "translate(-50%, -50%) translate3d(calc(var(--mx) * 18px), calc(var(--my) * 18px), 0)",
        }}
      />

      {/* Top hairline — matches the primary separator every other section opens with */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 h-px w-full bg-linear-to-r from-transparent via-primary/50 to-transparent"
      />

      {/* Depth motes */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {MOTES.map((mote) => (
          <span
            key={`${mote.top}-${mote.left}`}
            className="about-float absolute rounded-full bg-primary/40"
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
                  className="h-full w-full select-none object-cover object-bottom translate-y-[6%] dark:grayscale dark:contrast-[1.35] dark:brightness-[0.94]"
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
            {/* "Previously designed for" Header with Brand Badges.
                flex-wrap + shrunk mobile sizing keeps this pill from
                overflowing (and getting clipped by the section's
                overflow-hidden) on narrow phones. */}
            <div className="flex max-w-full flex-wrap items-center justify-center gap-2 bg-background/80 px-3 py-1.5 rounded-full backdrop-blur-md border border-black/15 dark:border-white/15 shadow-xl sm:gap-3 sm:px-4">
              <span className="text-[0.6875rem] font-normal text-muted-foreground/90 tracking-wide sm:text-xs md:text-sm">
                Previously designed for
              </span>
              <div className="flex items-center gap-1 sm:gap-1.5">
                <div
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-black/20 dark:border-white/20 bg-black/10 dark:bg-white/10 backdrop-blur-md shadow-md p-1.5 transition-all duration-300 hover:scale-110 hover:border-black/40 hover:dark:border-white/40 sm:h-8 sm:w-8"
                  title="Lab 23 Technology"
                >
                  <img src="/Icons/lab23.svg" alt="Lab 23" className="h-full w-full object-contain" />
                </div>
                <div
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-black/20 dark:border-white/20 bg-black/10 dark:bg-white/10 backdrop-blur-md shadow-md p-1.5 transition-all duration-300 hover:scale-110 hover:border-black/40 hover:dark:border-white/40 sm:h-8 sm:w-8"
                  title="Zanderio AI"
                >
                  <img src="/Icons/zanderio.svg" alt="Zanderio AI" className="h-full w-full object-contain" />
                </div>
                <div
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-black/20 dark:border-white/20 bg-black/10 dark:bg-white/10 backdrop-blur-md shadow-md p-1.5 transition-all duration-300 hover:scale-110 hover:border-black/40 hover:dark:border-white/40 sm:h-8 sm:w-8"
                  title="Social Swirl"
                >
                  <img src="/Icons/social-swirl-logo.png" alt="Social Swirl" className="h-full w-full object-contain" />
                </div>
              </div>
            </div>

            {/* 2 Sleek CTA Buttons matching Reference Screenshot */}
            <div className="flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:justify-center">
              <ShinyButton
                href="#projects"
                className={`w-full sm:w-auto ${FOCUS_RING}`}
              >
                View Impact &amp; Work
              </ShinyButton>
              <ShinyButton
                href="https://calendly.com/mwaqaszafar76/30min"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full sm:w-auto ${FOCUS_RING}`}
              >
                Book a 30 min call
              </ShinyButton>
            </div>
          </div>
        </div>

        {/* Introduction (Left Column moved down with top padding) */}
        <div
          className="reveal relative z-20 group/intro lg:col-span-3 lg:col-start-1 lg:row-start-1 lg:flex lg:flex-col lg:justify-start pt-8 sm:pt-12 lg:pt-24"
          style={{ "--d": "0ms" }}
        >
          {/* Aligned Editorial Label */}
          <p className="mb-6 flex items-center gap-3 text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-muted-foreground">
            <span
              aria-hidden="true"
              className="h-px w-8 bg-primary/70 shadow-[0_0_8px_color-mix(in_srgb,var(--color-primary)_60%,transparent)]"
            />
            About Me
          </p>

          <h2 className="text-balance text-2xl font-semibold leading-[1.18] tracking-tight text-foreground sm:text-[1.75rem] lg:text-3xl">
            I build things that{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-foreground to-primary">
              still work after launch day
            </span>
            .
          </h2>
          <p className="mt-5 text-justify text-pretty text-[0.9375rem] leading-relaxed text-muted-foreground">
            Hy, I turn product ideas into high-performance web and mobile
            applications that load fast, scale effortlessly, and convert
            users. Specializing in end-to-end frontend and full-stack
            development, I take complete ownership of your project and from
            translating raw designs into pixel-perfect UIs to engineering
            backends and seamless API integrations.
          </p>
          <p className="mt-4 text-justify text-pretty text-[0.9375rem] leading-relaxed text-muted-foreground">
            Having launched production grade SaaS products and client
            platforms, I focus heavily on clean architecture, lightning-fast
            speed, and maintainable code so your software performs flawlessly
            after launch day. You get a reliable partner who communicates
            clearly, respects deadlines, and builds technology designed to
            move your business forward.
          </p>
        </div>

        {/* What I build (Right Column moved down with top padding) */}
        <div
          className="reveal relative z-20 lg:col-span-3 lg:col-start-10 lg:row-start-1 lg:flex lg:flex-col lg:justify-start pt-8 sm:pt-12 lg:pt-24"
          style={{ "--d": "420ms" }}
        >
          {/* Header: WHAT I BUILD */}
          <p className="flex items-center gap-3 text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-muted-foreground lg:justify-end">
            <span
              aria-hidden="true"
              className="h-px w-8 bg-primary/70 shadow-[0_0_8px_color-mix(in_srgb,var(--color-primary)_60%,transparent)]"
            />
            What I Build
          </p>

          {/* Stat cards — icon, headline number, label */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="group rounded-2xl border border-black/10 dark:border-white/10 bg-card px-4 py-5 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card cursor-default"
              >
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-black/[0.05] dark:bg-white/[0.05] text-primary transition-colors duration-300 group-hover:bg-primary/10">
                  <stat.icon className="text-base" />
                </div>
                <p className="mt-3 text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="mt-1 text-[0.6875rem] font-medium uppercase tracking-wide text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Selected Products & Teams Footer Block */}
          <div className="mt-8 pt-5 border-t border-black/[0.08] dark:border-white/[0.08]">
            <p className="flex items-center gap-3 text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-muted-foreground lg:justify-end">
              <span
                aria-hidden="true"
                className="h-px w-8 bg-primary/70 shadow-[0_0_8px_color-mix(in_srgb,var(--color-primary)_60%,transparent)]"
              />
              Selected products &amp; teams
            </p>
            <div className="mt-4 flex flex-wrap gap-2 lg:justify-end">
              {WORKED_ON.map((name) => (
                <span
                  key={name}
                  className="cursor-default rounded-full border border-black/10 dark:border-white/10 bg-black/[0.04] dark:bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-black/[0.08] hover:dark:bg-white/[0.08] hover:text-foreground hover:shadow-[0_8px_20px_-8px_color-mix(in_srgb,var(--color-primary)_40%,transparent)]"
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
