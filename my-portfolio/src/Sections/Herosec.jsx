import React, { useEffect, useRef, useState } from "react";
import { FaGithub, FaDribbble, FaLinkedin } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import myImage from "../assets/my.jpg";

import { TypeAnimation } from "react-type-animation";

function Herosec() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="bg-[#030712] h-auto flex items-center justify-center py-8 md:py-16 px-4"
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-6 items-center">
          {/* Right Section - Image (appears first on mobile) */}
          <div
            ref={imageRef}
            className={`flex-1 flex items-center justify-center lg:justify-end transition-all duration-1000 delay-300 w-full lg:w-auto order-1 lg:order-2 ${isVisible
                ? "animate-slide-in-right opacity-100"
                : "opacity-0 translate-x-[50px]"
              }`}
          >
            <div
              className="relative image-hover-container w-full max-w-[280px] md:max-w-[320px] lg:w-[400px] lg:max-w-none"
              style={{ height: "auto" }}
            >
              {/* Neon Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-2xl -z-10 animate-pulse"></div>

              {/* Glassmorphism Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg backdrop-blur-sm"></div>

              {/* Shadow Effect */}
              <div className="absolute -right-2 -bottom-2 w-full h-full bg-gray-700/50 rounded-lg -z-20 transition-transform duration-300 image-hover-shadow"></div>

              <div className="relative z-10 image-hover-wrapper w-full p-2">
                <img
                  src={myImage}
                  alt="Waqas Zafar"
                  className="rounded-lg object-cover w-full h-auto image-hover"
                  style={{ aspectRatio: "400/364" }}
                  onError={(e) => {
                    e.target.src = "";
                  }}
                />
              </div>
            </div>
          </div>

          {/* Left Section - Text Content */}
          <div
            ref={textRef}
            className={`flex-[1.4] max-w-[950px] xl:w-[600px] space-y-4 md:space-y-6 transition-all duration-1000 w-full lg:w-auto text-center lg:text-left order-2 lg:order-1 ${isVisible
                ? "animate-slide-in-left opacity-100"
                : "opacity-0 translate-x-[-50px]"
              }`}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-[50px] font-bold text-white">
              Hi, I'm <TypeAnimation
                sequence={[
                  "Waqas Zafar 👋",
                  5000,
                  "Software Developer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              /> 
            </h1>

            {/* Role Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm mx-auto lg:mx-0">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold text-sm md:text-base">
                Software Developer
              </span>
            </div>
            {/* Condensed Bio */}
            <p className="text-[#D1D5DB] text-sm md:text-base lg:text-base leading-relaxed xl:w-[550px] mx-auto lg:mx-0">
              Specializing in modern web development with{" "}
              <span className="text-white font-medium">
                React.js, Next.js, and Tailwind CSS
              </span>
              . I build responsive, dynamic applications and have experience
              across the full stack—from{" "}
              <span className="text-white font-medium">
                mobile apps
              </span>{" "}
              to backend with{" "}
              <span className="text-white font-medium">
                Node.js and MongoDB
              </span>
              . Currently working as a Software Engineer while expanding my
              expertise through freelance projects.
            </p>

            {/* Tech Stack Pills
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start pt-2">
              {[
                "React",
                "Next.js",
                "Tailwind",
                "Node.js",
                "Flutter",
                "MongoDB",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-gray-800/50 border border-gray-700 rounded-md text-gray-300 text-xs md:text-sm font-medium hover:border-gray-600 hover:bg-gray-800 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div> */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-white">
              <HiLocationMarker className="text-lg md:text-xl" />
              <span className="text-sm md:text-base">Lahore, Pakistan</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-2 text-white">
              <span className="w-2.5 h-2.5 md:w-3 md:h-3 bg-green-500 rounded-full animate-blink"></span>
              <span className="text-sm md:text-base">
                Available for new projects
              </span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-6 pt-2 md:pt-4">
              <a
                href="https://github.com/WaqasZafar9"
                className="text-white text-xl md:text-2xl hover:text-gray-300 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/m-waqas-zafar"
                className="text-white text-xl md:text-2xl hover:text-gray-300 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://dribbble.com/mwaqaszafar"
                className="text-white text-xl md:text-2xl hover:text-gray-300 transition-colors"
                aria-label="Dribbble"
              >
                <FaDribbble />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Herosec;
