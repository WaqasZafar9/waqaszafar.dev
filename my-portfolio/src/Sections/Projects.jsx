import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FaFilter, FaChevronDown, FaCheck } from "react-icons/fa6";
import PROJECTS_DATA from "./projectsData";

const ITEMS_PER_PAGE = 4;

function CaseStudyModal({ project, onClose }) {
  const modalRef = useRef(null);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 240);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!project || !project.caseStudy) return null;
  const cs = project.caseStudy;

  // Portaled to <body>: this modal is opened from inside the Projects
  // section, which framer-motion's Reveal wrapper animates via CSS
  // transform. Any ancestor with a `transform` (even one that's settled at
  // its identity value) becomes the containing block for `position: fixed`
  // descendants, so left in place this modal was fixed to that section's
  // box instead of the viewport — full-screen and centered on some scroll
  // positions, clipped/offset on others. Rendering at the document root
  // sidesteps that entirely.
  return createPortal(
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/85 transition-all duration-300 ease-out ${
        isClosing ? "opacity-0 backdrop-blur-none" : "opacity-100 backdrop-blur-2xl animate-in fade-in"
      }`}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      {/* Close button lives outside the scrolling card, `fixed` to the
          viewport rather than `absolute` inside it — a case study is long
          enough on mobile that an absolutely-positioned button anchored to
          modalRef's top scrolled out of reach as soon as the user scrolled
          the content, leaving no visible way to close the modal. */}
      <button
        onClick={handleClose}
        className="fixed top-4 right-4 z-[60] flex h-10 w-10 items-center justify-center rounded-full border border-black/15 dark:border-white/15 bg-card/90 text-foreground/70 backdrop-blur-md shadow-lg transition-all duration-300 hover:bg-black/20 hover:dark:bg-white/20 hover:text-foreground hover:scale-110 cursor-pointer active:scale-95 sm:top-6 sm:right-6 sm:h-11 sm:w-11 lg:top-8 lg:right-8"
        title="Close Modal (Esc)"
      >
        ✕
      </button>

      <div
        ref={modalRef}
        className={`relative w-full max-w-6xl max-h-[92vh] overflow-y-auto rounded-3xl border border-black/10 dark:border-white/10 bg-card p-6 sm:p-10 lg:p-12 text-foreground shadow-[0_30px_90px_rgba(0,0,0,0.95)] transition-all duration-300 transform ease-out ${
          isClosing
            ? "opacity-0 scale-95 translate-y-4"
            : "opacity-100 scale-100 translate-y-0 animate-in zoom-in-95"
        } [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden`}
      >

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start border-b border-black/10 dark:border-white/10 pb-10">
          <div className="lg:col-span-5 relative overflow-hidden rounded-2xl border border-black/15 dark:border-white/15 bg-black/50 shadow-2xl">
            <img
              src={project.image}
              alt={cs.title}
              className="w-full aspect-[16/10] object-cover object-top"
            />
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                  {cs.title}
                </h2>
              </div>
              <p className="mt-3 text-base sm:text-lg leading-relaxed text-primary/90 font-medium">
                {cs.tagline}
              </p>
              <p className="mt-3.5 text-sm leading-relaxed text-muted-foreground/90">
                {cs.overview}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-black/10 dark:border-white/10 pt-6">
              <div>
                <span className="text-[0.7rem] uppercase font-mono font-bold tracking-widest text-muted-foreground block">
                  Product / Category
                </span>
                <span className="mt-1.5 text-xs font-semibold text-foreground block">
                  {cs.category}
                </span>
              </div>
              <div>
                <span className="text-[0.7rem] uppercase font-mono font-bold tracking-widest text-muted-foreground block">
                  Role
                </span>
                <span className="mt-1.5 text-xs font-semibold text-foreground block">
                  {cs.role}
                </span>
              </div>
              <div>
                <span className="text-[0.7rem] uppercase font-mono font-bold tracking-widest text-muted-foreground block">
                  Focus
                </span>
                <span className="mt-1.5 text-xs font-semibold text-foreground block">
                  {cs.focus}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 space-y-10">
          <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-card p-6 sm:p-8 shadow-xl">
            <h3 className="text-lg font-bold text-foreground tracking-wide">
              The Impact I Created
            </h3>
            <p className="mt-3.5 text-sm leading-relaxed text-muted-foreground">
              {cs.impact}
            </p>

            <div className="mt-6 pt-4 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
              <span className="text-primary font-mono font-semibold text-xs uppercase tracking-wider">
                ▲ Product Experience Optimization
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-card p-6 sm:p-8">
            <h3 className="text-lg font-bold text-foreground mb-4 tracking-wide">
              What I Worked On
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-sm text-muted-foreground">
              {cs.workedOn.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {cs.highlights && cs.highlights.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-foreground mb-5 tracking-wide">
                Product Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {cs.highlights.map((hl, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-black/10 dark:border-white/10 bg-card p-5 transition-all duration-300 hover:border-black/20 hover:dark:border-white/20"
                  >
                    <h4 className="text-base font-semibold text-foreground">{hl.name}</h4>
                    <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">{hl.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="pt-6 border-t border-black/10 dark:border-white/10">
            <span className="text-xs uppercase font-mono font-bold tracking-widest text-muted-foreground block mb-4">
              Technologies Used
            </span>
            <div className="flex flex-wrap gap-2.5">
              {cs.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-black/15 dark:border-white/15 bg-black/[0.05] dark:bg-white/[0.05] px-4 py-1.5 text-xs font-medium text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-black/15 dark:border-white/15 bg-card p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5">
            <p className="text-sm italic text-muted-foreground max-w-2xl">
              &quot;{cs.closing}&quot;
            </p>
            <div className="flex items-center gap-3 shrink-0">
              {project.liveUrl && project.liveUrl !== "#" && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-black/20 dark:border-white/20 bg-white px-6 py-2.5 text-xs sm:text-sm font-bold text-black transition-all duration-300 hover:bg-foreground hover:scale-105 active:scale-95 shadow-md"
                >
                  {project.liveButtonText}
                </a>
              )}
              <button
                onClick={handleClose}
                className="rounded-full border border-black/20 dark:border-white/20 bg-black/[0.08] dark:bg-white/[0.08] px-6 py-2.5 text-xs sm:text-sm font-semibold text-foreground transition-all duration-300 hover:bg-black/20 hover:dark:bg-white/20 cursor-pointer active:scale-95"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

/**
 * "New Work Incoming" Banner — deliberately the loudest thing in the
 * section so it's the first place the eye lands, ahead of shipped work.
 */
function ComingSoonBanner() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-card/85 px-5 py-4 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] sm:px-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 -right-10 h-28 w-28 rounded-full bg-primary/20 blur-[60px]"
      />
      <div className="relative flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
        <span className="relative mt-0.5 flex h-2 w-2 shrink-0 sm:mt-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
        </span>
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-[0.6rem] font-bold uppercase tracking-[0.18em] text-primary">
            New work in progress
          </span>
          <p className="mt-1.5 text-sm font-semibold text-foreground">
            Freshly completed projects are on their way to this section.
          </p>
          <p className="mt-0.5 text-xs text-muted-foreground/80 max-w-2xl">
            This portfolio is being actively updated — recently finished builds are being
            polished into case studies and will be added here soon.
          </p>
        </div>
      </div>
    </div>
  );
}

/**
 * Shimmer Skeleton Loader for Project Cards
 */
function ProjectCardSkeleton() {
  return (
    <div className="rounded-3xl border border-black/10 dark:border-white/10 bg-card/90 p-6 sm:p-8 lg:p-10 backdrop-blur-xl shadow-2xl relative overflow-hidden shimmer-card">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        <div className="lg:col-span-6 h-64 sm:h-80 w-full rounded-2xl border border-black/10 dark:border-white/10 bg-black/[0.04] dark:bg-white/[0.04] animate-pulse" />
        <div className="lg:col-span-6 space-y-4">
          <div className="h-4 w-36 rounded bg-black/[0.08] dark:bg-white/[0.08] animate-pulse" />
          <div className="h-8 w-2/3 rounded-xl bg-black/[0.1] dark:bg-white/[0.1] animate-pulse" />
          <div className="flex gap-2">
            <div className="h-6 w-24 rounded-full bg-primary/20 animate-pulse" />
            <div className="h-6 w-20 rounded-full bg-primary/20 animate-pulse" />
          </div>
          <div className="h-4 w-full rounded bg-black/[0.05] dark:bg-white/[0.05] animate-pulse" />
          <div className="h-4 w-4/5 rounded bg-black/[0.05] dark:bg-white/[0.05] animate-pulse" />
          <div className="flex gap-4 pt-4">
            <div className="h-11 w-36 rounded-2xl bg-black/[0.1] dark:bg-white/[0.1] animate-pulse" />
            <div className="h-11 w-36 rounded-2xl bg-black/[0.06] dark:bg-white/[0.06] animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * ScrollingScreenshot
 * Frames a tall, full-page site screenshot in a fixed 16/8 window showing
 * just the top on load. On hover it auto-scrolls the image down to reveal
 * the rest of the page, then eases back to the top on mouse-leave — the
 * classic "site preview" scroll effect used across 21st.dev landing pages.
 */
function ScrollingScreenshot({ src, alt }) {
  const frameRef = useRef(null);
  const imgRef = useRef(null);
  const [scrollDistance, setScrollDistance] = useState(0);
  const [duration, setDuration] = useState(6);
  const [hovered, setHovered] = useState(false);

  const measure = () => {
    const frame = frameRef.current;
    const img = imgRef.current;
    if (!frame || !img || !img.naturalWidth) return;

    const renderedHeight = (frame.clientWidth / img.naturalWidth) * img.naturalHeight;
    const distance = Math.max(0, renderedHeight - frame.clientHeight);
    setScrollDistance(distance);
    // ~900px/sec, but always capped so a full-page screenshot (however
    // tall) finishes within a natural hover window instead of only
    // getting partway through before the mouse leaves.
    setDuration(Math.min(6, Math.max(2.2, distance / 900)));
  };

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [src]);

  return (
    <div
      ref={frameRef}
      className="aspect-[16/8] overflow-hidden relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={measure}
        className="absolute inset-x-0 top-0 w-full h-auto ease-linear"
        style={{
          transform: `translateY(${hovered ? -scrollDistance : 0}px)`,
          transitionProperty: "transform",
          transitionDuration: `${hovered ? duration : 0.6}s`,
          transitionTimingFunction: hovered ? "linear" : "ease-out",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-60" />
    </div>
  );
}

/**
 * Clean Project Card Component with Metallic Shimmer Effect
 */
function ProjectCard({ project, onOpenCaseStudy }) {
  return (
    <article className="group relative rounded-3xl border border-black/10 dark:border-white/10 bg-card/95 p-5 sm:p-6 lg:p-8 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-300 hover:-translate-y-1 hover:border-black/25 hover:dark:border-white/25 hover:shadow-[0_25px_65px_color-mix(in_srgb,var(--color-primary)_15%,transparent)]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        <div className="lg:col-span-6 relative overflow-hidden rounded-2xl border border-black/15 dark:border-white/15 bg-black/40 shadow-2xl group-hover:border-black/30 group-hover:dark:border-white/30 transition-all duration-500">
          <ScrollingScreenshot src={project.image} alt={project.title} />
        </div>

        <div className="lg:col-span-6 flex flex-col justify-between h-full">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
              {project.meta}
            </span>

            <h3 className="mt-2 text-xl sm:text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>

            <div className="mt-3 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground/90">
              {project.description}
            </p>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              onClick={() => onOpenCaseStudy(project)}
              className="btn-sheen group/btn inline-flex items-center justify-center gap-2 rounded-2xl border border-black/20 dark:border-white/20 bg-black/[0.06] dark:bg-white/[0.06] px-5 py-2.5 text-xs sm:text-sm font-medium tracking-wide text-foreground backdrop-blur-md shadow-lg transition-all duration-300 hover:bg-black/[0.12] hover:dark:bg-white/[0.12] hover:border-black/50 hover:dark:border-white/50 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:-translate-y-0.5 hover:scale-[1.03] active:scale-95 cursor-pointer"
            >
              <span className="relative z-[1]">View case study</span>
              <span className="relative z-[1] inline-block text-xs transition-transform duration-300 ease-out group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1">
                ↗
              </span>
            </button>

            {project.liveUrl && project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sheen group/btn inline-flex items-center justify-center gap-2 rounded-2xl border border-primary/40 bg-primary/10 px-5 py-2.5 text-xs sm:text-sm font-medium tracking-wide text-primary backdrop-blur-md shadow-lg transition-all duration-300 hover:bg-primary/25 hover:border-primary/70 hover:text-foreground hover:shadow-[0_0_30px_color-mix(in_srgb,var(--color-primary)_35%,transparent)] hover:-translate-y-0.5 hover:scale-[1.03] active:scale-95"
              >
                {/* liveButtonText already carries its own trailing "↗", so
                    the whole label nudges together rather than double-icon. */}
                <span className="relative z-[1] inline-block transition-transform duration-300 ease-out group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5">
                  {project.liveButtonText}
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All work");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [isTabChanging, setIsTabChanging] = useState(false);
  const [isMobileCategoryOpen, setIsMobileCategoryOpen] = useState(false);
  const sectionRef = useRef(null);

  const totalCount = PROJECTS_DATA.length;
  const webPlatformsCount = PROJECTS_DATA.filter((p) => p.category === "Web platforms").length;
  const mobileAppsCount = PROJECTS_DATA.filter((p) => p.category === "Mobile apps").length;
  const desktopCount = PROJECTS_DATA.filter((p) => p.category === "Desktop").length;

  const categories = [
    { label: "All work", count: totalCount },
    { label: "Web platforms", count: webPlatformsCount },
    { label: "Mobile apps", count: mobileAppsCount },
    { label: "Desktop", count: desktopCount },
  ];

  const filteredProjects =
    activeCategory === "All work"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProjects = filteredProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleCategoryChange = (catLabel) => {
    if (catLabel === activeCategory) return;
    setIsTabChanging(true);
    setTimeout(() => {
      setActiveCategory(catLabel);
      setCurrentPage(1);
      setIsTabChanging(false);
    }, 220);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative bg-background py-20 px-4 sm:px-6 font-sans overflow-hidden min-h-screen"
    >
      {/* Top Separator — matches the hairline every other section opens with */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/50 to-transparent" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[450px] w-[min(90vw,700px)] -translate-x-1/2 rounded-full bg-primary/[0.08] blur-[140px]"
      />

      {/* Faint dot grid across the card grid area — this section's own
          signature texture, distinct from the line-grid/hatch used above */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage:
            "radial-gradient(color-mix(in srgb, var(--color-primary) 60%, transparent) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 25%, black 80%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 25%, black 80%, transparent 100%)",
        }}
      />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            <span className="h-px w-6 bg-primary/60" />
            Selected Work
            <span className="h-px w-6 bg-primary/60" />
          </span>
          <h2 className="mt-3 text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground text-balance">
            Shipped Products &amp; Case Studies.
          </h2>
          <p className="mt-3 text-xs sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Explore recent web platforms, mobile applications, and software engineering projects.
          </p>
        </div>

        {/* Stats Grid — 2x2 on mobile, flex row on sm+ */}
        <div className="mt-8 sm:mt-10 grid grid-cols-2 sm:flex flex-wrap items-center justify-center gap-3 sm:gap-10 text-xs sm:text-sm font-mono tracking-wider uppercase text-foreground/70 px-2">
          <div className="flex items-center justify-center sm:justify-start gap-2 bg-black/[0.03] dark:bg-white/[0.03] sm:bg-transparent p-2 sm:p-0 rounded-xl">
            <span className="font-bold text-foreground text-base sm:text-lg">{String(totalCount).padStart(2, "0")}</span>
            <span className="text-muted-foreground text-[0.65rem] sm:text-xs">TOTAL PROJECTS</span>
          </div>
          <span className="h-4 w-px bg-black/20 dark:bg-white/20 hidden sm:block" />
          <div className="flex items-center justify-center sm:justify-start gap-2 bg-black/[0.03] dark:bg-white/[0.03] sm:bg-transparent p-2 sm:p-0 rounded-xl">
            <span className="font-bold text-foreground text-base sm:text-lg">{String(webPlatformsCount).padStart(2, "0")}</span>
            <span className="text-muted-foreground text-[0.65rem] sm:text-xs">WEB PLATFORMS</span>
          </div>
          <span className="h-4 w-px bg-black/20 dark:bg-white/20 hidden sm:block" />
          <div className="flex items-center justify-center sm:justify-start gap-2 bg-black/[0.03] dark:bg-white/[0.03] sm:bg-transparent p-2 sm:p-0 rounded-xl">
            <span className="font-bold text-foreground text-base sm:text-lg">{String(mobileAppsCount).padStart(2, "0")}</span>
            <span className="text-muted-foreground text-[0.65rem] sm:text-xs">MOBILE APPS</span>
          </div>
          <span className="h-4 w-px bg-black/20 dark:bg-white/20 hidden sm:block" />
          <div className="flex items-center justify-center sm:justify-start gap-2 bg-black/[0.03] dark:bg-white/[0.03] sm:bg-transparent p-2 sm:p-0 rounded-xl">
            <span className="font-bold text-foreground text-base sm:text-lg">{String(desktopCount).padStart(2, "0")}</span>
            <span className="text-muted-foreground text-[0.65rem] sm:text-xs">DESKTOP</span>
          </div>
        </div>

        {/* Mobile Dropdown Category Menu (< sm screens) */}
        <div className="mt-6 sm:hidden relative flex justify-center px-2 z-30">
          <div className="w-full max-w-xs relative">
            <button
              type="button"
              onClick={() => setIsMobileCategoryOpen(!isMobileCategoryOpen)}
              className="w-full flex items-center justify-between gap-3 bg-card/90 border border-black/10 dark:border-white/10 rounded-2xl px-4 py-3 shadow-lg backdrop-blur-xl text-foreground cursor-pointer active:scale-98 transition-all"
              aria-expanded={isMobileCategoryOpen}
              aria-label="Select Category"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <FaFilter className="text-primary text-xs shrink-0" />
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider shrink-0">Category:</span>
                <span className="text-xs font-bold text-foreground truncate">{activeCategory}</span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-[0.68rem] font-mono font-bold rounded-full bg-primary/10 text-primary px-2 py-0.5">
                  {categories.find((c) => c.label === activeCategory)?.count || 0}
                </span>
                <FaChevronDown className={`text-xs text-muted-foreground transition-transform duration-300 ${isMobileCategoryOpen ? "rotate-180 text-primary" : ""}`} />
              </div>
            </button>

            {/* Dropdown Menu Items */}
            {isMobileCategoryOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setIsMobileCategoryOpen(false)}
                />
                <div className="absolute left-0 right-0 top-full mt-2 z-50 bg-card/95 border border-black/10 dark:border-white/10 rounded-2xl p-1.5 shadow-2xl backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-200">
                  {categories.map((cat) => {
                    const isActive = activeCategory === cat.label;
                    return (
                      <button
                        key={cat.label}
                        type="button"
                        onClick={() => {
                          handleCategoryChange(cat.label);
                          setIsMobileCategoryOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                          isActive
                            ? "bg-primary/10 text-primary font-bold"
                            : "text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          {isActive ? (
                            <FaCheck className="text-primary text-xs shrink-0" />
                          ) : (
                            <span className="w-3 h-3 rounded-full border border-black/20 dark:border-white/20 shrink-0" />
                          )}
                          <span>{cat.label}</span>
                        </div>
                        <span
                          className={`text-[0.65rem] font-mono rounded-full px-2 py-0.5 ${
                            isActive
                              ? "bg-primary text-background font-bold"
                              : "bg-black/5 dark:bg-white/5 text-muted-foreground"
                          }`}
                        >
                          {cat.count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Desktop Category Tabs (>= sm screens) */}
        <div className="mt-8 hidden sm:flex justify-center px-2">
          <div className="flex items-center justify-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-card/90 p-1.5 backdrop-blur-xl shadow-xl">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.label;
              return (
                <button
                  key={cat.label}
                  type="button"
                  onClick={() => handleCategoryChange(cat.label)}
                  className={`flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 cursor-pointer active:scale-95 ${
                    isActive
                      ? "bg-white text-black font-bold shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-[1.02]"
                      : "text-muted-foreground hover:text-foreground hover:bg-black/[0.06] hover:dark:bg-white/[0.06]"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[0.7rem] font-mono rounded-full px-1.5 py-0.5 ${
                      isActive ? "bg-black/15 text-black font-bold" : "text-muted-foreground"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Cards List with Shimmer Skeleton Loading State */}
        <div className="mt-12 space-y-10 sm:space-y-12">
          <ComingSoonBanner />
          {isTabChanging ? (
            <>
              <ProjectCardSkeleton />
              <ProjectCardSkeleton />
            </>
          ) : (
            paginatedProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenCaseStudy={setSelectedCaseStudy}
              />
            ))
          )}
        </div>

        {totalPages > 1 && (
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-black/10 dark:border-white/10 pt-8">
            <p className="text-xs sm:text-sm text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{startIndex + 1}</span> to{" "}
              <span className="font-semibold text-foreground">
                {Math.min(startIndex + ITEMS_PER_PAGE, filteredProjects.length)}
              </span>{" "}
              of <span className="font-semibold text-foreground">{filteredProjects.length}</span> projects
            </p>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="rounded-xl border border-black/15 dark:border-white/15 bg-black/[0.05] dark:bg-white/[0.05] px-4 py-2 text-xs font-semibold text-foreground transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:not-disabled:bg-black/10 hover:not-disabled:dark:bg-white/10 hover:not-disabled:border-black/30 hover:not-disabled:dark:border-white/30 cursor-pointer active:scale-95"
              >
                ← Previous
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`h-9 w-9 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer active:scale-95 ${
                    currentPage === pageNum
                      ? "bg-primary text-foreground shadow-[0_0_15px_color-mix(in_srgb,var(--color-primary)_50%,transparent)] scale-105"
                      : "border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03] text-muted-foreground hover:bg-black/10 hover:dark:bg-white/10 hover:text-foreground"
                  }`}
                >
                  {pageNum}
                </button>
              ))}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="rounded-xl border border-black/15 dark:border-white/15 bg-black/[0.05] dark:bg-white/[0.05] px-4 py-2 text-xs font-semibold text-foreground transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:not-disabled:bg-black/10 hover:not-disabled:dark:bg-white/10 hover:not-disabled:border-black/30 hover:not-disabled:dark:border-white/30 cursor-pointer active:scale-95"
              >
                Next →
              </button>
            </div>
          </div>
        )}
      </div>

      {selectedCaseStudy && (
        <CaseStudyModal
          project={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
        />
      )}
    </section>
  );
}

export default Projects;
