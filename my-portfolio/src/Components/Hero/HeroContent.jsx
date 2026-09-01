import { FaArrowRight, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/WaqasZafar9", Icon: FaGithub },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/m-waqas-zafar",
    Icon: FaLinkedin,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/m_waqaszafar",
    Icon: FaInstagram,
  },
  { label: "X", href: "https://x.com/m_waqaszafar", Icon: FaXTwitter },
];

const FOCUS_RING =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const STEP = {
  badge: 120,
  intro: 320,
  headline: 460,
  support: 640,
  cta: 780,
  socials: 900,
};

function HeroContent() {
  return (
    <div className="relative z-10 flex flex-col items-center text-center">

      <p
        className="hero-rise group/name inline-block text-sm font-medium tracking-tight text-muted-foreground sm:text-lg transition-all duration-300 cursor-pointer hover:scale-110 hover:-translate-y-1"
        style={{ animationDelay: `${STEP.intro}ms` }}
      >
        Hi, I&apos;m{" "}
        <span className="font-bold text-foreground transition-all duration-300 group-hover/name:text-transparent group-hover/name:bg-clip-text group-hover/name:bg-linear-to-r group-hover/name:from-foreground group-hover/name:to-primary group-hover/name:drop-shadow-[0_0_25px_color-mix(in_srgb,var(--color-primary)_90%,transparent)]">
          Waqas Zafar
        </span>
      </p>
      <p
        className="hero-rise mt-2 text-[0.8125rem] font-medium uppercase tracking-[0.18em] text-muted-foreground"
        style={{ animationDelay: `${STEP.intro + 60}ms` }}
      >
        Software Engineer · Web &amp; Mobile
      </p>

      <h1
        className="hero-rise mt-6 max-w-[15ch] text-balance text-4xl font-semibold leading-[1.06] tracking-tight text-foreground sm:max-w-[18ch] sm:text-5xl md:text-6xl lg:text-[4.25rem]"
        style={{ animationDelay: `${STEP.headline}ms` }}
      >
        AI Powered &amp; Saas{" "}
        <span className="text-primary">Solution for Startups</span>
      </h1>

      <p
        className="hero-rise mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
        style={{ animationDelay: `${STEP.support}ms` }}
      >
        Building high-performance applications for your services
      </p>

      <div
        className="hero-rise mt-9 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row"
        style={{ animationDelay: `${STEP.cta}ms` }}
      >
        <a
          href="#projects"
          className={`group inline-flex w-full items-center justify-center gap-2 rounded-full border border-foreground bg-foreground px-7 py-3.5 text-sm font-semibold tracking-tight text-background transition-all duration-300 hover:-translate-y-0.5 hover:bg-transparent hover:text-foreground hover:shadow-[0_0_30px_rgba(255,255,255,0.35)] motion-reduce:transform-none sm:w-auto ${FOCUS_RING}`}
        >
          View My Work
          <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1 group-hover:text-foreground motion-reduce:transform-none" />
        </a>

        <a
          href="#contact"
          className={`inline-flex w-full items-center justify-center rounded-full border border-border bg-black/[0.03] dark:bg-white/[0.03] px-7 py-3.5 text-sm font-semibold tracking-tight text-foreground backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground hover:bg-foreground dark:hover:bg-white hover:text-background dark:hover:text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.35)] sm:w-auto ${FOCUS_RING}`}
        >
          Let&apos;s Talk
        </a>
      </div>

      <div
        className="hero-rise mt-9 mb-6 flex items-center gap-3"
        style={{ animationDelay: `${STEP.socials}ms` }}
      >
        {SOCIALS.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className={`flex h-12 w-12 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-foreground hover:text-foreground hover:bg-black/[0.06] hover:dark:bg-white/[0.06] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] ${FOCUS_RING}`}
          >
            <social.Icon className="text-base" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default HeroContent;
