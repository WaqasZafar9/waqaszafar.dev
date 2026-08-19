import React, { useEffect, useRef, useState } from "react";
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

const PROJECTS_DATA = [
  {
    id: "zanderio",
    title: "Zanderio AI",
    meta: "ZANDERIO • AI PLATFORM",
    category: "Web platforms",
    description:
      "Product site for Zanderio—an AI SaaS platform—showcasing positioning, core capabilities, interactive workflow previews, and lead acquisition funnels.",
    tags: ["PRODUCT DESIGN", "MVP", "AI PLATFORM"],
    image: zanderioprojectImg,
    liveUrl: "https://zanderio.ai/",
    liveButtonText: "Try Zanderio AI ↗",
    githubUrl: null,
    caseStudy: {
      title: "Zanderio AI",
      tagline: "Turning passive website visitors into real conversations and conversions.",
      overview:
        "Zanderio is an AI-powered sales agent designed to help businesses engage visitors in real time, answer product and service questions, qualify intent, and guide customers toward purchases, bookings, or consultations.",
      product: "Zanderio AI",
      category: "AI · SaaS · Sales Automation",
      role: "Software Engineer / Frontend Development",
      focus: "Web Application · AI Interfaces · Dashboards",
      problem:
        "Traditional websites are passive. A visitor can browse a product, read information, hesitate over a decision, and leave without ever starting a conversation. Traditional chatbots also tend to behave like support tools rather than sales assistants. Zanderio was built around a different idea: What if the website could understand what a visitor needs and help them make a decision in real time?",
      workedOn: [
        "Responsive web interfaces & AI sales-agent experiences",
        "Dashboard & management user interfaces",
        "Product/service information flows & Conversational UI",
        "Integration-oriented experiences for e-commerce platforms",
        "Reusable frontend components & production-ready layouts",
      ],
      experience:
        "The challenge was to make a technically complex AI product feel extremely simple to use. A business owner should be able to connect their store, provide knowledge, customize behavior, and launch without complicated setup. On the customer side, the flow is: Understand → Answer → Recommend → Convert.",
      highlights: [
        {
          name: "AI Sales Agent",
          desc: "Real-time conversations that help visitors make purchasing or service decisions.",
        },
        {
          name: "Product-Aware Intelligence",
          desc: "Works directly from catalog, product info, pricing, policies, and knowledge base.",
        },
        {
          name: "Smart Recommendations",
          desc: "Context-aware AI recommendations based on customer intent and business priorities.",
        },
        {
          name: "Analytics & Insights",
          desc: "Sales-oriented metrics tracking visitor questions, intent, and conversion opportunities.",
        },
        {
          name: "Multi-Platform Integration",
          desc: "Supports Shopify, WordPress, Webflow, WooCommerce, and custom platforms.",
        },
      ],
      impact:
        "Instead of presenting Zanderio as just another chatbot, the product experience communicates it as an AI sales layer for a business's website. The result: More conversations → Better assistance → Qualified intent → More opportunities to convert.",
      technologies: [
        "React.js",
        "Bootstrap 5",
        "JavaScript",
        "Tailwind CSS",
        "REST APIs",
        "AI Integrations",
      ],
      closing:
        "Building Zanderio was less about putting AI on a website and more about making AI useful at the exact moment a visitor needs it. From visitor → conversation → decision → conversion.",
    },
  },
  {
    id: "lahoriya",
    title: "Lahoriya Brand Site",
    meta: "LAHORIYA • CORPORATE SITE",
    category: "Web platforms",
    description:
      "Corporate digital platform for Lahoriya featuring a brand-forward layout, seamless user journeys, responsive motion architecture, and clean editorial design.",
    tags: ["BRANDING", "CORPORATE", "WEB EXPERIENCE"],
    image: lahoriyaImg,
    liveUrl: "https://www.lahoriya.co/",
    liveButtonText: "Visit Lahoriya ↗",
    githubUrl: null,
    caseStudy: {
      title: "Lahoriya Brand Site",
      tagline: "Building a brand-forward corporate digital identity.",
      overview:
        "Lahoriya needed a modern corporate platform that presents their brand heritage, product portfolio, and partner ecosystem with fluid web motion.",
      product: "Lahoriya Corporate",
      category: "Corporate · Web Experience · Branding",
      role: "Frontend Engineer",
      focus: "UI Architecture · Responsive Design · Motion & Performance",
      problem:
        "Corporate sites often feel static or outdated. Lahoriya required a dynamic, high-end web presence that reflects modern product design while staying fast across mobile devices.",
      workedOn: [
        "Brand-aligned design system and component architecture",
        "High-performance responsive grid layouts",
        "Fluid motion transitions and interactive brand showcases",
      ],
      experience:
        "Focused on crafting structured editorial typography, clean visual hierarchy, and instant page loads.",
      highlights: [
        {
          name: "Editorial Hierarchy",
          desc: "Tailored typography and clean grid layouts for corporate storytelling.",
        },
        {
          name: "Responsive Fluid Motion",
          desc: "60fps micro-animations designed for cross-platform responsiveness.",
        },
      ],
      impact:
        "Delivered a sleek, corporate-ready digital experience that elevates brand authority and user engagement.",
      technologies: ["React.js", "JavaScript", "Tailwind CSS", "Vite"],
      closing: "Elevating corporate digital presence through modern, responsive web design.",
    },
  },
  {
    id: "unitystack",
    title: "Unity Stack 2.0",
    meta: "UNITY STACK • FULL-STACK PLATFORM",
    category: "Web platforms",
    description:
      "Real-time developer collaboration workspace with instant code sharing, room management, and automated cloud sync.",
    tags: ["REACT.JS", "NODE.JS", "MONGODB"],
    image: unitystackImg,
    liveUrl: "https://github.com/WaqasZafar9/UnityStack2.0.git",
    liveButtonText: "View Repository ↗",
    githubUrl: "https://github.com/WaqasZafar9/UnityStack2.0.git",
    caseStudy: {
      title: "Unity Stack 2.0",
      tagline: "Real-time collaborative developer workspace.",
      overview:
        "Unity Stack 2.0 empowers developer teams to collaborate, write code, share rooms, and manage full-stack workflows in real-time.",
      product: "Unity Stack 2.0",
      category: "Full-Stack · Developer Tools · Real-time Apps",
      role: "Full-Stack Developer",
      focus: "React.js · Node.js · WebSockets · MongoDB",
      problem:
        "Developers need frictionless environments to collaborate live without complex local setups.",
      workedOn: [
        "Real-time state synchronization using WebSockets",
        "Modular React frontend dashboard architecture",
        "RESTful API & MongoDB schema optimization",
      ],
      experience:
        "Engineered reliable real-time communication channels and responsive code workspace components.",
      highlights: [
        {
          name: "Instant Room Sharing",
          desc: "One-click collaborative rooms for instant dev pair programming.",
        },
        {
          name: "Cloud Sync",
          desc: "Automated session saving and project state persistence.",
        },
      ],
      impact:
        "Built a robust full-stack developer hub reducing setup time for real-time collaboration.",
      technologies: ["React.js", "Node.js", "Express", "MongoDB", "WebSockets"],
      closing: "Empowering developers through seamless real-time collaborative tools.",
    },
  },
  {
    id: "pettify",
    title: "Pettify Pet Care",
    meta: "PETTIFY • MOBILE APP",
    category: "Mobile apps",
    description:
      "Comprehensive mobile pet care ecosystem with medical tracking, service booking, real-time reminders, and commerce integration.",
    tags: ["FLUTTER", "FIREBASE", "MOBILE APP"],
    image: pettifyImg,
    liveUrl: "https://github.com/Fuzail-Raza/Pet-Care-App.git",
    liveButtonText: "View Source Code ↗",
    githubUrl: "https://github.com/Fuzail-Raza/Pet-Care-App.git",
    caseStudy: {
      title: "Pettify Pet Care",
      tagline: "Simplifying pet care management for pet parents.",
      overview:
        "Pettify is a cross-platform mobile application providing pet owners with medical scheduling, vaccination reminders, and grooming bookings.",
      product: "Pettify App",
      category: "Mobile App · Flutter · Pet Care · Firebase",
      role: "Mobile App Developer",
      focus: "Flutter UI · Firebase Auth · State Management",
      problem:
        "Pet parents struggle with tracking multiple health records, appointments, and pet needs across fragmented channels.",
      workedOn: [
        "Cross-platform Flutter mobile UI development",
        "Firebase real-time database and notification integrations",
        "Custom pet profile and medical log components",
      ],
      experience:
        "Designed intuitive mobile screens tailored for quick navigation and instant booking flows.",
      highlights: [
        {
          name: "Medical Log Tracking",
          desc: "Centralized record keeping for vaccinations and medical histories.",
        },
        {
          name: "Smart Reminders",
          desc: "Automated push notifications for pet medications and vet visits.",
        },
      ],
      impact:
        "Delivered an all-in-one mobile app experience for pet owners with positive usability feedback.",
      technologies: ["Flutter", "Dart", "Firebase", "REST APIs"],
      closing: "Creating delightful mobile experiences for pet lovers everywhere.",
    },
  },
  {
    id: "socialswirl",
    title: "Social Swirl Mobile",
    meta: "SOCIAL SWIRL • MOBILE PLATFORM",
    category: "Mobile apps",
    description:
      "Next-generation corporate social engagement app featuring dynamic feeds, real-time media uploads, and community interactions.",
    tags: ["FLUTTER", "DART", "SOCIAL PLATFORM"],
    image: socialSwirlImg,
    liveUrl: "https://github.com/WaqasZafar9/socialswirl.git",
    liveButtonText: "Explore Social Swirl ↗",
    githubUrl: "https://github.com/WaqasZafar9/socialswirl.git",
    caseStudy: {
      title: "Social Swirl Mobile",
      tagline: "Connecting corporate communities through dynamic social feeds.",
      overview:
        "Social Swirl is a mobile social platform built for corporate teams to share updates, events, and interactive posts.",
      product: "Social Swirl",
      category: "Mobile App · Flutter · Social Media",
      role: "App Developer Intern",
      focus: "Flutter UI · Feed Architecture · API Integration",
      problem:
        "Corporate internal communications often lack engaging visual interfaces, reducing employee participation.",
      workedOn: [
        "Modular mobile feed screens in Flutter",
        "Backend REST API integrations and media upload flows",
        "Optimized list rendering for smooth 60fps scrolling",
      ],
      experience:
        "Focused on mobile UI performance, interactive post reactions, and responsive media grids.",
      highlights: [
        {
          name: "Dynamic Social Feed",
          desc: "Infinite scroll feed with image, video, and text post support.",
        },
        {
          name: "Real-Time Interactions",
          desc: "Instant likes, comments, and community announcement badges.",
        },
      ],
      impact:
        "Engineered scalable Flutter UI components that streamlined mobile feed interactions.",
      technologies: ["Flutter", "Dart", "Firebase", "REST APIs"],
      closing: "Building engaging mobile social platforms for team connectivity.",
    },
  },
  {
    id: "galaxycricket",
    title: "Galaxy Cricket",
    meta: "GALAXY CRICKET • SPORTS HUB",
    category: "Web platforms",
    description:
      "Live cricket news, tournament statistics, and match updates web portal with responsive layout and dynamic data rendering.",
    tags: ["PHP", "JAVASCRIPT", "SPORTS PLATFORM"],
    image: galaxyCricketImg,
    liveUrl: "https://waqaszafar9.github.io/Galaxy-Cricket-Website/",
    liveButtonText: "View Live Site ↗",
    githubUrl: "https://github.com/WaqasZafar9/Galaxy-Cricket-Website.git",
    caseStudy: {
      title: "Galaxy Cricket Hub",
      tagline: "Live cricket scores, news, and tournament coverage.",
      overview:
        "Galaxy Cricket provides fans with match statistics, news articles, player profiles, and dynamic scoreboard updates.",
      product: "Galaxy Cricket",
      category: "Web Platform · Sports · News",
      role: "Web Developer",
      focus: "PHP · JavaScript · MySQL · Dynamic UI",
      problem:
        "Sports news platforms need fast-loading scoreboard components that update seamlessly without page refreshes.",
      workedOn: [
        "Dynamic scoreboard and match news UI",
        "PHP backend data handling and MySQL database queries",
        "Responsive web layouts for mobile sports fans",
      ],
      experience:
        "Built responsive sports templates optimized for high readability on small screens.",
      highlights: [
        {
          name: "Dynamic Scorecard",
          desc: "Real-time match data presentation for ongoing tournaments.",
        },
      ],
      impact:
        "Shipped a fast sports portal handling tournament news and match updates.",
      technologies: ["PHP", "JavaScript", "HTML5", "CSS3", "MySQL"],
      closing: "Delivering real-time sports coverage with fast web UI.",
    },
  },
  {
    id: "salon",
    title: "Beauty Salon Platform",
    meta: "FRESH ROSE • WEB APPLICATION",
    category: "Web platforms",
    description:
      "Dynamic appointment booking and service showcase web application for luxury salons with inventory management.",
    tags: ["PHP", "BOOKING ENGINE", "WEB APP"],
    image: salonImg,
    liveUrl: "https://fresh-rose.vercel.app/",
    liveButtonText: "Launch Salon App ↗",
    githubUrl: "https://github.com/WaqasZafar9/Fresh-Rose",
    caseStudy: {
      title: "Fresh Rose Beauty Salon",
      tagline: "Streamlining salon appointments and service showcases.",
      overview:
        "Fresh Rose is a web application enabling salon clients to browse services, select stylists, and book appointments online.",
      product: "Fresh Rose Salon",
      category: "Web App · Booking System · E-commerce",
      role: "Full-Stack Web Developer",
      focus: "PHP · Booking Logic · Frontend Styling",
      problem:
        "Manual appointment scheduling leads to phone call backlogs and booking conflicts.",
      workedOn: [
        "Online calendar booking interface",
        "PHP backend session and appointment management",
        "Responsive luxury salon UI design",
      ],
      experience:
        "Crafted elegant salon visual layouts and integrated robust appointment booking logic.",
      highlights: [
        {
          name: "Online Booking Engine",
          desc: "Automated date/time selection with conflict prevention.",
        },
      ],
      impact:
        "Automated booking processes for salon services with zero double-booking errors.",
      technologies: ["PHP", "JavaScript", "Tailwind CSS", "MySQL"],
      closing: "Modernizing service bookings with sleek web interfaces.",
    },
  },
  {
    id: "elisence",
    title: "Smart E-License System",
    meta: "GOVERNMENT TECH • DESKTOP APP",
    category: "Desktop",
    description:
      "Automated driving license issuance and record management desktop application built for high processing reliability.",
    tags: ["JAVA", "MYSQL", "DESKTOP"],
    image: lisenceImg,
    liveUrl: "https://github.com/WaqasZafar9/Smart-E-License-System",
    liveButtonText: "View System Code ↗",
    githubUrl: "https://github.com/WaqasZafar9/Smart-E-License-System",
    caseStudy: {
      title: "Smart E-License System",
      tagline: "Automating driving license processing and identity verification.",
      overview:
        "Desktop management software designed to automate driving test scoring, applicant records, and license issuance.",
      product: "Smart E-License",
      category: "Desktop Software · Java Swing · MySQL",
      role: "Software Developer",
      focus: "Java Swing · Database Architecture · Verification Logic",
      problem:
        "Manual license processing causes long queue times and record inaccuracies.",
      workedOn: [
        "Java Swing desktop GUI development",
        "MySQL database schema and relational queries",
        "Applicant status tracking and automated score calculation",
      ],
      experience:
        "Focused on data integrity, input validation, and reliable desktop database operations.",
      highlights: [
        {
          name: "Automated Records",
          desc: "Centralized database management for fast applicant lookups.",
        },
      ],
      impact:
        "Demonstrated automated license processing workflows with zero data corruption.",
      technologies: ["Java", "Java Swing", "MySQL", "IntelliJ IDEA"],
      closing: "Digitizing public administrative workflows with desktop software.",
    },
  },
  {
    id: "uams",
    title: "UAMS University System",
    meta: "RIPHAH UNIV • DESKTOP SYSTEM",
    category: "Desktop",
    description:
      "High-performance University Admission Management System written in object-oriented C++ with file persistence.",
    tags: ["C++", "OOP", "SYSTEM DESKTOP"],
    image: uamsImg,
    liveUrl: "https://shorturl.at/F23va",
    liveButtonText: "Download Source ↗",
    githubUrl: "https://shorturl.at/F23va",
    caseStudy: {
      title: "UAMS Admission Management System",
      tagline: "High-speed C++ student admission and merit processing.",
      overview:
        "Desktop system built in object-oriented C++ to calculate merit lists, process applications, and handle enrollment.",
      product: "UAMS C++ System",
      category: "Desktop System · C++ · Data Structures",
      role: "C++ Systems Developer",
      focus: "Object-Oriented Design · File Persistence · Merit Algorithms",
      problem:
        "Processing thousands of student admission applications requires fast, deterministic calculation logic.",
      workedOn: [
        "Object-oriented class structure for students, departments, and applications",
        "Binary/Text file storage for persistent data management",
        "Merit list ranking algorithms",
      ],
      experience:
        "Optimized algorithmic efficiency and data file persistence structures in standard C++.",
      highlights: [
        {
          name: "Merit Rank Engine",
          desc: "Automated score weighting and sorting for university departments.",
        },
      ],
      impact:
        "Processed student applications instantly with file-based persistence.",
      technologies: ["C++", "OOP", "Data Structures", "Visual Studio"],
      closing: "Building core system software with high-performance C++.",
    },
  },
  {
    id: "cricketdb",
    title: "Cricket Tournament DB",
    meta: "DATABASE TECH • ORACLE 21C",
    category: "Desktop",
    description:
      "Enterprise relational database management system for multi-league cricket tournaments with complex query views.",
    tags: ["ORACLE 21C", "SQL", "DATABASE SCHEMAS"],
    image: crickdatabaseImg,
    liveUrl: "https://github.com/WaqasZafar9/Cricket-Managment-DataBase.git",
    liveButtonText: "View DB Schema ↗",
    githubUrl: "https://github.com/WaqasZafar9/Cricket-Managment-DataBase.git",
    caseStudy: {
      title: "Cricket Tournament Database",
      tagline: "Enterprise relational database schema for multi-league tournaments.",
      overview:
        "Oracle 21c database architecture supporting teams, player statistics, match fixtures, scorecards, and historical queries.",
      product: "Cricket DB",
      category: "Database Systems · Oracle 21c · SQL",
      role: "Database Engineer",
      focus: "ERD Design · Normalization · Triggers · Complex SQL Views",
      problem:
        "Managing multi-tier cricket league data requires strict relational integrity and fast aggregation queries.",
      workedOn: [
        "Entity-Relationship Diagram (ERD) and 3NF normalization",
        "PL/SQL triggers, stored procedures, and dynamic views",
        "Complex join queries for match statistics analytics",
      ],
      experience:
        "Engineered normalized SQL schemas preventing data redundancy across tournament records.",
      highlights: [
        {
          name: "Complex Relational Schema",
          desc: "3NF normalized database supporting multi-league fixtures.",
        },
      ],
      impact:
        "Achieved fast query execution times across tournament player analytics.",
      technologies: ["Oracle 21c", "PL/SQL", "SQL Developer", "ERD"],
      closing: "Structuring complex relational data into clean database systems.",
    },
  },
];

