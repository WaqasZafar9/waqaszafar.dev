import { Suspense, lazy } from "react";

import Navbar from "../Components/navbar";
import Herosec from "../Sections/Herosec";
import BrandMarquee from "../Components/BrandMarquee/BrandMarquee";
import Reveal from "../Components/Motion/Reveal";

const Aboutme = lazy(() => import("../Sections/Aboutme"));
const Services = lazy(() => import("../Sections/Services"));
const Experience = lazy(() => import("../Sections/Experience"));
const Skills = lazy(() => import("../Sections/Skills"));
const Projects = lazy(() => import("../Sections/Projects"));
const HowIWork = lazy(() => import("../Sections/HowIWork"));
const ContactUs = lazy(() => import("../Sections/ContactUs"));
const Reading = lazy(() => import("../Sections/Reading"));
const Footer = lazy(() => import("../Components/Footer"));

import SectionShimmerSkeleton from "../Components/SectionShimmerSkeleton";

function Home() {
  return (
    <>
   
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

      <link rel="canonical" href="https://waqaszafar.tech/" />

      <div className="overflow-hidden">
        <Navbar />
        <Herosec />
        <BrandMarquee />

        <Suspense fallback={<SectionShimmerSkeleton />}>
          <Reveal id="about" aria-label="About Me Section" variant="unfold">
            <Aboutme />
          </Reveal>
        </Suspense>

        <Suspense fallback={<SectionShimmerSkeleton />}>
          <Reveal id="services" aria-label="Services Section" variant="flip-up">
            <Services />
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
          <Reveal id="how-i-work" aria-label="How I Work Section" variant="swing-left">
            <HowIWork />
          </Reveal>
        </Suspense>

        <Suspense fallback={<SectionShimmerSkeleton />}>
          <Reveal id="skills" aria-label="Skills Section" variant="swing-right">
            <Skills />
          </Reveal>
        </Suspense>

        <Suspense fallback={<SectionShimmerSkeleton />}>
          <Reveal id="reading" aria-label="Reading Section" variant="rise">
            <Reading />
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
