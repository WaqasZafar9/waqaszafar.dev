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
import zanderioprojectImg from "../assets/zanderioproject.webp";
import lahoriyaImg from "../assets/lahoriya.png";

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
      title: "Zanderio AI",
      category: "Website",
      description:
        "Product site for Zanderio—an AI platform—showcasing positioning, features, and lead paths.",
      technologies: ["Web", "AI", "Responsive"],
      image: zanderioprojectImg,
      liveUrl: "https://zanderio.ai/",
      githubUrl: null,
    },
    {
      title: "Lahoriya",
      category: "Website",
      description:
        "Corporate website for Lahoriya with brand-forward layout and clean user journeys.",
      technologies: ["Web", "Responsive", "Branding"],
      image: lahoriyaImg,
      liveUrl: "https://www.lahoriya.co/",
      githubUrl: null,
    },
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

        {/* Masonry columns — row height follows each image */}
        <div className="columns-1 md:columns-2 lg:columns-3 [column-gap:2rem]">
            {filteredProjects.map((project, index) => (
                <div
                    key={project.title}
                    className={`motion-reduce:!translate-y-0 motion-reduce:!opacity-100 break-inside-avoid mb-8 transition-[opacity,transform] duration-[720ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                    style={{
                      transitionDelay: `${index * 75}ms`,
                    }}
                >
                    <article className="group relative rounded-2xl overflow-hidden bg-[#111827] border border-white/10 shadow-lg shadow-black/40 transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform motion-reduce:transform-none hover:-translate-y-2 hover:border-neonPink/35 hover:shadow-[0_24px_50px_-12px_rgba(236,72,153,0.22)] hover:shadow-black/60 motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-lg">
                        {/* Project name — always visible, top-left */}
                        <div className="pointer-events-none absolute top-3 left-3 z-[45] max-w-[calc(100%-1.25rem)]">
                            <p className="inline-block max-w-full truncate rounded-lg bg-black/65 px-3 py-1.5 text-left text-sm font-semibold tracking-tight text-white shadow-lg ring-1 ring-white/10 backdrop-blur-md">
                                {project.title}
                            </p>
                        </div>

                        <img
                            src={project.image}
                            alt={project.title}
                            decoding="async"
                            loading="lazy"
                            className="block h-auto w-full bg-[#111827] motion-reduce:transition-none motion-reduce:scale-100 origin-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                        />

                        {/* Hover overlay: scroll when card is short so copy + tags + actions stay readable */}
                        <div className="pointer-events-none absolute inset-0 z-40 overflow-hidden opacity-0 transition-opacity duration-300 group-hover:pointer-events-auto group-hover:opacity-100">
                            <div
                                className="pointer-events-none absolute inset-0 bg-linear-to-t from-black via-black/82 to-black/35 backdrop-blur-[2px]"
                                aria-hidden
                            />
                            <div className="project-overlay-scroll absolute inset-0 overflow-y-auto overscroll-contain pb-5">
                                <div className="flex min-h-full flex-col justify-end px-5 pt-28 pb-1 sm:p-6 sm:pt-32">
                                    <div className="translate-y-4 space-y-2.5 transition-transform duration-500 ease-out group-hover:translate-y-0 sm:space-y-3">
                                        <span className="block text-[11px] font-bold tracking-wider text-neonPink uppercase sm:text-xs">
                                            {project.category}
                                        </span>
                                        <h3 className="text-lg font-bold leading-snug text-white sm:text-xl">
                                            {project.title}
                                        </h3>
                                        <p className="text-xs leading-relaxed text-gray-200 sm:text-sm">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-1.5 pt-1 sm:gap-2">
                                            {project.technologies.slice(0, 3).map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="rounded-md bg-white/12 px-2 py-0.5 text-[10px] leading-tight text-gray-200 ring-1 ring-white/10 sm:py-1"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex flex-wrap gap-3 pt-1">
                                            {project.githubUrl && project.githubUrl !== "#" && (
                                                <a
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="shrink-0 rounded-full bg-white/12 p-2 text-white ring-1 ring-white/15 transition-colors hover:bg-neonPink hover:text-white"
                                                    title="View Code"
                                                >
                                                    <FaGithub size={18} />
                                                </a>
                                            )}
                                            {project.liveUrl !== "#" && (
                                                <a
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="shrink-0 rounded-full bg-white/12 p-2 text-white ring-1 ring-white/15 transition-colors hover:bg-blue-500 hover:text-white"
                                                    title="Live Demo"
                                                >
                                                    <FaExternalLinkAlt size={16} />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
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
