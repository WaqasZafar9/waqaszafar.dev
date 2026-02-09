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
      <div className="flex-shrink-0 w-[80px] md:w-[100px] lg:w-[110px] mx-2">
        <div className="bg-[#1F2937]/30 backdrop-blur-sm rounded-xl p-3 border border-[#374151]/50 hover:border-blue-500/50 hover:bg-[#1F2937]/60 transition-all duration-300 group cursor-pointer h-full flex flex-col items-center justify-center">
          <div className="mb-3 transition-transform duration-300 group-hover:scale-110 flex items-center justify-center">
            {isImageIcon ? (
              <img
                src={IconComponent}
                alt={item.name}
                className="w-8 h-8 md:w-10 md:h-10 lg:w-10 lg:h-10 object-contain"
              />
            ) : (
              <IconComponent
                className="w-8 h-8 md:w-10 md:h-10 lg:w-10 lg:h-10"
                style={item.color ? { color: item.color } : {}}
              />
            )}
          </div>
          <span className="text-gray-300 text-xs md:text-sm text-center font-medium leading-tight">
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
        <div className="flex flex-wrap justify-center w-full gap-4">
          {items.map((item, idx) => (
            <SkillCard key={`${item.name}-${idx}`} item={item} />
          ))}
        </div>
      );
    }

    return (
      <div className="relative w-full overflow-hidden">
        {/* Gradient overlays matching container bg */}
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

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
                animation: scroll-left 40s linear infinite;
              }
              .animate-scroll-right {
                animation: scroll-right 40s linear infinite;
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
      className="bg-black min-h-screen flex items-center justify-center py-[50px] px-4 overflow-hidden relative"
    >
      {/* Top Separator Glow */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-purple-500/50 to-transparent"></div>
      
      {/* Glamour Glow Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>

      <div className="container max-w-[1600px] px-4 md:px-6 lg:px-8 relative z-10">
        
        {/* Beating Title Section */}
        <div
          className={`flex flex-col items-center mb-16 gap-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 text-center">
            Professional <span className="text-transparent bg-clip-text bg-linear-to-r from-neonPink to-purple-400">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg text-center">
            The skills, tools, technologies and concepts I work with
          </p>
        </div>

        {/* Main Content - Container Removed for Clean Look */}
        <div
          className={`transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="space-y-16">
            {skillSections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <div className="mb-8 flex items-center justify-center">
                  <h3 className="text-xl md:text-2xl text-gray-200 font-semibold tracking-wide uppercase opacity-80">
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
