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
      title: "Programming & Technologies",
      icon: null,
      items: [
        { name: "Javascript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "WEBFLOW", icon: SiWebflow, color: "#4353FF" },
        { name: "PHP", icon: SiPhp, color: "#777BB4" },
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

        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
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

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="bg-[#030712] h-auto flex items-center justify-center py-[50px] px-4"
    >
      <div className="container max-w-7xl px-4 md:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            isVisible
              ? "animate-slide-in-left opacity-100"
              : "opacity-0 translate-x-[-50px]"
          }`}
        >
          {/* Skills Button */}
          <div className="flex justify-center mb-6">
            <button className="bg-[#1F2937] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#374151] transition-colors">
              Skills
            </button>
          </div>

          <h2 className="text-xl md:text-3xl font-regular text-[#D1D5DB] mb-8 md:mb-12 text-center">
            The skills, tools, technologies and concepts I work with:
          </h2>

          <div className="space-y-12">
            {skillSections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <div className="mb-4 mt-8 flex items-center">
                  <span className="text-lg md:text-2xl text-[#D1D5DB] font-semibold tracking-wide">
                    {section.title}
                  </span>
                </div>
                <div
                  className={
                    section.title === "👥 Soft Skills"
                      ? "flex flex-wrap gap-2 md:gap-4"
                      : "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6 md:gap-8"
                  }
                >
                  {section.items.map((item, idx) => {
                    const IconComponent = item.icon;
                    const isImageIcon = typeof IconComponent === "string";
                    return (
                      <div
                        key={item.name + idx}
                        className={`flex flex-col items-center justify-center group ${
                          IconComponent ? "cursor-pointer" : "cursor-default"
                        }`}
                      >
                        {IconComponent ? (
                          <div className="mb-2 md:mb-3 transition-transform duration-300 group-hover:scale-110 flex items-center justify-center">
                            {isImageIcon ? (
                              <img
                                src={IconComponent}
                                alt={item.name}
                                className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain"
                              />
                            ) : (
                              <IconComponent
                                className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16"
                                style={item.color ? { color: item.color } : {}}
                              />
                            )}
                          </div>
                        ) : (
                          <div className="mb-2 md:mb-3 w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-[#1F2937] rounded-lg border border-[#374151] transition-all duration-300 group-hover:bg-[#374151] group-hover:border-[#4B5563]">
                            <span className="text-[#FFDE68] text-lg md:text-2xl lg:text-3xl font-bold">
                              {item.name.charAt(0).toUpperCase()}
                            </span>
                          </div>
                        )}
                        <span
                          className={`text-white text-xs md:text-sm text-center font-medium ${
                            !IconComponent ? "mt-1" : ""
                          }`}
                        >
                          {item.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
