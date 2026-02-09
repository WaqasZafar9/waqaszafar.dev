import React, { useEffect, useRef, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import socialSwirlImg from "../assets/socialSwirlImg.png";
import unitystackImg from "../assets/unitystack.png";
import pettifyImg from "../assets/nursery_teacher_device_2.jpg";
import galaxyCricketImg from "../assets/cricket.jpg";
import salonImg from "../assets/Salon.png";
import lisenceImg from "../assets/lisence.jpg";
import uamsImg from "../assets/umas.jpg";
import crickdatabaseImg from "../assets/database.png";

function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
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

  const projectsData = [
    {
      title: "Unity Stack",
      category: "Web App",
      description: "Real-time collaboration platform for developers.",
      technologies: ["React.js", "Node.js", "MongoDB"],
      image: unitystackImg,
      liveUrl: "https://github.com/WaqasZafar9/UnityStack2.0.git",
      githubUrl: "https://github.com/WaqasZafar9/UnityStack2.0.git",
    },
    {
      title: "Pettify",
      category: "Mobile App",
      description: "Comprehensive pet care platform with tracking and shopping.",
      technologies: ["Flutter", "Firebase", "Dart"],
      image: pettifyImg,
      liveUrl: "#",
      githubUrl: "https://github.com/Fuzail-Raza/Pet-Care-App.git",
    },
    {
      title: "Social Swirl",
      category: "Mobile App",
      description: "Social engagement mobile app built for corporate needs.",
      technologies: ["Flutter", "Dart", "Firebase"],
      image: socialSwirlImg,
      liveUrl: "#",
      githubUrl: "https://github.com/WaqasZafar9/socialswirl.git",
    },
    {
      title: "Galaxy Cricket",
      category: "Website",
      description: "Cricket news and updates website with dynamic features.",
      technologies: ["PHP", "JavaScript", "MySQL"],
      image: galaxyCricketImg,
      liveUrl: "https://waqaszafar9.github.io/Galaxy-Cricket-Website/",
      githubUrl: "https://github.com/WaqasZafar9/Galaxy-Cricket-Website.git",
    },
    {
      title: "Beauty Salon",
      category: "Website",
      description: "Dynamic salon website with appointment management.",
      technologies: ["PHP", "HTML/CSS", "SQL"],
      image: salonImg,
      liveUrl: "https://fresh-rose.vercel.app/",
      githubUrl: "https://github.com/WaqasZafar9/Fresh-Rose",
    },
    {
      title: "Smart E-License",
      category: "Desktop",
      description: "Modernizing driving license processes for efficiency.",
      technologies: ["Java", "MySQL", "IntelliJ"],
      image: lisenceImg,
      liveUrl: "#",
      githubUrl: "https://github.com/WaqasZafar9/Smart-E-License-System",
    },
    {
      title: "UAMS System",
      category: "Desktop",
      description: "University Admission Management System in C++.",
      technologies: ["C++", "OOP", "Visual Studio"],
      image: uamsImg,
      liveUrl: "#",
      githubUrl: "https://shorturl.at/F23va",
    },
    {
      title: "Cricket DB",
      category: "Desktop",
      description: "Comprehensive database system for cricket tournaments.",
      technologies: ["Oracle 21c"],
      image: crickdatabaseImg,
      liveUrl: "#",
      githubUrl: "https://github.com/WaqasZafar9/Cricket-Managment-DataBase.git",
    },
  ];

  const categories = ["All", "Web App", "Mobile App", "Website", "Desktop"];

  const filteredProjects = activeCategory === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="bg-black min-h-screen py-20 px-4 font-sans relative overflow-hidden"
    >
      {/* Top Separator Glow */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-purple-500/50 to-transparent"></div>
      {/* Glamour Glow Effects - Behind Header & Tabs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[350px] h-[250px] bg-pink-600/20 rounded-full blur-[80px] pointer-events-none mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }}></div>

      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                My <span className="text-transparent bg-clip-text bg-linear-to-r from-neonPink to-blue-400">Portfolio</span>
            </h2>
            <p className="text-gray-400 text-lg">A collection of my recent works</p>
        </div>

        {/* Filter Tabs */}
        <div className={`flex flex-wrap justify-center gap-4 mb-16 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        activeCategory === category
                            ? "bg-linear-to-r from-neonPink to-purple-600 text-white shadow-[0_0_15px_rgba(236,72,153,0.4)]"
                            : "bg-[#111827] text-gray-400 border border-white/10 hover:border-white/30 hover:text-white"
                    }`}
                >
                    {category}
                </button>
            ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
                <div 
                    key={index}
                    className={`group relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#111827] border border-white/5 transition-all duration-500 hover:shadow-2xl ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                >
                    {/* Image */}
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 backdrop-blur-sm">
                        
                        {/* Content that slides up */}
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <span className="text-neonPink text-xs font-bold tracking-wider uppercase mb-2 block">
                                {project.category}
                            </span>
                            <h3 className="text-white text-xl font-bold mb-2">
                                {project.title}
                            </h3>
                            <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                                {project.description}
                            </p>
                            
                            {/* Tech Stack Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.slice(0, 3).map((tech, i) => (
                                    <span key={i} className="text-[10px] bg-white/10 text-gray-300 px-2 py-1 rounded-md">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Action Links */}
                            <div className="flex gap-4">
                                <a 
                                    href={project.githubUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="p-2 bg-white/10 rounded-full text-white hover:bg-neonPink hover:text-white transition-colors"
                                    title="View Code"
                                >
                                    <FaGithub size={18} />
                                </a>
                                {project.liveUrl !== "#" && (
                                    <a 
                                        href={project.liveUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="p-2 bg-white/10 rounded-full text-white hover:bg-blue-500 hover:text-white transition-colors"
                                        title="Live Demo"
                                    >
                                        <FaExternalLinkAlt size={16} />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        
        {/* No Results Message */}
        {filteredProjects.length === 0 && (
            <div className="text-center text-gray-500 py-20">
                <p>No projects found in this category yet.</p>
            </div>
        )}

      </div>
    </section>
  );
}

export default Projects;
