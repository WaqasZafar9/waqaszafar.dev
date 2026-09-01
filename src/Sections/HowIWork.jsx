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
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

function HowIWork() {
  return (
    <section
      id="how-i-work"
      className="relative bg-background py-20 px-4 sm:px-6 font-sans overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/50 to-transparent" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-6%] h-[420px] w-[min(80vw,760px)] -translate-x-1/2 rounded-full bg-primary/[0.1] blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(255,255,255,0.6) 0px, rgba(255,255,255,0.6) 1px, transparent 1px, transparent 22px)",
          maskImage:
            "linear-gradient(to bottom, black 0%, transparent 55%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, transparent 55%)",
        }}
      />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="max-w-2xl">
          <span className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            <span className="h-px w-8 bg-primary/60" />
            How I Work
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            A clear process for better work.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-xl">
            Good products come from good collaboration. My process keeps the
            work focused, transparent, and moving forward.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 divide-y divide-border rounded-2xl border border-border lg:grid-cols-4 lg:divide-y-0 lg:divide-x">
          {STEPS.map((step) => (
            <div
              key={step.index}
              className="group p-6 transition-colors duration-300 hover:bg-black/[0.03] hover:dark:bg-white/[0.03] sm:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-muted-foreground transition-colors duration-300 group-hover:text-primary">
                  {step.index}
                </span>
                <step.icon
                  className="text-lg text-muted-foreground/70 transition-all duration-300 group-hover:scale-110 group-hover:text-primary"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-6 text-lg sm:text-xl font-bold text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col items-start gap-6 rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="text-base sm:text-lg font-semibold text-foreground">
              Have an idea you want to explore?
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
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
