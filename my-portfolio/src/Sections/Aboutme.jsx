import React, { useEffect, useRef, useState } from "react";
import { FaGithub, FaBolt, FaCode, FaLaptopCode, FaMobileAlt, FaPalette } from "react-icons/fa";

function Aboutme() {
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

  // Content Data
  const introduction = "I am M. Waqas Zafar, a Software Engineer dedicated to architecting high-performance web and mobile ecosystems that drive business growth. My expertise lies in building scalable, production-ready applications using in-demand web and mobile app stacks, ensuring every product is fast, secure, and visually polished.";
  
  const journey = "I started my development journey a little over a year ago and have grown through real projects, internships, and continuous learning. I have built multiple projects and worked with backend tools like Node.js, Express, and MongoDB, which helped me understand end-to-end product development. I am currently working as a Software Engineer while also building side projects to sharpen my skills, test ideas quickly, and keep improving with each release. My approach is simple: build practical, maintainable software that solves real business problems and delivers a smooth, reliable user experience.";

  const aiJourney = "Integrating AI automation into your workflow is about shifting from manual oversight to an architecture where systems handle the repetitive heavy lifting. Rather than just adding 'chatbots,' real business upgrades come from using AI-driven development tools to accelerate software delivery and intelligent automation to manage complex data flows between your frontend and backend systems. By leveraging tools for code generation and automated debugging, you can reduce the time spent on routine maintenance and focus on building scalable, high-impact features. Furthermore, implementing AI-native interfaces ensures that your platform can adapt to user behavior in real-time, turning a static web application into a dynamic business asset that prioritizes efficiency and rapid growth.";

  // const offering = "if you're comfortable working with me, I’d be happy to build something together. I’m available for freelance work, collaborations, and custom project development.";
  
  const cta = "If you want to start a project or need a trusted developer for your ideas, feel free to reach out. I’m always open to working together. 😊";

  const cards = [
    {
      icon: FaLaptopCode,
      title: "Web Development",
      desc: "Building modern, responsive, and performant web applications using React.js and Next.js.",
      color: "text-blue-400",
      bg: "bg-blue-500/10"
    },
    {
      icon: FaMobileAlt,
      title: "Mobile App Dev",
      desc: "Creating cross-platform mobile applications with React Native and Flutter for both iOS and Android.",
      color: "text-purple-400",
      bg: "bg-purple-500/10"
    },
    {
      icon: FaPalette,
      title: "AI Automation & Integrations",
      desc: "Designing AI-powered workflows and integrating APIs/tools to automate operations, improve delivery speed, and streamline business processes.",
      color: "text-pink-400",
      bg: "bg-pink-500/10"
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="bg-[#030712] min-h-screen flex items-center justify-center py-20 px-4 font-sans relative"
    >
      {/* Top Separator Glow */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-purple-500/50 to-transparent"></div>
      
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className={`flex flex-col items-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                About <span className="text-transparent bg-clip-text bg-linear-to-r from-neonPink to-blue-400">Me</span>
            </h2>
            <div className="w-24 h-1.5 bg-linear-to-r from-neonPink to-blue-400 rounded-full"></div>
        </div>

        <div className="flex flex-col gap-16 items-center">
          
          {/* Top Section - Text Content */}
          <div
            className={`w-full max-w-6xl mx-auto text-center transition-all duration-1000 delay-200 ${
              isVisible
                ? "animate-slide-in-left opacity-100"
                : "opacity-0 translate-x-[-50px]"
            }`}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
                Curious about me? Here you have it:
            </h3>
            
            <div className="space-y-6 text-gray-300 text-base leading-relaxed mb-8 mx-auto max-w-5xl">
                <p className={`${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-4"}`}>{introduction}</p>
                <p className={`${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-4"}`} style={{ animationDelay: "120ms" }}>{journey}</p>
                <p className={`${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-4"}`} style={{ animationDelay: "240ms" }}>{aiJourney}</p>
                {/* <p>{offering}</p> */}
                
                {/* External Links */}
                <div className="flex justify-center items-center gap-4 pt-4">
                    <a href="https://github.com/WaqasZafar9" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-neonPink transition-colors">
                        <FaGithub size={20} />
                        <span>GitHub</span>
                    </a>
                </div>
            </div>

            {/* Features Footer */}
            <div className="flex justify-center items-center gap-8 pt-4">
                <div className="flex items-center gap-2 text-yellow-400 font-medium">
                    <FaBolt />
                    <span>Fast Delivery</span>
                </div>
                <div className="flex items-center gap-2 text-blue-400 font-medium">
                    <FaCode />
                    <span>Clean Code</span>
                </div>
            </div>
          </div>

          {/* Bottom Section - Cards Grid */}
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl transition-all duration-1000 delay-400 ${
              isVisible
                ? "animate-slide-in-right opacity-100"
                : "opacity-0 translate-x-[50px]"
            }`}
          >
            {cards.map((card, index) => (
                <div 
                    key={index} 
                    className="group bg-[#0f111a] border border-white/5 p-6 rounded-2xl hover:border-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl text-left"
                >
                    <div className={`w-12 h-12 rounded-xl ${card.bg} ${card.color} flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <card.icon />
                    </div>
                    <h4 className="text-white text-xl font-bold mb-2">{card.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        {card.desc}
                    </p>
                </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Aboutme;
