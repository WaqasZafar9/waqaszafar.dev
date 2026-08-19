import React from "react";
import { FaArrowRight, FaComment, FaBullseye, FaDiagramProject, FaRocket } from "react-icons/fa6";
import ShinyButton from "../Components/ShinyButton/ShinyButton";

const STEPS = [
  {
    index: "01",
    icon: FaComment,
    title: "Understand",
    description:
      "I start with the context: your goals, users, constraints, and what success should look like.",
  },
  {
    index: "02",
    icon: FaBullseye,
    title: "Shape the solution",
    description:
      "I turn the idea into a clear plan, define the right scope, and identify the simplest path to a useful first version.",
  },
  {
    index: "03",
    icon: FaDiagramProject,
    title: "Build in the open",
    description:
      "You get regular progress, working increments, and clear communication — not a surprise at the end.",
  },
  {
    index: "04",
    icon: FaRocket,
    title: "Ship & improve",
    description:
      "I launch thoughtfully, learn from real usage, and leave the product in a maintainable state.",
  },
];

const FOCUS_RING =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-night";

function HowIWork() {
  return (
    <section
      id="how-i-work"
      className="relative bg-night py-20 px-4 sm:px-6 font-sans overflow-hidden"
    >
      {/* Ambient glow — same restrained treatment used across the other sections */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-1/4 h-[500px] w-[500px] rounded-full bg-accent/[0.06] blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-1/4 h-[500px] w-[500px] rounded-full bg-accent-deep/[0.08] blur-[140px]"
      />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="max-w-2xl">
          <span className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent-soft">
            <span className="h-px w-8 bg-accent-soft/60" />
            How I Work
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            A clear process for better work.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-ink-soft max-w-xl">
            Good products come from good collaboration. My process keeps the
            work focused, transparent, and moving forward.
          </p>
        </div>

        {/* Steps — stacked with top dividers on mobile, a single divided
            row from lg up (matches the reference at desktop width). */}
        <div className="mt-12 grid grid-cols-1 divide-y divide-line rounded-2xl border border-line lg:grid-cols-4 lg:divide-y-0 lg:divide-x">
          {STEPS.map((step) => (
            <div
              key={step.index}
              className="group p-6 transition-colors duration-300 hover:bg-white/[0.03] sm:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-ink-muted transition-colors duration-300 group-hover:text-accent-soft">
                  {step.index}
                </span>
                <step.icon
                  className="text-lg text-ink-muted/70 transition-all duration-300 group-hover:scale-110 group-hover:text-accent-soft"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-6 text-lg sm:text-xl font-bold text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA bar */}
        <div className="mt-6 flex flex-col items-start gap-6 rounded-2xl border border-line bg-elevated/40 backdrop-blur-sm p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="text-base sm:text-lg font-semibold text-white">
              Have an idea you want to explore?
            </p>
            <p className="mt-1 text-sm text-ink-soft">
              Bring the rough version. I'll find the clearest next step together.
            </p>
          </div>
          <ShinyButton href="#contact" className={`w-full sm:w-auto ${FOCUS_RING}`}>
            Start a conversation
            <FaArrowRight className="text-xs" />
          </ShinyButton>
        </div>
      </div>
    </section>
  );
}

export default HowIWork;
