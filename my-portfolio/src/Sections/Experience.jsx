import React, { useEffect, useRef, useState } from "react";
import { FaDownload } from "react-icons/fa";
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
      company: "Lab 3 Technology",
      title: "Software Engineer",
      period: "Oct 2025 - Present",
      status: "LIVE",
      highlights: [
        "Developing and maintaining responsive web applications using React.js and Next.js.",
        "Collaborating with the team to deliver high-quality features on time.",
        "Optimizing reusable components and pages for better performance and cleaner UX.",
      ],
      stack: ["React.js", "Next.js", "JavaScript", "REST APIs"],
    },
    {
      company: "Lab 3 Technology",
      title: "Frontend Engineer - Intern",
      period: "Jul 2025 - Oct 2025",
      highlights: [
        "Improved UI experience and performance across multiple frontend modules.",
        "Integrated REST APIs and optimized components by reducing unnecessary renders.",
      ],
      stack: ["React.js", "JavaScript", "Tailwind CSS", "REST APIs"],
    },
    {
      company: "Social Swirl",
      title: "App Developer - Intern",
      period: "Aug 2024 - Oct 2024",
      highlights: [
        "Developed mobile app screens in Flutter with clean, reusable UI components.",
        "Connected app modules with APIs and improved navigation flow and usability.",
      ],
      stack: ["Flutter", "Dart", "Firebase", "APIs"],
    },
  ];

  const educationData = [
    {
      institution: "Riphah International University",
      degree: "BS Computer Science",
      period: "2021 - 2025",
      field: "Computer Science",
      grade: "Completed",
    },
    {
      institution: "Punjab Group of Colleges",
      degree: "Intermediate (ICS)",
      period: "2019 - 2021",
      field: "Computer Science",
      grade: "Completed",
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
        {/* Experience heading */}
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <span className="inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-[#7f7fff]">
                <span className="h-px w-14 bg-linear-to-r from-blue-500/90 to-purple-500/90" />
                Experience
              </span>
              <h2 className="mt-4 text-5xl md:text-6xl font-bold text-white">Work Experience</h2>
              <p className="mt-3 text-gray-500 text-lg tracking-wide">career_log_history.log</p>
              <div className="mt-5 h-[2px] w-20 bg-linear-to-r from-blue-500 to-purple-500" />
            </div>
            <a
              href={resume}
              download="Waqas_Zafar_CV.pdf"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/25 hover:shadow-[0_0_25px_rgba(124,58,237,0.35)]"
            >
              Download CV
              <FaDownload className="text-xs transition-transform group-hover:translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Experience timeline */}
        <div
          className={`relative mt-14 pl-0 md:pl-8 transition-all duration-1000 delay-150 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="absolute left-1 top-2 bottom-2 hidden md:block w-px bg-linear-to-b from-blue-500/80 via-purple-500/40 to-transparent" />
          {experienceData.map((item, index) => (
            <article
              key={item.title}
              className={`${index > 0 ? "mt-10" : ""} group relative transition-transform duration-500 ease-out hover:-translate-y-1.5`}
            >
              <div className="absolute -left-[36px] top-8 hidden md:flex items-center justify-center">
                <span className="h-3.5 w-3.5 rounded-full bg-blue-500 shadow-[0_0_14px_rgba(59,130,246,0.9)]" />
              </div>
              <div className="rounded-2xl border border-white/10 bg-[#0a0b12]/90 backdrop-blur-sm p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:border-purple-400/40 group-hover:shadow-[0_24px_60px_rgba(124,58,237,0.25)]">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-purple-200">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-lg font-semibold text-[#9a8bff]">{item.company}</p>
                  </div>
                  <div className="text-sm text-gray-400 md:text-right">
                    <span>{item.period}</span>
                    {item.status && (
                      <span className="ml-2 text-emerald-400 font-semibold">{item.status}</span>
                    )}
                  </div>
                </div>

                <ul className="mt-5 space-y-1.5 text-gray-200 leading-relaxed transition-all duration-500 group-hover:translate-x-0.5">
                  {item.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.stack.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-gray-300 transition-colors duration-300 group-hover:border-purple-300/30 group-hover:text-gray-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Education heading */}
        <div
          className={`mt-24 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <span className="inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-[#7f7fff]">
            <span className="h-px w-14 bg-linear-to-r from-blue-500/90 to-purple-500/90" />
            Education History
          </span>
          <h2 className="mt-4 text-5xl md:text-6xl font-bold text-white">Education</h2>
          <p className="mt-3 text-gray-500 text-lg tracking-wide">academic_record.key</p>
          <div className="mt-5 h-[2px] w-20 bg-linear-to-r from-blue-500 to-purple-500" />
        </div>

        {/* Education cards */}
        <div
          className={`mt-12 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          {educationData.map((item) => (
            <article
              key={item.degree}
              className="group max-w-xl rounded-2xl border border-white/10 bg-[#0a0b12]/90 backdrop-blur-sm p-6 md:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-1.5 hover:border-blue-400/40 hover:shadow-[0_24px_60px_rgba(59,130,246,0.22)]"
            >
              <div className="flex items-start gap-4">
                <div className="mt-0.5 flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/40 bg-blue-500/15 transition-all duration-500 group-hover:scale-105 group-hover:bg-blue-500/25">
                  <span className="text-blue-300 text-lg">🎓</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white leading-tight transition-colors duration-300 group-hover:text-blue-100">
                    {item.degree}
                  </h3>
                  <p className="mt-2 text-lg font-semibold text-[#9a8bff]">{item.institution}</p>
                  <p className="mt-2 text-sm text-gray-400">{item.period}</p>
                  <p className="mt-2 text-sm text-gray-500">{item.field}</p>
                  <p className="mt-1 text-sm text-gray-300">
                    Grades: <span className="font-semibold">{item.grade}</span>
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
