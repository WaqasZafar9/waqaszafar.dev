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
  const introduction = "I’m M. Waqas Zafar, a Software Engineer who builds clean, fast, and user-friendly apps. My main tools are React.js, Next.js, Tailwind CSS, and React Native. Currently, I’m working at Lab 23 Technology, where I build cross-platform mobile and web solutions that look great and work perfectly with APIs. My goal is simple: I take your ideas and turn them into smooth, reliable digital products that actually solve problems.";
  
  const journey = "I started my development journey a little over a year ago and have grown through real projects, internships, and continuous learning. I’ve built several Webflow websites, developed mobile apps, and worked with backend tools like Node.js, Express, and MongoDB. I’m currently working as a Software Engineer while also doing side projects to improve my skills and explore new ideas.";

  const goals = "If you need an engineer who can take full ownership of a project from mobile apps to web platforms and deliver a polished, launch-ready product, I am ready to step in. I focus on efficiency and ensuring your tech stack is a reliable asset for your users.";

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
      title: "UI/UX Implementation",
      desc: "Translating design mockups into pixel-perfect, interactive, and accessible user interfaces.",
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
            
            <div className="space-y-6 text-gray-400 text-base leading-relaxed mb-8 mx-auto">
                <p>{introduction}</p>
                <p>{journey}</p>
                <p>{goals}</p>
                {/* <p>{offering}</p> */}
                
                {/* External Links */}
                <div className="flex justify-center items-center gap-4 pt-4">
                    <a href="https://github.com/WaqasZafar9" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-neonPink transition-colors">
                        <FaGithub size={20} />
                        <span>GitHub</span>
                    </a>
                </div>

                <p className="pt-4 text-gray-300 font-medium">{cta}</p>
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
