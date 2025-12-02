import React, { Suspense, lazy } from "react";
import { Helmet } from "react-helmet-async";

// Priority imports (above-the-fold content)
import Navbar from "../Components/navbar";
import Herosec from "../Sections/Herosec";

// Lazy load below-the-fold sections for better performance
const Aboutme = lazy(() => import("../Sections/Aboutme"));
const Skills = lazy(() => import("../Sections/Skills"));
const Experience = lazy(() => import("../Sections/Experience"));
const Projects = lazy(() => import("../Sections/Projects"));
const Education = lazy(() => import("../Sections/education"));
const Certificates = lazy(() => import("../Sections/Certificates"));
const ContactUs = lazy(() => import("../Sections/ContactUs"));
const Footer = lazy(() => import("../Components/Footer"));

// Loading fallback component
const SectionLoader = () => (
  <div className="flex items-center justify-center min-h-[200px] w-full">
    <div className="animate-pulse flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
      <p className="text-gray-500 text-sm">Loading...</p>
    </div>
  </div>
);

function Home() {
  return (
    <>
      <Helmet>
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
      </Helmet>

      <div className="overflow-hidden">
        {/* Critical above-the-fold content - loaded immediately */}
        <Navbar />
        <Herosec />

        {/* Below-the-fold sections - lazy loaded with Suspense */}
        <Suspense fallback={<SectionLoader />}>
          <section id="about" aria-label="About Me Section">
            <Aboutme />
          </section>
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <section id="skills" aria-label="Skills Section">
            <Skills />
          </section>
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <section id="experience" aria-label="Experience Section">
            <Experience />
          </section>
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <section id="projects" aria-label="Projects Section">
            <Projects />
          </section>
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <section id="education" aria-label="Education Section">
            <Education />
          </section>
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <section id="certificates" aria-label="Certificates Section">
            <Certificates />
          </section>
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <section id="contact" aria-label="Contact Section">
            <ContactUs />
          </section>
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
}

export default Home;
