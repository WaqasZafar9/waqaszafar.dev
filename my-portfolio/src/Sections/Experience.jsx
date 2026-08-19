import React, { useEffect, useRef, useState } from "react";
import { FaDownload } from "react-icons/fa";
import resume from "../assets/Resume.pdf";
import ShinyButton from "../Components/ShinyButton/ShinyButton";

// Cumulative offsetTop up to (but not including) `stop`. Unlike
// getBoundingClientRect, offsetTop is a pure layout value — it ignores any
// CSS transform an ancestor applies (e.g. the section's scroll-reveal
// animation), so it stays correct even while that transform is mid-transition.
function offsetTopUntil(el, stop) {
  let top = 0;
  let node = el;
  while (node && node !== stop) {
    top += node.offsetTop;
    node = node.offsetParent;
  }
  return top;
}

const EXPERIENCE_DATA = [
  {
    id: "exp-1",
    company: "Lab 23 Technology",
    logoSrc: "/Icons/lab23.svg",
    logoText: "L23",
    title: "Software Engineer",
    period: "Oct 2025 - Present",
    type: "Full-Time",
    status: "PRESENT",
    highlights: [
      "Developing and maintaining responsive web applications using React.js and Next.js.",
      "Collaborating with cross-functional teams to deliver high-quality features on schedule.",
      "Optimizing reusable component architecture for enhanced performance and maintainability.",
    ],
    stack: ["React.js", "Next.js", "JavaScript", "REST APIs"],
  },
  {
    id: "exp-2",
    company: "Lab 23 Technology",
    logoSrc: "/Icons/lab23.svg",
    logoText: "L23",
    title: "Frontend Engineer - Intern",
    period: "Jul 2025 - Oct 2025",
    type: "Internship",
    highlights: [
      "Improved UI experience and performance across multiple core frontend modules.",
      "Integrated REST APIs and optimized React components by reducing unnecessary re-renders.",
    ],
    stack: ["React.js", "JavaScript", "Tailwind CSS", "REST APIs"],
  },
  {
    id: "exp-3",
    company: "Social Swirl",
    logoSrc: "/Icons/social-swirl-logo.png",
    logoText: "SS",
    title: "App Developer - Intern",
    period: "Aug 2024 - Oct 2024",
    type: "Internship",
    highlights: [
      "Developed mobile application screens in Flutter with modular, reusable UI components.",
      "Connected app features with backend APIs and improved app navigation flow and usability.",
    ],
    stack: ["Flutter", "Dart", "Firebase", "APIs"],
  },
];

const EDUCATION_DATA = [
  {
    institution: "Riphah International University",
    degree: "BS Computer Science",
    period: "2021 - 2025",
    field: "Computer Science",
    status: "Completed",
  },
  {
    institution: "Punjab Group of Colleges",
    degree: "Intermediate (ICS)",
    period: "2019 - 2021",
    field: "Computer Science",
    status: "Completed",
  },
];

const FOCUS_RING =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-night";

