"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/navbar";
import Herosec from "@/sections/Herosec";
import BrandMarquee from "@/components/BrandMarquee/BrandMarquee";
import Reveal from "@/components/Motion/Reveal";
import SectionShimmerSkeleton from "@/components/SectionShimmerSkeleton";

const Aboutme = dynamic(() => import("@/sections/Aboutme"), {
  loading: () => <SectionShimmerSkeleton />,
});
const Services = dynamic(() => import("@/sections/Services"), {
  loading: () => <SectionShimmerSkeleton />,
});
const Experience = dynamic(() => import("@/sections/Experience"), {
  loading: () => <SectionShimmerSkeleton />,
});
const Skills = dynamic(() => import("@/sections/Skills"), {
  loading: () => <SectionShimmerSkeleton />,
});
const Projects = dynamic(() => import("@/sections/Projects"), {
  loading: () => <SectionShimmerSkeleton />,
});
const HowIWork = dynamic(() => import("@/sections/HowIWork"), {
  loading: () => <SectionShimmerSkeleton />,
});
const ContactUs = dynamic(() => import("@/sections/ContactUs"), {
  loading: () => <SectionShimmerSkeleton />,
});
const Reading = dynamic(() => import("@/sections/Reading"), {
  loading: () => <SectionShimmerSkeleton />,
});
const Certificates = dynamic(() => import("@/sections/Certificates"), {
  ssr: false,
  loading: () => <SectionShimmerSkeleton />,
});
const Education = dynamic(() => import("@/sections/education"), {
  loading: () => <SectionShimmerSkeleton />,
});
const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <SectionShimmerSkeleton />,
});

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Herosec />
      <BrandMarquee />

      <Reveal id="about" aria-label="About Me Section" variant="unfold">
        <Aboutme />
      </Reveal>

      <Reveal id="services" aria-label="Services Section" variant="flip-up">
        <Services />
      </Reveal>

      <Reveal id="experience" aria-label="Experience Section" variant="ascend">
        <Experience />
      </Reveal>

      <Reveal id="projects" aria-label="Projects Section" variant="zoom-depth">
        <Projects />
      </Reveal>

      <Reveal
        id="how-i-work"
        aria-label="How I Work Section"
        variant="swing-left"
      >
        <HowIWork />
      </Reveal>

      <Reveal id="skills" aria-label="Skills Section" variant="swing-right">
        <Skills />
      </Reveal>

      <Reveal id="reading" aria-label="Reading Section" variant="rise">
        <Reading />
      </Reveal>

      <Reveal id="contact" aria-label="Contact Section" variant="spiral">
        <ContactUs />
      </Reveal>

      <Reveal aria-label="Footer" variant="rise">
        <Footer />
      </Reveal>
    </div>
  );
}
