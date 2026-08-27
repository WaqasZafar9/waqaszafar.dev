import socialSwirlImg from "../assets/socialSwirlImg.webp";
import unitystackImg from "../assets/unitystack.webp";
import pettifyImg from "../assets/nursery_teacher_device_2.webp";
import galaxyCricketImg from "../assets/cricket.webp";
import lisenceImg from "../assets/lisence.webp";
import uamsImg from "../assets/umas.webp";
import crickdatabaseImg from "../assets/database.webp";
import zanderioprojectImg from "../assets/zanderioproject.webp";
import zanderiofullpage from "../assets/zanderio-scroll.webp";
import lynxsystemsImg from "../assets/lynx-scroll.webp";
import lahoriyaScrollImg from "../assets/lahoriya-scroll.webp";
import salonScrollImg from "../assets/salon-scroll.webp";


const PROJECTS_DATA = [
    {
    id: "zanderio",
    title: "Zanderio AI",
    meta: "ZANDERIO • AI PLATFORM",
    category: "Web platforms",
    description:
      "Product site for Zanderio—an AI SaaS platform—showcasing positioning, core capabilities, interactive workflow previews, and lead acquisition funnels.",
    tags: ["PRODUCT DESIGN", "MVP", "AI PLATFORM"],
    image: zanderiofullpage,
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
    image: lahoriyaScrollImg,
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
    id: "lynxsystems",
    title: "Lynx Systems",
    meta: "LYNX SYSTEMS • INFRASTRUCTURE PLATFORM",
    category: "Web platforms",
    description:
      "Enterprise marketing website and web app for Lynx Systems, presenting integrated facility, building, and energy management solutions for critical infrastructure operations.",
    tags: ["NEXT.JS", "TYPESCRIPT", "INFRASTRUCTURE"],
    image: lynxsystemsImg,
    liveUrl: "https://lynxsystems.us/",
    liveButtonText: "Visit Lynx Systems ↗",
    githubUrl: null,
    caseStudy: {
      title: "Lynx Systems",
      tagline: "Modern enterprise infrastructure management for critical facilities and operations.",
      overview:
        "Lynx Systems provides advanced automation and management systems for critical infrastructure — from power plants and hospitals to commercial buildings and government assets. The site and web app needed to present that breadth clearly, for both prospective customers and platform users.",
      product: "Lynx Systems Website + Web App",
      category: "Enterprise SaaS · Infrastructure Management",
      role: "Software Engineer",
      focus: "Web Platform · Dashboard · Infrastructure Management",
      problem:
        "Lynx Systems works with complex facility and infrastructure environments where information can become difficult to understand and manage across different systems. The challenge was to turn that complexity into a clear, modern, and intuitive digital experience for both prospective customers and platform users.",
      workedOn: [
        "Marketing website & web application for Lynx Systems' infrastructure platform",
        "Multi-solution showcase covering five interconnected technology platforms (Facility, Building, Cloud Energy, Work Order, and Global Management Systems)",
        "Industry-specific solution pages for critical infrastructure — power plants, hospitals, wineries, commercial buildings, and government assets",
        "Responsive layouts, lead-capture consultation forms, and consistent component architecture across the site",
      ],
      experience:
        "The main challenge was translating a wide range of technical platforms and industry use cases into one coherent structure — organizing complex offerings into clear categories, industries, and calls to action without overwhelming a first-time visitor.",
      highlights: [
        {
          name: "Integrated Technology Solutions",
          desc: "Five interconnected platforms — Facility, Building, Cloud Energy, Work Order, and Global Management Systems — presented as one modular ecosystem.",
        },
        {
          name: "Specialized Industry Solutions",
          desc: "Dedicated sections for critical infrastructure, including power plants, hospitals, wineries, retention ponds, and government assets.",
        },
        {
          name: "Consultation & Lead Capture",
          desc: "Structured contact flow for scheduling consultations and requesting more information.",
        },
      ],
      impact:
        "Built a cohesive experience across the public-facing website and web application, making complex infrastructure solutions easier to understand while providing a scalable interface for managing operations, systems, and data.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      closing:
        "Lynx Systems needed a digital presence as sophisticated as the infrastructure it manages — from marketing site to web app, presenting complex systems clearly.",
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
    id: "salon",
    title: "Beauty Salon Platform",
    meta: "FRESH ROSE • WEB APPLICATION",
    category: "Web platforms",
    description:
      "Dynamic appointment booking and service showcase web application for luxury salons with inventory management.",
    tags: ["PHP", "BOOKING ENGINE", "WEB APP"],
    image: salonScrollImg,
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

];

export default PROJECTS_DATA;