function Experience() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [timelineProgress, setTimelineProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const timelineRef = useRef(null);
  const [nodeTops, setNodeTops] = useState([]);
  const [trackEnd, setTrackEnd] = useState(0);
  const [cardInView, setCardInView] = useState(() => EXPERIENCE_DATA.map(() => false));

 
  useEffect(() => {
    const cards = cardRefs.current.filter(Boolean);
    if (!cards.length) return undefined;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCardInView(EXPERIENCE_DATA.map(() => true));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        setCardInView((prev) => {
          const next = [...prev];
          entries.forEach((entry) => {
            const idx = cardRefs.current.indexOf(entry.target);
            if (idx !== -1) next[idx] = entry.isIntersecting;
          });
          return next;
        });
      },
      { threshold: 0.15, rootMargin: "-8% 0px -8% 0px" }
    );

    cards.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);


  useEffect(() => {
    const container = timelineRef.current;
    if (!container) return undefined;

    const measure = () => {
      const cards = cardRefs.current.filter(Boolean);
      if (!cards.length) return;

      const base = offsetTopUntil(container, document.body);
      setNodeTops(cards.map((el) => offsetTopUntil(el, document.body) - base));

      const lastCard = cards[cards.length - 1];
      setTrackEnd(
        offsetTopUntil(lastCard, document.body) - base + lastCard.offsetHeight
      );
    };

    measure();
 
    document.fonts?.ready?.then(measure);

    const observer = new ResizeObserver(measure);
    observer.observe(container);
    cardRefs.current.forEach((el) => el && observer.observe(el));
    window.addEventListener("resize", measure);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  // Check reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    const handleChange = () => setReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Track scroll position to update active card index and vertical timeline line progress
  useEffect(() => {
    if (reducedMotion) return undefined;

    let rafId = 0;
    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        if (!sectionRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Progress of section scrolling through viewport (0 to 1)
        const totalScrollDistance = rect.height - windowHeight;
        if (totalScrollDistance <= 0) return;
        
        const scrolled = Math.max(0, -rect.top);
        const progress = Math.min(1, Math.max(0, scrolled / totalScrollDistance));
        setTimelineProgress(progress);

        // Determine active card based on card bounding rects
        let currentActive = 0;
        cardRefs.current.forEach((cardEl, idx) => {
          if (cardEl) {
            const cardRect = cardEl.getBoundingClientRect();
            if (cardRect.top <= windowHeight * 0.45) {
              currentActive = idx;
            }
          }
        });
        setActiveIndex(currentActive);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, [reducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative bg-[#08090c] py-20 px-4 sm:px-6 font-sans overflow-hidden min-h-screen"
    >
      {/* Background Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-accent/[0.06] blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 bottom-1/4 h-[500px] w-[500px] rounded-full bg-accent-deep/[0.08] blur-[140px]"
      />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Header Section */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between border-b border-white/10 pb-8">
          <div>
            <span className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent-soft">
              <span className="h-px w-8 bg-accent-soft/60" />
              Experience
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Where I&apos;ve built and shipped.
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-ink-soft max-w-xl">
              A log of my engineering roles, product contributions, and technical growth.
            </p>
          </div>

          {/* Download CV CTA */}
          <ShinyButton
            href={resume}
            download="Waqas_Zafar_CV.pdf"
            className={`group !px-6 !py-3 text-xs font-medium ${FOCUS_RING}`}
          >
            Download CV
            <FaDownload className="text-[0.7rem] transition-transform duration-300 group-hover:translate-y-0.5" />
          </ShinyButton>
        </div>

        {/* Interactive Experience Timeline Container */}
        <div ref={timelineRef} className="relative mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Vertical Timeline Track (Left Column on Desktop) */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="relative pl-6" style={{ height: trackEnd || undefined }}>
              {/* Background track — starts level with the first card's top edge,
                  ends level with the last card's bottom edge (the same points
                  the dots below sit on). z-0 + the dots' z-10 below guarantees
                  the line always paints behind the dots, never over them. */}
              {/* left-[32px] = 8px design offset + the 24px (pl-6) the dots'
                  own positioned wrapper picks up from this container's
                  padding — keeps the track centred under the dots, which
                  sit inside that separate positioning context. */}
              <div
                className="absolute left-[32px] z-0 w-1 rounded-full bg-white/20 border border-white/10"
                style={{
                  top: nodeTops[0] ?? 0,
                  height: Math.max(0, trackEnd - (nodeTops[0] ?? 0)),
                }}
              />

              {/* Animated glowing progress line, filling the same span */}
              <div
                className="absolute left-[32px] z-0 w-1 rounded-full bg-gradient-to-b from-white via-accent-soft to-accent transition-all duration-200 ease-out shadow-[0_0_16px_rgba(139,147,255,0.95),0_0_30px_rgba(255,255,255,0.7)]"
                style={{
                  top: nodeTops[0] ?? 0,
                  height:
                    Math.max(0, trackEnd - (nodeTops[0] ?? 0)) *
                    Math.min(1, Math.max(0.02, timelineProgress)),
                }}
              />

              {/* Timeline nodes — each pinned to its card's vertical position */}
              <div className="relative z-10">
                {EXPERIENCE_DATA.map((exp, idx) => {
                  const isActive = activeIndex === idx;
                  const isPassed = activeIndex > idx;
                  return (
                    <button
                      key={exp.id}
                      onClick={() => {
                        cardRefs.current[idx]?.scrollIntoView({ behavior: "smooth", block: "center" });
                      }}
                      // -translate-y-1/2 centres the dot (and this row, since
                      // items-center centres every child on the same axis) on
                      // `top`, so the dot's centre lands exactly on the
                      // card's top edge — matching height, whatever it is.
                      className="group absolute left-0 flex -translate-y-1/2 items-center gap-4 text-left transition-all duration-300 cursor-pointer"
                      style={{
                        top: nodeTops[idx] === undefined ? idx * 160 : nodeTops[idx],
                      }}
                    >
                      {/* Node Dot - Larger & Glowing */}
                      <div
                        className={`flex h-5 w-5 items-center justify-center rounded-full transition-all duration-300 ${
                          isActive
                            ? "bg-white scale-125 shadow-[0_0_20px_rgba(255,255,255,1),0_0_35px_rgba(139,147,255,0.9)]"
                            : isPassed
                            ? "bg-accent-soft scale-105 shadow-[0_0_12px_rgba(139,147,255,0.6)]"
                            : "bg-[#141620] border-2 border-white/30"
                        }`}
                      >
                        {isActive && <span className="h-2 w-2 rounded-full bg-[#08090c]" />}
                      </div>

                      {/* Timeline Node Text */}
                      <div className="transition-all duration-300">
                        <p
                          className={`text-xs sm:text-sm font-bold tracking-wide transition-colors ${
                            isActive ? "text-white scale-105" : "text-ink-muted group-hover:text-white/90"
                          }`}
                        >
                          {exp.company}
                        </p>
                        <p
                          className={`text-[0.75rem] transition-colors ${
                            isActive ? "text-accent-soft font-semibold" : "text-ink-muted/70"
                          }`}
                        >
                          {exp.title}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Stacking Experience Cards Container */}
          <div className="lg:col-span-9 space-y-10 sm:space-y-12 lg:space-y-16 pb-12">
            {EXPERIENCE_DATA.map((item, index) => {
              const isActive = activeIndex === index;
              
              return (
                <div
                  key={item.id}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className={`transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:blur-none ${
                    cardInView[index]
                      ? "opacity-100 translate-y-0 blur-none"
                      : "opacity-0 translate-y-10 blur-[6px]"
                  }`}
                  style={{
                    // Stacking depth effects on desktop
                    zIndex: index + 10,
                  }}
                >
                  <article
                    className={`group relative rounded-2xl border transition-all duration-500 bg-[#0d0e14]/95 backdrop-blur-xl p-6 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] ${
                      isActive
                        ? "border-white/25 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_35px_rgba(139,147,255,0.15)] scale-[1.01]"
                        : "border-white/10 opacity-90 hover:border-white/20"
                    }`}
                  >
                    {/* Top Row: Company Badge + Title + Period */}
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between border-b border-white/10 pb-6">
                      <div className="flex items-center gap-4">
                        {/* Company Logo Badge */}
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/[0.06] p-2.5 shadow-inner">
                          {item.logoSrc ? (
                            <img src={item.logoSrc} alt={`${item.company} logo`} className="h-full w-full object-contain" />
                          ) : (
                            <span className="text-sm font-bold text-white">{item.logoText}</span>
                          )}
                        </div>
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-accent-soft transition-colors duration-300">
                            {item.title}
                          </h3>
                          <div className="mt-1 flex items-center gap-2.5">
                            <p className="text-sm font-semibold text-accent-soft">
                              {item.company}
                            </p>
                            <span className="h-1 w-1 rounded-full bg-white/30" />
                            <span className="text-xs text-ink-muted">{item.type}</span>
                          </div>
                        </div>
                      </div>

                      {/* Date & Status */}
                      <div className="flex sm:flex-col sm:items-end justify-between gap-1 text-xs text-ink-soft">
                        <span className="font-mono text-xs font-medium text-white/80 bg-white/[0.05] px-3 py-1 rounded-full border border-white/10">
                          {item.period}
                        </span>
                        {item.status && (
                          <span className="inline-flex items-center gap-1.5 text-[0.7rem] font-semibold tracking-wider uppercase text-emerald-400 mt-1">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            {item.status}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Highlights List */}
                    <ul className="mt-6 space-y-2.5 text-sm leading-relaxed text-ink-soft">
                      {item.highlights.map((point) => (
                        <li key={point} className="flex items-start gap-3">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-soft/80" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack Pills */}
                    <div className="mt-7 flex flex-wrap items-center gap-2 pt-5 border-t border-white/[0.08]">
                      <span className="text-[0.7rem] uppercase tracking-wider font-semibold text-ink-muted mr-1">
                        Stack:
                      </span>
                      {item.stack.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-ink-soft transition-all duration-300 hover:border-white/25 hover:text-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>

        {/* Education Section Header (Commented out as requested) */}
        {/*
        <div className="mt-28 border-t border-white/10 pt-16">
          <span className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent-soft">
            <span className="h-px w-8 bg-accent-soft/60" />
            Education History
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Academic Background
          </h2>
          <p className="mt-2 text-sm sm:text-base text-ink-soft">
            Degrees and institutional training in Computer Science.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {EDUCATION_DATA.map((item) => (
              <article
                key={item.degree}
                className="group rounded-2xl border border-white/10 bg-[#0d0e14]/90 p-6 sm:p-7 backdrop-blur-md shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/[0.05] text-lg text-white">
                    🎓
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-accent-soft">
                      {item.degree}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-accent-soft">
                      {item.institution}
                    </p>
                    <div className="mt-3 flex items-center gap-3 text-xs text-ink-muted">
                      <span>{item.period}</span>
                      <span>·</span>
                      <span>{item.field}</span>
                      <span>·</span>
                      <span className="text-emerald-400 font-medium">{item.status}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        */}
      </div>
    </section>
  );
}

export default Experience;
