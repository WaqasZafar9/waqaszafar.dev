import React, { useEffect, useRef, useState } from "react";
import { FaBriefcase, FaGraduationCap, FaDownload } from "react-icons/fa";
import resume from "../assets/Resume.pdf";

function Experience() {
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

  const experienceData = [
    {
      company: "Lab 23 Technology",
      title: "Software Engineer",
      period: "Oct 2025 – Present",
      description:
        "Developing and maintaining responsive web applications using React.js and Next.js. Collaborating with the team to deliver high-quality, functional web solutions and optimizing components for performance.",
    },
    {
      company: "Lab 23 Technology",
      title: "Frontend Engineer – Intern",
      period: "Jul 2025 – Oct 2025",
      description:
        "Worked on improving UI experience and performance across devices. Integrated REST APIs and optimized components by reducing unnecessary re-renders.",
    },
    {
      company: "Social Swirl",
      title: "App Developer – Intern",
      period: "Aug 2024 – Oct 2024",
      description:
        "Developed mobile applications using Flutter, built clean UI screens, and connected them with APIs. Enhanced user flow and usability features.",
    },
  ];

  const educationData = [
    {
      institution: "Riphah International University",
      degree: "BS Computer Science",
      period: "2021 – 2025",
      description:
        "Graduated in BSCS, actively participated in co-curricular activities, worked as Co-Lead for AWS Learning Club, and contributed to the university tech community.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="bg-black min-h-screen py-20 px-4 font-sans relative overflow-hidden"
    >
      {/* Top Separator Glow */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-purple-500/50 to-transparent"></div>
      {/* Glamour Glow Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
      {/* <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-600/30 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div> */}

      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div 
            className={`flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
            <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                    Curriculum <span className="text-transparent bg-clip-text bg-linear-to-r from-neonPink to-purple-400">Vitae</span>
                </h2>
                <p className="text-gray-400 text-lg">A summary of my professional journey</p>
            </div>
            
            <a 
                href={resume} 
                download="Waqas_Zafar_CV.pdf"
                className="group px-6 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white font-medium transition-all duration-300 hover:bg-white/10 hover:border-white/40 flex items-center gap-2"
            >
                <FaDownload className="text-sm group-hover:translate-y-0.5 transition-transform" />
                Download CV
            </a>
        </div>

        {/* Main Content Box */}
        <div 
            className={`bg-[#050505] rounded-3xl p-8 md:p-12 border border-white/5 shadow-[0_0_70px_5px_rgba(255,16,240,0.3)]  transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                
                {/* Experience Column */}
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <FaBriefcase className="text-neonPink text-2xl" />
                        <h3 className="text-2xl font-bold text-pink-400">Experience</h3>
                    </div>

                    <div className="space-y-12">
                        {experienceData.map((item, index) => (
                            <div key={index} className="relative pl-8 border-l border-white/10 last:border-0 group">
                                {/* Timeline Dot */}
                                <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#1F2937] group-hover:bg-neonPink transition-colors duration-300"></div>
                                
                                <div className="flex flex-col space-y-1">
                                    <h4 className="text-white text-xl font-bold">{item.title}</h4>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-gray-400 font-medium">{item.company}</span>
                                        <span className="text-gray-500 text-xs bg-white/5 px-2 py-1 rounded-md">{item.period}</span>
                                    </div>
                                    <p className="text-gray-400 text-sm leading-relaxed pt-2">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Education Column */}
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <FaGraduationCap className="text-blue-400 text-2xl" />
                        <h3 className="text-2xl font-bold text-blue-400">Education</h3>
                    </div>

                    <div className="space-y-12">
                        {educationData.map((item, index) => (
                            <div key={index} className="relative pl-8 border-l border-white/10 last:border-0 group">
                                {/* Timeline Dot */}
                                <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#1F2937] group-hover:bg-blue-400 transition-colors duration-300"></div>
                                
                                <div className="flex flex-col space-y-1">
                                    <h4 className="text-white text-xl font-bold">{item.degree}</h4>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-gray-400 font-medium">{item.institution}</span>
                                        <span className="text-gray-500 text-xs bg-white/5 px-2 py-1 rounded-md">{item.period}</span>
                                    </div>
                                    <p className="text-gray-400 text-sm leading-relaxed pt-2">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>

      </div>
    </section>
  );
}

export default Experience;