const ITEMS_PER_PAGE = 4;

/**
 * Modern Case Study Modal Popup Component
 */
function CaseStudyModal({ project, onClose }) {
  const modalRef = useRef(null);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 240);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!project || !project.caseStudy) return null;
  const cs = project.caseStudy;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/85 transition-all duration-300 ease-out ${
        isClosing ? "opacity-0 backdrop-blur-none" : "opacity-100 backdrop-blur-2xl animate-in fade-in"
      }`}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div
        ref={modalRef}
        className={`relative w-full max-w-6xl max-h-[92vh] overflow-y-auto rounded-3xl border border-white/10 bg-[#0a0b10] p-6 sm:p-10 lg:p-12 text-white shadow-[0_30px_90px_rgba(0,0,0,0.95)] transition-all duration-300 transform ease-out ${
          isClosing
            ? "opacity-0 scale-95 translate-y-4"
            : "opacity-100 scale-100 translate-y-0 animate-in zoom-in-95"
        } [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden`}
      >
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 sm:top-8 sm:right-8 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-white/70 transition-all duration-300 hover:bg-white/20 hover:text-white hover:scale-110 cursor-pointer z-30 active:scale-95"
          title="Close Modal (Esc)"
        >
          ✕
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start border-b border-white/10 pb-10">
          <div className="lg:col-span-5 relative overflow-hidden rounded-2xl border border-white/15 bg-black/50 shadow-2xl">
            <img
              src={project.image}
              alt={cs.title}
              className="w-full aspect-[16/10] object-cover object-top"
            />
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                  {cs.title}
                </h2>
              </div>
              <p className="mt-3 text-base sm:text-lg leading-relaxed text-sky-400/90 font-medium">
                {cs.tagline}
              </p>
              <p className="mt-3.5 text-sm leading-relaxed text-slate-300/90">
                {cs.overview}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/10 pt-6">
              <div>
                <span className="text-[0.7rem] uppercase font-mono font-bold tracking-widest text-slate-400 block">
                  Product / Category
                </span>
                <span className="mt-1.5 text-xs font-semibold text-white block">
                  {cs.category}
                </span>
              </div>
              <div>
                <span className="text-[0.7rem] uppercase font-mono font-bold tracking-widest text-slate-400 block">
                  Role
                </span>
                <span className="mt-1.5 text-xs font-semibold text-white block">
                  {cs.role}
                </span>
              </div>
              <div>
                <span className="text-[0.7rem] uppercase font-mono font-bold tracking-widest text-slate-400 block">
                  Focus
                </span>
                <span className="mt-1.5 text-xs font-semibold text-white block">
                  {cs.focus}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="rounded-2xl border border-white/10 bg-[#11131c] p-6 sm:p-8 shadow-xl">
              <h3 className="text-lg font-bold text-white tracking-wide">
                The Problem I Solved
              </h3>
              <p className="mt-3.5 text-sm leading-relaxed text-slate-300">
                {cs.problem}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#11131c] p-6 sm:p-8 shadow-xl flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-white tracking-wide">
                  The Impact I Created
                </h3>
                <p className="mt-3.5 text-sm leading-relaxed text-slate-300">
                  {cs.impact}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-sky-400 font-mono font-semibold text-xs uppercase tracking-wider">
                  ▲ Product Experience Optimization
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#11131c] p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white mb-4 tracking-wide">
              What I Worked On
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-sm text-slate-300">
              {cs.workedOn.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-sky-400 mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {cs.highlights && cs.highlights.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-white mb-5 tracking-wide">
                Product Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {cs.highlights.map((hl, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-white/10 bg-[#11131c] p-5 transition-all duration-300 hover:border-white/20"
                  >
                    <h4 className="text-base font-semibold text-white">{hl.name}</h4>
                    <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">{hl.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="pt-6 border-t border-white/10">
            <span className="text-xs uppercase font-mono font-bold tracking-widest text-slate-400 block mb-4">
              Technologies Used
            </span>
            <div className="flex flex-wrap gap-2.5">
              {cs.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/15 bg-white/[0.05] px-4 py-1.5 text-xs font-medium text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-white/15 bg-[#11131c] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5">
            <p className="text-sm italic text-slate-300 max-w-2xl">
              &quot;{cs.closing}&quot;
            </p>
            <div className="flex items-center gap-3 shrink-0">
              {project.liveUrl && project.liveUrl !== "#" && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/20 bg-white px-6 py-2.5 text-xs sm:text-sm font-bold text-black transition-all duration-300 hover:bg-slate-200 hover:scale-105 active:scale-95 shadow-md"
                >
                  {project.liveButtonText}
                </a>
              )}
              <button
                onClick={handleClose}
                className="rounded-full border border-white/20 bg-white/[0.08] px-6 py-2.5 text-xs sm:text-sm font-semibold text-white transition-all duration-300 hover:bg-white/20 cursor-pointer active:scale-95"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * "New Work Incoming" Banner — deliberately the loudest thing in the
 * section so it's the first place the eye lands, ahead of shipped work.
 */
function ComingSoonBanner() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-amber-400/25 bg-gradient-to-br from-amber-400/[0.08] via-[#0c0d13]/95 to-[#0c0d13]/95 p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-amber-400/20 blur-[90px]"
      />
      <div className="relative flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-4">
          <span className="relative mt-1 flex h-2.5 w-2.5 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-amber-400" />
          </span>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-amber-300">
              New work in progress
            </span>
            <h3 className="mt-3 text-lg sm:text-xl font-bold text-white">
              Freshly completed projects are on their way to this section.
            </h3>
            <p className="mt-1.5 text-sm text-ink-soft/90 max-w-2xl">
              This portfolio is being actively updated — recently finished builds are being
              polished into case studies and will be added here soon. Check back shortly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Shimmer Skeleton Loader for Project Cards
 */
function ProjectCardSkeleton() {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#0c0d13]/90 p-6 sm:p-8 lg:p-10 backdrop-blur-xl shadow-2xl relative overflow-hidden shimmer-card">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        <div className="lg:col-span-6 h-64 sm:h-80 w-full rounded-2xl border border-white/10 bg-white/[0.04] animate-pulse" />
        <div className="lg:col-span-6 space-y-4">
          <div className="h-4 w-36 rounded bg-white/[0.08] animate-pulse" />
          <div className="h-8 w-2/3 rounded-xl bg-white/[0.1] animate-pulse" />
          <div className="flex gap-2">
            <div className="h-6 w-24 rounded-full bg-emerald-500/20 animate-pulse" />
            <div className="h-6 w-20 rounded-full bg-sky-500/20 animate-pulse" />
          </div>
          <div className="h-4 w-full rounded bg-white/[0.05] animate-pulse" />
          <div className="h-4 w-4/5 rounded bg-white/[0.05] animate-pulse" />
          <div className="flex gap-4 pt-4">
            <div className="h-11 w-36 rounded-2xl bg-white/[0.1] animate-pulse" />
            <div className="h-11 w-36 rounded-2xl bg-white/[0.06] animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Clean Project Card Component with Metallic Shimmer Effect
 */
function ProjectCard({ project, onOpenCaseStudy }) {
  return (
    <article className="group relative rounded-3xl border border-white/10 bg-[#0c0d13]/95 p-6 sm:p-8 lg:p-10 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:shadow-[0_25px_65px_rgba(139,147,255,0.15)] shimmer-card">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        <div className="lg:col-span-6 relative overflow-hidden rounded-2xl border border-white/15 bg-black/40 shadow-2xl group-hover:border-white/30 transition-all duration-500">
          <div className="aspect-[16/10] overflow-hidden relative">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d13]/80 via-transparent to-transparent opacity-60" />
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col justify-between h-full">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent-soft">
              {project.meta}
            </span>

            <h3 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-accent-soft transition-colors duration-300">
              {project.title}
            </h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-sky-500/30 bg-sky-500/10 px-3.5 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-sky-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-ink-soft/90">
              {project.description}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              onClick={() => onOpenCaseStudy(project)}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/[0.06] px-6 py-3 text-xs sm:text-sm font-medium tracking-wide text-white backdrop-blur-md shadow-lg transition-all duration-300 hover:bg-white/[0.12] hover:border-white/50 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:-translate-y-0.5 active:scale-95 cursor-pointer"
            >
              View case study
              <span className="text-xs">↗</span>
            </button>

            {project.liveUrl && project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-accent/40 bg-accent/10 px-6 py-3 text-xs sm:text-sm font-medium tracking-wide text-accent-soft backdrop-blur-md shadow-lg transition-all duration-300 hover:bg-accent/25 hover:border-accent/70 hover:text-white hover:shadow-[0_0_30px_rgba(139,147,255,0.35)] hover:-translate-y-0.5 active:scale-95"
              >
                {project.liveButtonText}
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All work");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [isTabChanging, setIsTabChanging] = useState(false);
  const sectionRef = useRef(null);

  const totalCount = PROJECTS_DATA.length;
  const webPlatformsCount = PROJECTS_DATA.filter((p) => p.category === "Web platforms").length;
  const mobileAppsCount = PROJECTS_DATA.filter((p) => p.category === "Mobile apps").length;
  const desktopCount = PROJECTS_DATA.filter((p) => p.category === "Desktop").length;

  const categories = [
    { label: "All work", count: totalCount },
    { label: "Web platforms", count: webPlatformsCount },
    { label: "Mobile apps", count: mobileAppsCount },
    { label: "Desktop", count: desktopCount },
  ];

  const filteredProjects =
    activeCategory === "All work"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProjects = filteredProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleCategoryChange = (catLabel) => {
    if (catLabel === activeCategory) return;
    setIsTabChanging(true);
    setTimeout(() => {
      setActiveCategory(catLabel);
      setCurrentPage(1);
      setIsTabChanging(false);
    }, 220);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative bg-[#08090c] py-20 px-4 sm:px-6 font-sans overflow-hidden min-h-screen"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[450px] w-[min(90vw,700px)] -translate-x-1/2 rounded-full bg-accent/[0.08] blur-[140px]"
      />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-accent-soft">
            <span className="h-px w-6 bg-accent-soft/60" />
            Selected Work
            <span className="h-px w-6 bg-accent-soft/60" />
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Shipped Products &amp; Case Studies.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-ink-soft max-w-xl mx-auto">
            Explore recent web platforms, mobile applications, and software engineering projects.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-mono tracking-wider uppercase text-white/70">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white text-base sm:text-lg">{String(totalCount).padStart(2, "0")}</span>
            <span className="text-ink-muted">TOTAL PROJECTS</span>
          </div>
          <span className="h-4 w-px bg-white/20 hidden sm:block" />
          <div className="flex items-center gap-2">
            <span className="font-bold text-white text-base sm:text-lg">{String(webPlatformsCount).padStart(2, "0")}</span>
            <span className="text-ink-muted">WEB PLATFORMS</span>
          </div>
          <span className="h-4 w-px bg-white/20 hidden sm:block" />
          <div className="flex items-center gap-2">
            <span className="font-bold text-white text-base sm:text-lg">{String(mobileAppsCount).padStart(2, "0")}</span>
            <span className="text-ink-muted">MOBILE APPS</span>
          </div>
          <span className="h-4 w-px bg-white/20 hidden sm:block" />
          <div className="flex items-center gap-2">
            <span className="font-bold text-white text-base sm:text-lg">{String(desktopCount).padStart(2, "0")}</span>
            <span className="text-ink-muted">DESKTOP</span>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-white/10 bg-[#0d0e14]/90 p-1.5 backdrop-blur-xl shadow-xl">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.label;
              return (
                <button
                  key={cat.label}
                  onClick={() => handleCategoryChange(cat.label)}
                  className={`flex items-center gap-2 rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer active:scale-95 ${
                    isActive
                      ? "bg-white text-black font-bold shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-105"
                      : "text-ink-soft hover:text-white hover:bg-white/[0.06]"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[0.7rem] font-mono rounded-full px-1.5 py-0.5 ${
                      isActive ? "bg-black/15 text-black font-bold" : "text-ink-muted"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Cards List with Shimmer Skeleton Loading State */}
        <div className="mt-12 space-y-10 sm:space-y-12">
          <ComingSoonBanner />
          {isTabChanging ? (
            <>
              <ProjectCardSkeleton />
              <ProjectCardSkeleton />
            </>
          ) : (
            paginatedProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenCaseStudy={setSelectedCaseStudy}
              />
            ))
          )}
        </div>

        {totalPages > 1 && (
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-8">
            <p className="text-xs sm:text-sm text-ink-muted">
              Showing <span className="font-semibold text-white">{startIndex + 1}</span> to{" "}
              <span className="font-semibold text-white">
                {Math.min(startIndex + ITEMS_PER_PAGE, filteredProjects.length)}
              </span>{" "}
              of <span className="font-semibold text-white">{filteredProjects.length}</span> projects
            </p>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="rounded-xl border border-white/15 bg-white/[0.05] px-4 py-2 text-xs font-semibold text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:not-disabled:bg-white/10 hover:not-disabled:border-white/30 cursor-pointer active:scale-95"
              >
                ← Previous
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`h-9 w-9 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer active:scale-95 ${
                    currentPage === pageNum
                      ? "bg-accent text-white shadow-[0_0_15px_rgba(139,147,255,0.5)] scale-105"
                      : "border border-white/10 bg-white/[0.03] text-ink-soft hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {pageNum}
                </button>
              ))}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="rounded-xl border border-white/15 bg-white/[0.05] px-4 py-2 text-xs font-semibold text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:not-disabled:bg-white/10 hover:not-disabled:border-white/30 cursor-pointer active:scale-95"
              >
                Next →
              </button>
            </div>
          </div>
        )}
      </div>

      {selectedCaseStudy && (
        <CaseStudyModal
          project={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
        />
      )}
    </section>
  );
}

export default Projects;
