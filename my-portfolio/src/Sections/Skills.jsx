import React, { useEffect, useRef, useState } from "react";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiFigma,
  SiGit,
  SiFlutter,
  SiPhp,
  SiDart,
  SiWebflow,
  SiMysql,
  SiFirebase,
  SiOracle,
  SiGithub,
  SiIntellijidea,
  SiAndroidstudio,
  SiCanva,
  SiBitbucket,
  SiPostman,
  SiCplusplus,
} from "react-icons/si";

import vscodeImg from "../assets/vscode.png";
import clickupImg from "../assets/clickup.png";
import intelliJImg from "../assets/intelliJ.png";
import githubImg from "../assets/github.png";
import nextjslogo from "../assets/next.png";

function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  const sectionRef = useRef(null);

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

  // All skills organized by category as per prompt
  const skillSections = [
    {
      title: "Stacks",
      icon: null,
      items: [
        { name: "Javascript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "WEBFLOW", icon: SiWebflow, color: "#4353FF" },
        // { name: "PHP", icon: SiPhp, color: "#777BB4" },
        { name: "React.js", icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", icon: nextjslogo, color: "#000" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Flutter", icon: SiFlutter, color: "#02569B" },
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "React Native", icon: SiReact, color: "#61DAFB" },
      ],
    },
    {
      title: "Databases",
      items: [
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        // { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
        // { name: "Oracle", icon: SiOracle, color: "#F80000" },
      ],
    },
    {
      title: "Tools & Platforms",
      items: [
        { name: "Git & GitHub", icon: githubImg, color: "#181717" },
        { name: "VS Code", icon: vscodeImg, color: "#000000" },
        { name: "IntelliJ", icon: intelliJImg, color: "#000000" },
        { name: "Android Studio", icon: SiAndroidstudio, color: "#3DDC84" },
        { name: "Figma", icon: SiFigma, color: "#F24E1E" },
        { name: "Canva", icon: SiCanva, color: "#00C4CC" },
        { name: "Bitbucket", icon: SiBitbucket, color: "#0052CC" },
        { name: "Clickup", icon: clickupImg, color: "#000000" },
        { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      ],
    },
  ];

  const SkillCard = ({ item }) => {
    const IconComponent = item.icon;
    const isImageIcon = typeof IconComponent === "string";

    return (
      <div className="flex-shrink-0 w-[100px] md:w-[120px] lg:w-[140px] mx-3">
        <div className="bg-[#1F2937]/50 backdrop-blur-sm rounded-2xl p-4 border border-[#374151] hover:border-blue-500/50 hover:bg-[#1F2937]/80 transition-all duration-300 group cursor-pointer h-full flex flex-col items-center justify-center">
          <div className="mb-4 transition-transform duration-300 group-hover:scale-110 flex items-center justify-center">
            {isImageIcon ? (
              <img
                src={IconComponent}
                alt={item.name}
                className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 object-contain"
              />
            ) : (
              <IconComponent
                className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
                style={item.color ? { color: item.color } : {}}
              />
            )}
          </div>
          <span className="text-white text-sm md:text-base text-center font-medium">
            {item.name}
          </span>
        </div>
      </div>
    );
  };

  const SkillSlider = ({ items, direction = "left", isStatic = false }) => {
    // Duplicate items multiple times for seamless infinite scroll
    const duplicatedItems = isStatic ? items : [...items, ...items, ...items];

    if (isStatic) {
      return (
        <div className="flex flex-wrap justify-center w-full">
          {items.map((item, idx) => (
            <SkillCard key={`${item.name}-${idx}`} item={item} />
          ))}
        </div>
      );
    }

    return (
      <div className="relative w-full overflow-hidden">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none" />

        <div className="flex w-full">
          <style>
            {`
              @keyframes scroll-left {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-33.333%);
                }
              }
              @keyframes scroll-right {
                0% {
                  transform: translateX(-33.333%);
                }
                100% {
                  transform: translateX(0);
                }
              }
              .animate-scroll-left {
                animation: scroll-left 30s linear infinite;
              }
              .animate-scroll-right {
                animation: scroll-right 30s linear infinite;
              }
              .animate-scroll-left:hover,
              .animate-scroll-right:hover {
                animation-play-state: paused;
              }
            `}
          </style>
          <div
            className={`flex ${direction === "left"
              ? "animate-scroll-left"
              : "animate-scroll-right"
              }`}
          >
            {duplicatedItems.map((item, idx) => (
              <SkillCard key={`${item.name}-${idx}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="bg-[#030712] h-auto flex items-center justify-center py-[50px] px-4 overflow-hidden"
    >
      <div className="container max-w-[1600px] px-4 md:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${isVisible
            ? "animate-slide-in-left opacity-100"
            : "opacity-0 translate-x-[-50px]"
            }`}
        >
          {/* Skills Button
          <div className="flex justify-center mb-6">
            <button className="bg-[#1F2937] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#374151] transition-colors">
              Skills
            </button>
          </div> */}

          <h2 className="text-xl md:text-3xl font-regular text-[#D1D5DB] mb-8 md:mb-12 text-center">
            The skills, tools, technologies and concepts I work with:
          </h2>

          <div className="space-y-20">
            {skillSections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <div className="mb-10 flex items-center justify-center">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold tracking-tight">
                    {section.title}
                  </h3>
                </div>
                <SkillSlider
                  items={section.items}
                  direction={section.title === "Tools & Platforms" ? "right" : "left"}
                  isStatic={section.title === "Databases"}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
