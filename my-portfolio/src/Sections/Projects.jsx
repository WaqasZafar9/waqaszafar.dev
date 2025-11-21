import React, { useEffect, useRef, useState } from "react";
import socialSwirlImg from "../assets/socialSwirlImg.png";
import unitystackImg from "../assets/unitystack.png";
import pettifyImg from "../assets/nursery_teacher_device_2.jpg";
import galaxyCricketImg from "../assets/cricket.jpg";
import salonImg from "../assets/Salon.png";
import lisenceImg from "../assets/lisence.jpg";
import uamsImg from "../assets/umas.jpg";
import crickdatabaseImg from "../assets/database.png";
import nextjslogo from "../assets/next.png";

function Projects() {
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

  const projectsData = [
    {
      title: "Unity Stack - Final Year Project",
      description:
        "Developed a real-time collaboration platform for developers to connect, mentor, and work together. Implemented React.js for a dynamic UI and Node.js with MongoDB for backend functionality. Focused on real-time chat, one-to-one live help sessions, and collaborative projects.",
      technologies: ["React.js", "Vite", "Node.js", "MongoDB", "Rest APIs"],
      image: unitystackImg,
      liveUrl: "https://github.com/WaqasZafar9/UnityStack2.0.git",
      githubUrl: "https://github.com/WaqasZafar9/UnityStack2.0.git",
    },
    {
      title: "Pettify - Flutter Pet Care App",
      description:
        "Pet care platform with Firebase backend offers pet tracking, pet info, and pet item shopping. Integrates user authentication, cloud storage, and real-time database access, providing a comprehensive experience for pet owners.",
      technologies: [
        "Flutter",
        "Firebase",
        "Dart",
        "Maps API",
        "Android Studio",
      ],
      image: pettifyImg,
      liveUrl: "#",
      githubUrl: "https://github.com/Fuzail-Raza/Pet-Care-App.git",
    },
    {
      title: "Social Swirl - Flutter App",
      description:
        "Built for Social Swirl company during internship, this mobile app facilitates social engagement and features tailored to the company’s requirements.",
      technologies: ["Flutter", "Dart", "Firebase"],
      image: socialSwirlImg,
      liveUrl: "#",
      githubUrl: "https://github.com/WaqasZafar9/socialswirl.git",
    },
    {
      title: "Galaxy Cricket Website",
      description:
        "Provides cricket enthusiasts with the latest news, match updates, and interactive features. Built using HTML, CSS, PHP, and JavaScript for a dynamic and user-friendly experience.",
      technologies: [
        "HTML5 & CSS",
        "PHP",
        "JavaScript",
        "SQL database",
        "VS Code",
      ],
      image: galaxyCricketImg,
      liveUrl: "#",
      githubUrl: "https://github.com/WaqasZafar9/Galaxy-Cricket-Website.git",
    },
    {
      title: "Beauty Salon Website",
      description:
        "A dynamic beauty salon website built with HTML, CSS, and PHP. Features an SQL database for managing customer appointments and services.",
      technologies: ["HTML & CSS", "PHP", "JavaScript", "SQL database"],
      image: salonImg,
      liveUrl: "https://fresh-rose.vercel.app/",
      githubUrl: "https://github.com/WaqasZafar9/Fresh-Rose",
    },
    {
      title: "Smart-E-License-System",
      description:
        "Smart License System revolutionizes the driving license process with modern technologies for enhanced efficiency and user-friendliness, providing a streamlined experience for the local community.",
      technologies: ["Java", "IntelliJ", "MySQL database"],
      image: lisenceImg,
      liveUrl: "#",
      githubUrl: "https://github.com/WaqasZafar9/Smart-E-License-System",
    },
    {
      title: "UAMS (University Admission Management OOP)",
      description:
        "A comprehensive software solution developed using Object-Oriented Programming principles in C++. The system streamlines and automates the admission process, enabling students to register, apply, and receive scholarships efficiently.",
      technologies: ["C++", "Visual Studio"],
      image: uamsImg,
      liveUrl: "#",
      githubUrl: "https://shorturl.at/F23va",
    },
    {
      title: "Cricket Database System",
      description:
        "A cricket database system designed to manage data related to a cricket tournament, utilizing Oracle 21 C software for storing and organizing team details, match fixtures, player statistics, and more.",
      technologies: ["Oracle 21 C"],
      image: crickdatabaseImg,
      liveUrl: "#",
      githubUrl:
        "https://github.com/WaqasZafar9/Cricket-Managment-DataBase.git",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="bg-[#030712] min-h-screen flex items-center justify-center py-16 px-4"
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            isVisible
              ? "animate-slide-in-left opacity-100"
              : "opacity-0 translate-x-[-50px]"
          }`}
        >
          {/* Work Button */}
          <div className="flex justify-center mb-6">
            <button className="bg-[#1F2937] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#374151] transition-colors">
              Work
            </button>
          </div>

          {/* Heading */}
          <h2 className="text-xl md:text-3xl font-regular text-white mb-8 md:mb-12 text-center">
            Some of the noteworthy projects I have built:
          </h2>

          {/* Project Cards */}
          <div className="space-y-6 md:space-y-8">
            {projectsData.map((project, index) => (
              <div
                key={index}
                className={`rounded-lg overflow-hidden flex flex-col md:flex-row ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                {/* Left Side - Project Image */}
                <div className="bg-[#4B5563] w-full md:w-1/2 h-64 md:h-[400px] flex items-center justify-center overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="max-w-full max-h-full object-contain"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 flex flex-col items-center justify-center text-white p-6">
                      <div className="text-center space-y-4">
                        <h3 className="text-2xl font-bold">Project Image</h3>
                        <div className="w-32 h-48 bg-white rounded-lg mx-auto shadow-lg"></div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Side - Project Details */}
                <div className="bg-[#1F2937] w-full md:w-1/2 md:h-[400px] p-6 md:p-8 flex flex-col justify-start">
                  {/* Project Title */}
                  <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#D1D5DB] text-sm md:text-base mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-[#374151] text-white px-3 py-1 rounded-lg text-xs md:text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 mt-auto">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#10B981] transition-colors"
                      aria-label="View live project"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#10B981] transition-colors"
                      aria-label="View GitHub repository"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
