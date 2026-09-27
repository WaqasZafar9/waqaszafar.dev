"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import {
  FaFilter,
  FaChevronDown,
  FaCheck,
  FaArrowLeft,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaGithub,
  FaArrowUpRightFromSquare,
  FaRegCalendarCheck,
  FaRegPaperPlane,
} from "react-icons/fa6";
import PROJECTS_DATA from "./projectsData";

const ITEMS_PER_PAGE = 4;

function CaseStudyModal({ project, allProjects = [], onNavigate, onClose }) {
  const scrollRef = useRef(null);
  const [isClosing, setIsClosing] = useState(false);
  const [activeImg, setActiveImg] = useState(0);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 240);
  }, [onClose]);

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
  }, [handleClose]);

  // Reset gallery + scroll position whenever the case study changes
  useEffect(() => {
    setActiveImg(0);
    scrollRef.current?.scrollTo({ top: 0, behavior: "auto" });
  }, [project?.id]);

  if (!project || !project.caseStudy) return null;
  const cs = project.caseStudy;

  // Normalize data so both new (rich) and older projects render cleanly
  const gallery =
    project.gallery && project.gallery.length
      ? project.gallery
      : [{ src: project.image, caption: cs.tagline }];
  const safeIdx = Math.min(activeImg, gallery.length - 1);
  const current = gallery[safeIdx];

  const role = cs.role || project.meta;
  const type = cs.type || project.category;
  const stackChips = cs.stack && cs.stack.length ? cs.stack : cs.technologies || [];
  const liveLabel =
    cs.liveLabel ||
    (project.liveUrl ? project.liveUrl.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "") : "");

  const brief = cs.brief || cs.problem;
  const approach =
    cs.approach && cs.approach.length
      ? cs.approach
      : (cs.highlights || []).map((h) => ({ title: h.name, desc: h.desc }));
  const glance = cs.glance || cs.overview;
  const shipped = cs.shipped && cs.shipped.length ? cs.shipped : cs.workedOn || [];
  const hardParts = cs.hardParts || [];
  const outcome =
    cs.outcome && cs.outcome.length ? cs.outcome : [cs.impact].filter(Boolean);

  const idx = allProjects.findIndex((p) => p.id === project.id);
  const prevProject = idx > 0 ? allProjects[idx - 1] : null;
  const nextProject =
    idx >= 0 && idx < allProjects.length - 1 ? allProjects[idx + 1] : null;

  const goToImg = (i) => setActiveImg((i + gallery.length) % gallery.length);
  const goToContact = () => {
    handleClose();
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }, 260);
  };

  return createPortal(
    <div
      ref={scrollRef}
      className={`fixed inset-0 z-50 overflow-y-auto bg-background text-foreground transition-opacity duration-300 ease-out [scrollbar-width:thin] ${
        isClosing ? "opacity-0" : "opacity-100 animate-in fade-in"
      }`}
    >
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed left-1/2 top-0 h-[420px] w-[min(95vw,900px)] -translate-x-1/2 rounded-full bg-primary/[0.10] blur-[150px]"
      />

      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-black/10 dark:border-white/10 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
          <div className="flex min-w-0 items-center gap-3 text-sm">
            <button
              onClick={handleClose}
              className="inline-flex items-center gap-2 rounded-full px-2.5 py-1.5 font-medium text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
            >
              <FaArrowLeft className="text-xs" />
              <span>All work</span>
            </button>
            <span className="h-4 w-px bg-black/15 dark:bg-white/15" />
            <span className="truncate font-semibold text-foreground">{cs.title}</span>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            {project.liveUrl && project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-bold text-primary-foreground shadow-md transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <FaArrowUpRightFromSquare className="text-[0.7rem]" />
                <span className="hidden sm:inline">Live site</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View source on GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-black/15 dark:border-white/15 text-muted-foreground transition-colors hover:text-foreground"
              >
                <FaGithub />
              </a>
            )}
            <button
              onClick={handleClose}
              aria-label="Close case study"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-black/15 dark:border-white/15 text-muted-foreground transition-all hover:text-foreground hover:scale-110 cursor-pointer active:scale-95"
            >
              ✕
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        {/* Hero */}
        <section className="pt-12 sm:pt-16">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span>{String(idx + 1).padStart(2, "0")}</span>
            <span className="inline-flex items-center gap-1.5 text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {type}
            </span>
          </div>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            {cs.title}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {cs.tagline}
          </p>

          {/* Meta row */}
          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-black/10 dark:border-white/10 pt-6 sm:grid-cols-4">
            {[
              { label: "Role", value: role },
              { label: "Type", value: type },
              { label: "Stack", value: `${stackChips.length} technologies` },
              { label: "Live", value: liveLabel, href: project.liveUrl },
            ].map((m) => (
              <div key={m.label}>
                <span className="block font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                  {m.label}
                </span>
                {m.href && m.href !== "#" ? (
                  <a
                    href={m.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1.5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                  >
                    {m.value}
                    <FaArrowUpRightFromSquare className="text-[0.6rem]" />
                  </a>
                ) : (
                  <span className="mt-1.5 block text-sm font-semibold text-foreground">
                    {m.value}
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Gallery */}
        <section className="mt-12">
          <div className="relative overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-[#0c0c0e] shadow-2xl">
            {/* Browser chrome */}
            <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-white/[0.04] px-4 py-2.5">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              </div>
              {liveLabel && (
                <span className="max-w-[60%] truncate rounded-md bg-white/[0.06] px-3 py-1 font-mono text-[0.7rem] text-white/60">
                  {liveLabel}
                </span>
              )}
              <span className="font-mono text-[0.7rem] font-semibold text-white/70">
                {safeIdx + 1}/{gallery.length}
              </span>
            </div>

            {/* Scrollable, full-width screenshot */}
            <div className="relative">
              <div className="max-h-[72vh] overflow-y-auto bg-black/60 [scrollbar-width:thin] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/20">
                <img
                  key={current.src}
                  src={current.src}
                  alt={current.caption || cs.title}
                  className="block w-full h-auto object-top animate-in fade-in duration-500"
                />
              </div>
              {gallery.length > 1 && (
                <>
                  <button
                    onClick={() => goToImg(safeIdx - 1)}
                    aria-label="Previous image"
                    className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur transition-all hover:bg-black/70 hover:scale-110 cursor-pointer active:scale-95"
                  >
                    <FaChevronLeft className="text-sm" />
                  </button>
                  <button
                    onClick={() => goToImg(safeIdx + 1)}
                    aria-label="Next image"
                    className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur transition-all hover:bg-black/70 hover:scale-110 cursor-pointer active:scale-95"
                  >
                    <FaChevronRight className="text-sm" />
                  </button>
                </>
              )}
            </div>
          </div>
          {current.caption && (
            <p className="mt-3 text-center text-xs text-muted-foreground">{current.caption}</p>
          )}
          {gallery.length > 1 && (
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              {gallery.map((g, i) => (
                <button
                  key={g.src}
                  onClick={() => setActiveImg(i)}
                  aria-label={`View image ${i + 1}`}
                  className={`h-14 w-24 overflow-hidden rounded-lg border transition-all duration-300 cursor-pointer ${
                    i === safeIdx
                      ? "border-primary ring-2 ring-primary/40 scale-105"
                      : "border-black/15 dark:border-white/15 opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={g.src} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </section>

        {/* Content + sidebar */}
        <section className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-8">
            {/* The brief */}
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">The brief</span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">What needed solving</h2>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-muted-foreground">{brief}</p>

            {/* Approach */}
            {approach.length > 0 && (
              <>
                <span className="mt-14 block font-mono text-xs uppercase tracking-[0.2em] text-primary">
                  Approach
                </span>
                <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">How it was built</h2>
                <div className="mt-6 space-y-8">
                  {approach.map((a, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                        {i < approach.length - 1 && (
                          <span className="mt-2 w-px flex-1 bg-black/10 dark:bg-white/10" />
                        )}
                      </div>
                      <div className="pb-2">
                        <h3 className="flex items-baseline gap-2 text-base font-semibold text-foreground">
                          <span className="font-mono text-xs text-muted-foreground">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          {a.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* At a glance sidebar */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 rounded-2xl border border-black/10 dark:border-white/10 bg-card/70 p-6 backdrop-blur-xl shadow-xl">
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                At a glance
              </span>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{glance}</p>

              {stackChips.length > 0 && (
                <>
                  <span className="mt-6 block font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                    Stack
                  </span>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {stackChips.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-primary/25 bg-primary/10 px-2.5 py-1 text-[0.7rem] font-medium text-primary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </>
              )}

              <div className="mt-6 space-y-2.5">
                {project.liveUrl && project.liveUrl !== "#" && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground shadow-md transition-all hover:scale-[1.02] active:scale-95"
                  >
                    <FaArrowUpRightFromSquare className="text-xs" />
                    Visit live site
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-lg border border-black/15 dark:border-white/15 bg-black/[0.04] dark:bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-foreground transition-all hover:bg-black/10 hover:dark:bg-white/10"
                  >
                    <FaGithub />
                    View GitHub
                  </a>
                )}
              </div>
            </div>
          </aside>
        </section>

        {/* What shipped */}
        {shipped.length > 0 && (
          <section className="mt-16">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Scope</span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">What shipped</h2>
            <div className="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              {shipped.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-black/10 dark:border-white/10 bg-card/50 p-4"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* The hard parts */}
        {hardParts.length > 0 && (
          <section className="mt-16">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Engineering notes
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">The hard parts</h2>
            <div className="mt-6 space-y-5">
              {hardParts.map((hp, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-card/50"
                >
                  <div className="p-5 sm:p-6">
                    <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                      Challenge
                    </span>
                    <p className="mt-2 text-sm leading-relaxed text-foreground">{hp.challenge}</p>
                  </div>
                  <div className="border-t border-black/10 dark:border-white/10 bg-primary/[0.04] p-5 sm:p-6">
                    <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-primary">
                      Solution
                    </span>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{hp.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Outcome */}
        {outcome.length > 0 && (
          <section className="mt-16">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Outcome</span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Where it landed</h2>
            <ol className="mt-6 space-y-4">
              {outcome.map((o, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm leading-relaxed text-muted-foreground">{o}</span>
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* Prev / Next case study */}
        {(prevProject || nextProject) && (
          <section className="mt-20 grid grid-cols-1 gap-4 border-t border-black/10 dark:border-white/10 pt-10 sm:grid-cols-2">
            {prevProject ? (
              <button
                onClick={() => onNavigate?.(prevProject)}
                className="group rounded-2xl border border-black/10 dark:border-white/10 bg-card/50 p-6 text-left transition-all hover:border-primary/40 hover:bg-card cursor-pointer"
              >
                <span className="inline-flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                  <FaArrowLeft className="text-[0.6rem]" /> Previous case study
                </span>
                <h3 className="mt-3 text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {prevProject.caseStudy?.title || prevProject.title}
                </h3>
                <p className="mt-1.5 text-xs text-muted-foreground line-clamp-2">
                  {prevProject.caseStudy?.tagline || prevProject.description}
                </p>
              </button>
            ) : (
              <span className="hidden sm:block" />
            )}
            {nextProject && (
              <button
                onClick={() => onNavigate?.(nextProject)}
                className="group rounded-2xl border border-black/10 dark:border-white/10 bg-card/50 p-6 text-right transition-all hover:border-primary/40 hover:bg-card cursor-pointer"
              >
                <span className="inline-flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                  Next case study <FaArrowRight className="text-[0.6rem]" />
                </span>
                <h3 className="mt-3 text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {nextProject.caseStudy?.title || nextProject.title}
                </h3>
                <p className="mt-1.5 text-xs text-muted-foreground line-clamp-2">
                  {nextProject.caseStudy?.tagline || nextProject.description}
                </p>
              </button>
            )}
          </section>
        )}

        {/* CTA */}
        <section className="mt-16 rounded-3xl border border-black/10 dark:border-white/10 bg-card/60 px-6 py-12 text-center backdrop-blur-xl">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Have something like this to build?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
            This project went from design through deployment. Yours could be next.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              onClick={goToContact}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <FaRegCalendarCheck className="text-xs" />
              Book a Meeting
            </button>
            <button
              onClick={goToContact}
              className="inline-flex items-center gap-2 rounded-full border border-black/15 dark:border-white/15 bg-black/[0.04] dark:bg-white/[0.04] px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-black/10 hover:dark:bg-white/10 cursor-pointer active:scale-95"
            >
              Send a message
              <FaRegPaperPlane className="text-xs" />
            </button>
          </div>
        </section>
      </div>
    </div>,
    document.body
  );
}

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
      className="aspect-[16/11] overflow-hidden relative"
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
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/50 to-transparent" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[450px] w-[min(90vw,700px)] -translate-x-1/2 rounded-full bg-primary/[0.08] blur-[140px]"
      />

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
          allProjects={PROJECTS_DATA}
          onNavigate={setSelectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
        />
      )}
    </section>
  );
}

export default Projects;
