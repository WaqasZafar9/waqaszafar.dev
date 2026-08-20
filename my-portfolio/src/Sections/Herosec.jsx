import HeroVisual from "../Components/Hero/HeroVisual";
import HeroContent from "../Components/Hero/HeroContent";

function Herosec() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 pb-24 pt-32 font-sans sm:px-6 md:pt-36 bg-background"
    >
      {/* Layer 1 — Full-Section Environment & Ambient Lighting (Matching User's BG Idea) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Full-Section Dot Grid Matrix Pattern */}
        <div
          className="absolute inset-0 opacity-[0.32]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(52, 168, 90, 0.4) 1.2px, transparent 1.2px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Ambient Glow 1: Top Ghost Area Lighting */}
        <div className="absolute top-[2%] left-1/2 h-[450px] w-[min(90vw,750px)] -translate-x-1/2 rounded-full bg-gradient-to-b from-primary/25 via-primary/15 to-transparent blur-[120px] opacity-80" />

        {/* Ambient Glow 2: Center Headline Lighting */}
        <div className="absolute top-[35%] left-1/2 h-[480px] w-[min(95vw,880px)] -translate-x-1/2 rounded-full bg-gradient-to-tr from-primary/15 via-primary/10 to-transparent blur-[140px] opacity-75" />

        {/* Ambient Glow 3: Bottom CTA & Social Links Lighting */}
        <div className="absolute bottom-[8%] left-1/2 h-[350px] w-[min(90vw,780px)] -translate-x-1/2 rounded-full bg-primary/[0.12] blur-[130px] opacity-70" />

        {/* Soft Bottom Transition to Next Section */}
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-b from-transparent to-background" />
      </div>

      {/* Layer 2 — Interactive Floating Mascot Focal Object */}
      <div className="absolute inset-x-0 top-[12%] mx-auto h-[44vh] max-h-[440px] w-full max-w-[620px] md:top-[9%] md:h-[50vh]">
        <HeroVisual />
      </div>

      {/* Layer 3 — Content (Headline, Subtitle, CTA Buttons, Social Icons) */}
      <div className="relative z-10 w-full max-w-3xl pt-[36vh] sm:pt-[38vh] md:pt-[42vh]">
        <HeroContent />
      </div>

      {/* Scroll cue */}
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
