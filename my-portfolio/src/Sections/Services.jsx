import React, { useCallback } from "react";
import {
  FaCode,
  FaMobileScreenButton,
  FaServer,
  FaPalette,
  FaDatabase,
  FaWandMagicSparkles,
} from "react-icons/fa6";
import "./Services.css";

const SERVICES = [
  {
    icon: FaCode,
    title: "Full-Stack Web Development",
    description:
      "Building fast, responsive web apps with React and Next.js — clean component architecture from the first commit to production.",
    tags: ["React.js", "Next.js", "Tailwind CSS"],
    span: "lg:col-span-2",
  },
  {
    icon: FaMobileScreenButton,
    title: "Cross-Platform Mobile Apps",
    description:
      "Shipping mobile apps for iOS and Android from a single Flutter codebase, without giving up native feel or performance.",
    tags: ["Flutter", "Dart", "Firebase"],
  },
  {
    icon: FaServer,
    title: "RESTful API Development",
    description:
      "Designing secure, well-documented REST APIs with Node.js and Express — built to hold up under real traffic, not just a demo.",
    tags: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    icon: FaPalette,
    title: "Modern UI/UX Implementation",
    description:
      "Turning Figma designs into pixel-accurate, accessible interfaces with Tailwind CSS — no drift between what's designed and what ships.",
    tags: ["Figma", "Tailwind CSS", "Webflow"],
  },
  {
    icon: FaDatabase,
    title: "Database Design & Optimization",
    description:
      "Architecting efficient schemas and optimizing queries in MongoDB and Firebase, so the app stays fast as the data grows.",
    tags: ["MongoDB", "Firebase"],
  },
  {
    icon: FaWandMagicSparkles,
    title: "AI/ML Exploration",
    description:
      "Integrating LLM-backed features and automation into real product flows — practical AI, not a chatbot bolted on for show.",
    tags: ["AI Automation", "Gen AI"],
    span: "lg:col-span-3",
  },
];

/**
 * A card whose hover spotlight tracks the cursor. Position is written
 * straight to CSS custom properties on the node (no React state), so
 * moving the mouse never triggers a re-render.
 */
function ServiceCard({ service }) {
  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }, []);

  return (
    <div
      onMouseMove={handleMouseMove}
      tabIndex={0}
      className={`service-card group rounded-2xl border border-border bg-card/30 p-5 sm:p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 ${
        service.span || ""
      }`}
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-white/[0.03] text-primary transition-all duration-300 group-hover:border-primary/50 group-hover:bg-primary/10 group-hover:text-primary">
        <service.icon className="text-sm" aria-hidden="true" />
      </div>

      <h3 className="mt-4 text-base sm:text-lg font-bold text-white">
        {service.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {service.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border bg-white/[0.03] px-2.5 py-0.5 text-[0.65rem] font-medium text-muted-foreground transition-colors duration-300 group-hover:border-primary/30 group-hover:text-primary"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function Services() {
  return (
    <section
      id="services"
      className="relative bg-background py-20 px-4 sm:px-6 font-sans overflow-hidden"
    >
      {/* Top Separator — matches the hairline every other section opens with */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/50 to-transparent" />

      {/* Ambient glow — same restrained treatment used across the other sections */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-primary/[0.06] blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 bottom-0 h-[500px] w-[500px] rounded-full bg-primary/[0.08] blur-[140px]"
      />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="max-w-2xl">
          <span className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            <span className="h-px w-8 bg-primary/60" />
            What I Offer
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            What I can build for you.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-xl">
            Full-stack product work — web, mobile, and the AI features tying
            it together — scoped simply and shipped clean.
          </p>
        </div>

        {/* Services grid */}
        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
