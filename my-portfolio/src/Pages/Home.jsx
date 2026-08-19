import React, { Suspense, lazy } from "react";

// Priority imports (above-the-fold content)
import Navbar from "../Components/navbar";
import Herosec from "../Sections/Herosec";
import BrandMarquee from "../Components/BrandMarquee/BrandMarquee";
import Reveal from "../Components/Motion/Reveal";

// Lazy load below-the-fold sections for better performance
const Aboutme = lazy(() => import("../Sections/Aboutme"));
const Experience = lazy(() => import("../Sections/Experience"));
const Skills = lazy(() => import("../Sections/Skills"));
const Projects = lazy(() => import("../Sections/Projects"));
// const Education = lazy(() => import("../Sections/education"));
const Certificates = lazy(() => import("../Sections/Certificates"));
const ContactUs = lazy(() => import("../Sections/ContactUs"));
const Footer = lazy(() => import("../Components/Footer"));

import SectionShimmerSkeleton from "../Components/SectionShimmerSkeleton";

function Home() {
  return (
    <>
   
      {/* Primary Meta Tags */}
      <title>Waqas Zafar - Software Developer Portfolio</title>
      <meta
        name="title"
        content="Waqas Zafar - Software Developer | Web & Mobile App Development"
      />
      <meta
        name="description"
        content="Explore the portfolio of Waqas Zafar, a skilled Software Developer specializing in modern web and mobile applications. Expert in React, Next.js, Node.js, JavaScript, AI Automation, and responsive design. View my projects, experience, and skills."
      />
      <meta
        name="keywords"
        content="Waqas Zafar Portfolio, Software Developer, Full Stack Developer, Web Developer, React Developer, Next.js Developer, Node.js, JavaScript, Frontend Developer, Backend Developer, Mobile App Developer, AI Automation, Gen AI, UI/UX Design, Responsive Web Design, waqaszafar, M Waqas Zafar, Muhammad Waqas Zafar, Lahore Pakistan Developer"
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://waqaszafar.tech/" />
      <meta
        property="og:title"
        content="Waqas Zafar - Software Developer | Web & Mobile App Development"
      />
      <meta
        property="og:description"
        content="Explore the portfolio of Waqas Zafar, a Software Developer creating modern, responsive web and mobile applications. Specializing in React, Next.js, AI Automation, and other modern technologies."
      />
      <meta
        property="og:image"
        content="https://waqaszafar.tech/og-image.png"
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://waqaszafar.tech/" />
      <meta
        name="twitter:title"
        content="Waqas Zafar - Software Developer | Web & Mobile App Development"
      />
      <meta
        name="twitter:description"
        content="Explore the portfolio of Waqas Zafar, a Software Developer creating modern, responsive web and mobile applications. Specializing in React, Next.js, AI Automation, and other modern technologies."
      />
      <meta
        name="twitter:image"
        content="https://waqaszafar.tech/twitter-image.png"
      />

      {/* Canonical URL */}
      <link rel="canonical" href="https://waqaszafar.tech/" />

      <div className="overflow-hidden">
        {/* Critical above-the-fold content - loaded immediately */}
        <Navbar />
        <Herosec />
        <BrandMarquee />

        {/* Below-the-fold sections - lazy loaded with Suspense.
            Each gets its own entrance choreography via Reveal's variant. */}
        <Suspense fallback={<SectionShimmerSkeleton />}>
          <Reveal id="about" aria-label="About Me Section" variant="unfold">
            <Aboutme />
          </Reveal>
        </Suspense>

        <Suspense fallback={<SectionShimmerSkeleton />}>
          <Reveal
            id="experience"
            aria-label="Experience Section"
            variant="ascend"
          >
            <Experience />
          </Reveal>
        </Suspense>

        <Suspense fallback={<SectionShimmerSkeleton />}>
          <Reveal id="projects" aria-label="Projects Section" variant="zoom-depth">
            <Projects />
          </Reveal>
        </Suspense>

        <Suspense fallback={<SectionShimmerSkeleton />}>
          <Reveal id="skills" aria-label="Skills Section" variant="swing-right">
            <Skills />
          </Reveal>
        </Suspense>

        {/* <Suspense fallback={<SectionShimmerSkeleton />}>
          <section id="education" aria-label="Education Section">
            <Education />
          </section>
        </Suspense> */}

        <Suspense fallback={<SectionShimmerSkeleton />}>
          <Reveal
            id="certificates"
            aria-label="Certificates Section"
            variant="flip-up"
          >
            <Certificates />
          </Reveal>
        </Suspense>

        <Suspense fallback={<SectionShimmerSkeleton />}>
          <Reveal id="contact" aria-label="Contact Section" variant="spiral">
            <ContactUs />
          </Reveal>
        </Suspense>

        <Suspense fallback={<SectionShimmerSkeleton />}>
          <Reveal aria-label="Footer" variant="rise">
            <Footer />
          </Reveal>
        </Suspense>
      </div>
    </>
  );
}

export default Home;
