import HeroVisual from "../Components/Hero/HeroVisual";
import HeroContent from "../Components/Hero/HeroContent";

function Herosec() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 pb-24 pt-32 font-sans sm:px-6 md:pt-36 bg-background"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 18% -10%, color-mix(in srgb, var(--color-primary) 16%, transparent) 0%, transparent 55%), radial-gradient(90% 70% at 88% 8%, color-mix(in srgb, var(--color-primary) 10%, transparent) 0%, transparent 60%)",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              "radial-gradient(color-mix(in srgb, var(--color-primary) 45%, transparent) 1.2px, transparent 1.2px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(60% 55% at 50% 32%, black 0%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(60% 55% at 50% 32%, black 0%, transparent 75%)",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "88px 88px",
            maskImage:
              "radial-gradient(70% 60% at 50% 30%, black 0%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(70% 60% at 50% 30%, black 0%, transparent 80%)",
          }}
        />

        <div className="absolute top-[-4%] left-[42%] h-[460px] w-[min(90vw,760px)] -translate-x-1/2 rounded-full bg-gradient-to-b from-primary/30 via-primary/14 to-transparent blur-[130px] opacity-90 mix-blend-screen" />

        <div className="absolute top-[33%] left-[56%] h-[480px] w-[min(95vw,880px)] -translate-x-1/2 rounded-full bg-gradient-to-tr from-primary/18 via-primary/8 to-transparent blur-[150px] opacity-80 mix-blend-screen" />

        <div className="absolute bottom-[6%] left-1/2 h-[360px] w-[min(90vw,780px)] -translate-x-1/2 rounded-full bg-primary/[0.14] blur-[140px] opacity-70" />

        <div
          className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background/70 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-b from-transparent to-background" />
      </div>

      <div className="absolute inset-x-0 top-[12%] z-20 mx-auto h-[44vh] max-h-[440px] w-full max-w-[620px] md:top-[9%] md:h-[50vh]">
        <HeroVisual />
      </div>

      <div className="relative z-10 w-full max-w-3xl pt-[36vh] sm:pt-[38vh] md:pt-[42vh]">
        <HeroContent />
      </div>

      <a
        href="#about"
        className="hero-fade group absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2.5 rounded-full px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        style={{ animationDelay: "1100ms" }}
      >
        <span className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-300 group-hover:text-muted-foreground">
          Scroll to explore
        </span>
        <span
          aria-hidden="true"
          className="hero-scroll-line h-7 w-px bg-gradient-to-b from-primary/70 to-transparent"
        />
      </a>
    </section>
  );
}

export default Herosec;
