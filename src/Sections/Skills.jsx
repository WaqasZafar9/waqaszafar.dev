import { useEffect, useRef, useState } from "react";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiFigma,
  SiFlutter,
  SiWebflow,
  SiFirebase,
  SiGithub,
  SiAndroidstudio,
  SiBitbucket,
  SiPostman,
} from "react-icons/si";

const CanvaIcon = ({ className, style }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    style={style}
    width="1em"
    height="1em"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5c-2.48 0-4.5-2.02-4.5-4.5S10.52 7.5 13 7.5c1.19 0 2.27.47 3.08 1.23l-1.42 1.42c-.44-.42-1.02-.65-1.66-.65-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5c.64 0 1.22-.23 1.66-.65l1.42 1.42c-.81.76-1.89 1.23-3.08 1.23z" />
  </svg>
);

import vscodeImg from "../assets/vscode.png";
import clickupImg from "../assets/clickup.png";
import intelliJImg from "../assets/intelliJ.png";
import nextjslogo from "../assets/next.png";

function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  const sectionRef = useRef(null);

  useEffect(() => {
    const elem = sectionRef.current;
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

    if (elem) {
      observer.observe(elem);
    }

    return () => {
      if (elem) {
        observer.unobserve(elem);
      }
    };
  }, []);

  const ALL_SKILLS = [
    { name: "Javascript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "WEBFLOW", icon: SiWebflow, color: "#4353FF" },
    { name: "React.js", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: nextjslogo, color: "#000" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Flutter", icon: SiFlutter, color: "#02569B" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "React Native", icon: SiReact, color: "#61DAFB" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    { name: "Git & GitHub", icon: SiGithub, color: null },
    { name: "VS Code", icon: vscodeImg, color: "#000000" },
    { name: "IntelliJ", icon: intelliJImg, color: "#000000" },
    { name: "Android Studio", icon: SiAndroidstudio, color: "#3DDC84" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    { name: "Canva", icon: CanvaIcon, color: "#00C4CC" },
    { name: "Bitbucket", icon: SiBitbucket, color: "#0052CC" },
    { name: "Clickup", icon: clickupImg, color: "#000000" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  ];

  const skillRows = [
    ALL_SKILLS.filter((_, i) => i % 2 === 0),
    ALL_SKILLS.filter((_, i) => i % 2 === 1),
  ];

  const SkillCard = ({ item }) => {
    const IconComponent = item.icon;
    const isImageIcon = typeof IconComponent === "string";

    return (
      <div className="flex-shrink-0 w-[80px] md:w-[100px] lg:w-[110px] mx-2">
        <div className="bg-card/30 backdrop-blur-sm rounded-xl p-3 border border-black/10 dark:border-white/10 hover:border-primary/50 hover:bg-card/60 transition-all duration-300 group cursor-pointer h-full flex flex-col items-center justify-center">
          <div className="mb-3 transition-transform duration-300 group-hover:scale-110 flex items-center justify-center">
            {isImageIcon ? (
              <img
                src={IconComponent}
                alt={item.name}
                className="w-8 h-8 md:w-10 md:h-10 lg:w-10 lg:h-10 object-contain"
              />
            ) : (
              <IconComponent
                className={`w-8 h-8 md:w-10 md:h-10 lg:w-10 lg:h-10 ${
                  item.color ? "" : "text-foreground"
                }`}
                style={item.color ? { color: item.color } : {}}
              />
            )}
          </div>
          <span className="text-muted-foreground text-xs md:text-sm text-center font-medium leading-tight">
            {item.name}
          </span>
        </div>
      </div>
    );
  };

  const SkillSlider = ({ items, direction = "left" }) => {
    const duplicatedItems = [...items, ...items, ...items];

    return (
      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

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
      className="bg-background flex items-center justify-center py-20 overflow-hidden relative"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/50 to-transparent"></div>
      
      <div className="absolute left-1/2 top-1/2 h-[280px] w-[min(90vw,1100px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.09] blur-[140px] pointer-events-none"></div>

      <div className="container max-w-[1600px] relative z-10">
        
        <div
          className={`flex flex-col items-center mb-16 gap-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2 text-center">
            Professional <span className="text-primary">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg text-center">
            The skills, tools, technologies and concepts I work with
          </p>
        </div>

        <div
          className={`transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="space-y-15">
            {skillRows.map((rowItems, rowIdx) => (
              <SkillSlider
                key={rowIdx}
                items={rowItems}
                direction={rowIdx === 0 ? "left" : "right"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
