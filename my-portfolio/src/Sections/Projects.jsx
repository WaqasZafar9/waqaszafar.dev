import React, { useEffect, useRef, useState } from "react";
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

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/85 transition-all duration-300 ease-out ${
        isClosing ? "opacity-0 backdrop-blur-none" : "opacity-100 backdrop-blur-2xl animate-in fade-in"
      }`}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div
        ref={modalRef}
        className={`relative w-full max-w-6xl max-h-[92vh] overflow-y-auto rounded-3xl border border-white/10 bg-[#0a0b10] p-6 sm:p-10 lg:p-12 text-white shadow-[0_30px_90px_rgba(0,0,0,0.95)] transition-all duration-300 transform ease-out ${
          isClosing
            ? "opacity-0 scale-95 translate-y-4"
            : "opacity-100 scale-100 translate-y-0 animate-in zoom-in-95"
        } [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden`}
      >
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 sm:top-8 sm:right-8 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-white/70 transition-all duration-300 hover:bg-white/20 hover:text-white hover:scale-110 cursor-pointer z-30 active:scale-95"
          title="Close Modal (Esc)"
        >
          ✕
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start border-b border-white/10 pb-10">
          <div className="lg:col-span-5 relative overflow-hidden rounded-2xl border border-white/15 bg-black/50 shadow-2xl">
            <img
              src={project.image}
              alt={cs.title}
              className="w-full aspect-[16/10] object-cover object-top"
            />
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                  {cs.title}
                </h2>
              </div>
              <p className="mt-3 text-base sm:text-lg leading-relaxed text-sky-400/90 font-medium">
                {cs.tagline}
              </p>
              <p className="mt-3.5 text-sm leading-relaxed text-slate-300/90">
                {cs.overview}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/10 pt-6">
              <div>
                <span className="text-[0.7rem] uppercase font-mono font-bold tracking-widest text-slate-400 block">
                  Product / Category
                </span>
                <span className="mt-1.5 text-xs font-semibold text-white block">
                  {cs.category}
                </span>
              </div>
              <div>
                <span className="text-[0.7rem] uppercase font-mono font-bold tracking-widest text-slate-400 block">
                  Role
                </span>
                <span className="mt-1.5 text-xs font-semibold text-white block">
                  {cs.role}
                </span>
              </div>
              <div>
                <span className="text-[0.7rem] uppercase font-mono font-bold tracking-widest text-slate-400 block">
                  Focus
                </span>
                <span className="mt-1.5 text-xs font-semibold text-white block">
                  {cs.focus}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 space-y-10">
          <div className="rounded-2xl border border-white/10 bg-[#11131c] p-6 sm:p-8 shadow-xl">
            <h3 className="text-lg font-bold text-white tracking-wide">
              The Impact I Created
            </h3>
            <p className="mt-3.5 text-sm leading-relaxed text-slate-300">
              {cs.impact}
            </p>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-sky-400 font-mono font-semibold text-xs uppercase tracking-wider">
                ▲ Product Experience Optimization
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#11131c] p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white mb-4 tracking-wide">
              What I Worked On
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-sm text-slate-300">
              {cs.workedOn.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-sky-400 mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {cs.highlights && cs.highlights.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-white mb-5 tracking-wide">
                Product Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {cs.highlights.map((hl, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-white/10 bg-[#11131c] p-5 transition-all duration-300 hover:border-white/20"
                  >
                    <h4 className="text-base font-semibold text-white">{hl.name}</h4>
                    <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">{hl.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="pt-6 border-t border-white/10">
            <span className="text-xs uppercase font-mono font-bold tracking-widest text-slate-400 block mb-4">
              Technologies Used
            </span>
            <div className="flex flex-wrap gap-2.5">
              {cs.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/15 bg-white/[0.05] px-4 py-1.5 text-xs font-medium text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-white/15 bg-[#11131c] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5">
            <p className="text-sm italic text-slate-300 max-w-2xl">
              &quot;{cs.closing}&quot;
            </p>
            <div className="flex items-center gap-3 shrink-0">
              {project.liveUrl && project.liveUrl !== "#" && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/20 bg-white px-6 py-2.5 text-xs sm:text-sm font-bold text-black transition-all duration-300 hover:bg-slate-200 hover:scale-105 active:scale-95 shadow-md"
                >
                  {project.liveButtonText}
                </a>
              )}
              <button
                onClick={handleClose}
                className="rounded-full border border-white/20 bg-white/[0.08] px-6 py-2.5 text-xs sm:text-sm font-semibold text-white transition-all duration-300 hover:bg-white/20 cursor-pointer active:scale-95"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * "New Work Incoming" Banner — deliberately the loudest thing in the
 * section so it's the first place the eye lands, ahead of shipped work.
 */
function ComingSoonBanner() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c0d13]/85 px-5 py-4 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] sm:px-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 -right-10 h-28 w-28 rounded-full bg-accent/20 blur-[60px]"
      />
      <div className="relative flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
        <span className="relative mt-0.5 flex h-2 w-2 shrink-0 sm:mt-0">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-soft opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-soft" />
        </span>
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-[0.6rem] font-bold uppercase tracking-[0.18em] text-accent-soft">
            New work in progress
          </span>
          <p className="mt-1.5 text-sm font-semibold text-white">
            Freshly completed projects are on their way to this section.
          </p>
          <p className="mt-0.5 text-xs text-ink-soft/80 max-w-2xl">
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
    <div className="rounded-3xl border border-white/10 bg-[#0c0d13]/90 p-6 sm:p-8 lg:p-10 backdrop-blur-xl shadow-2xl relative overflow-hidden shimmer-card">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        <div className="lg:col-span-6 h-64 sm:h-80 w-full rounded-2xl border border-white/10 bg-white/[0.04] animate-pulse" />
        <div className="lg:col-span-6 space-y-4">
          <div className="h-4 w-36 rounded bg-white/[0.08] animate-pulse" />
          <div className="h-8 w-2/3 rounded-xl bg-white/[0.1] animate-pulse" />
          <div className="flex gap-2">
            <div className="h-6 w-24 rounded-full bg-emerald-500/20 animate-pulse" />
            <div className="h-6 w-20 rounded-full bg-sky-500/20 animate-pulse" />
          </div>
          <div className="h-4 w-full rounded bg-white/[0.05] animate-pulse" />
          <div className="h-4 w-4/5 rounded bg-white/[0.05] animate-pulse" />
          <div className="flex gap-4 pt-4">
            <div className="h-11 w-36 rounded-2xl bg-white/[0.1] animate-pulse" />
            <div className="h-11 w-36 rounded-2xl bg-white/[0.06] animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Clean Project Card Component with Metallic Shimmer Effect
 */
function ProjectCard({ project, onOpenCaseStudy }) {
  return (
    <article className="group relative rounded-3xl border border-white/10 bg-[#0c0d13]/95 p-6 sm:p-8 lg:p-10 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:shadow-[0_25px_65px_rgba(139,147,255,0.15)] shimmer-card">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        <div className="lg:col-span-6 relative overflow-hidden rounded-2xl border border-white/15 bg-black/40 shadow-2xl group-hover:border-white/30 transition-all duration-500">
          <div className="aspect-[16/10] overflow-hidden relative">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d13]/80 via-transparent to-transparent opacity-60" />
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col justify-between h-full">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent-soft">
              {project.meta}
            </span>

            <h3 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-accent-soft transition-colors duration-300">
              {project.title}
            </h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-sky-500/30 bg-sky-500/10 px-3.5 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-sky-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-ink-soft/90">
              {project.description}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              onClick={() => onOpenCaseStudy(project)}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/[0.06] px-6 py-3 text-xs sm:text-sm font-medium tracking-wide text-white backdrop-blur-md shadow-lg transition-all duration-300 hover:bg-white/[0.12] hover:border-white/50 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:-translate-y-0.5 active:scale-95 cursor-pointer"
            >
              View case study
              <span className="text-xs">↗</span>
            </button>

            {project.liveUrl && project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-accent/40 bg-accent/10 px-6 py-3 text-xs sm:text-sm font-medium tracking-wide text-accent-soft backdrop-blur-md shadow-lg transition-all duration-300 hover:bg-accent/25 hover:border-accent/70 hover:text-white hover:shadow-[0_0_30px_rgba(139,147,255,0.35)] hover:-translate-y-0.5 active:scale-95"
              >
                {project.liveButtonText}
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
      className="relative bg-[#08090c] py-20 px-4 sm:px-6 font-sans overflow-hidden min-h-screen"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[450px] w-[min(90vw,700px)] -translate-x-1/2 rounded-full bg-accent/[0.08] blur-[140px]"
      />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-accent-soft">
            <span className="h-px w-6 bg-accent-soft/60" />
            Selected Work
            <span className="h-px w-6 bg-accent-soft/60" />
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Shipped Products &amp; Case Studies.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-ink-soft max-w-xl mx-auto">
            Explore recent web platforms, mobile applications, and software engineering projects.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-mono tracking-wider uppercase text-white/70">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white text-base sm:text-lg">{String(totalCount).padStart(2, "0")}</span>
            <span className="text-ink-muted">TOTAL PROJECTS</span>
          </div>
          <span className="h-4 w-px bg-white/20 hidden sm:block" />
          <div className="flex items-center gap-2">
            <span className="font-bold text-white text-base sm:text-lg">{String(webPlatformsCount).padStart(2, "0")}</span>
            <span className="text-ink-muted">WEB PLATFORMS</span>
          </div>
          <span className="h-4 w-px bg-white/20 hidden sm:block" />
          <div className="flex items-center gap-2">
            <span className="font-bold text-white text-base sm:text-lg">{String(mobileAppsCount).padStart(2, "0")}</span>
            <span className="text-ink-muted">MOBILE APPS</span>
          </div>
          <span className="h-4 w-px bg-white/20 hidden sm:block" />
          <div className="flex items-center gap-2">
            <span className="font-bold text-white text-base sm:text-lg">{String(desktopCount).padStart(2, "0")}</span>
            <span className="text-ink-muted">DESKTOP</span>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-white/10 bg-[#0d0e14]/90 p-1.5 backdrop-blur-xl shadow-xl">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.label;
              return (
                <button
                  key={cat.label}
                  onClick={() => handleCategoryChange(cat.label)}
                  className={`flex items-center gap-2 rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer active:scale-95 ${
                    isActive
                      ? "bg-white text-black font-bold shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-105"
                      : "text-ink-soft hover:text-white hover:bg-white/[0.06]"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[0.7rem] font-mono rounded-full px-1.5 py-0.5 ${
                      isActive ? "bg-black/15 text-black font-bold" : "text-ink-muted"
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
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-8">
            <p className="text-xs sm:text-sm text-ink-muted">
              Showing <span className="font-semibold text-white">{startIndex + 1}</span> to{" "}
              <span className="font-semibold text-white">
                {Math.min(startIndex + ITEMS_PER_PAGE, filteredProjects.length)}
              </span>{" "}
              of <span className="font-semibold text-white">{filteredProjects.length}</span> projects
            </p>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="rounded-xl border border-white/15 bg-white/[0.05] px-4 py-2 text-xs font-semibold text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:not-disabled:bg-white/10 hover:not-disabled:border-white/30 cursor-pointer active:scale-95"
              >
                ← Previous
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`h-9 w-9 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer active:scale-95 ${
                    currentPage === pageNum
                      ? "bg-accent text-white shadow-[0_0_15px_rgba(139,147,255,0.5)] scale-105"
                      : "border border-white/10 bg-white/[0.03] text-ink-soft hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {pageNum}
                </button>
              ))}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="rounded-xl border border-white/15 bg-white/[0.05] px-4 py-2 text-xs font-semibold text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:not-disabled:bg-white/10 hover:not-disabled:border-white/30 cursor-pointer active:scale-95"
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
