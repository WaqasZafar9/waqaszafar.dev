const socialSwirlImg = "/assets/socialSwirlImg.webp";
const unitystackImg = "/assets/unitystack.webp";
const pettifyImg = "/assets/nursery_teacher_device_2.webp";
const lisenceImg = "/assets/lisence.webp";
const zanderiofullpage = "/assets/zanderio-scroll.webp";
const lynxsystemsImg = "/assets/lynx-scroll.webp";
const lahoriyaScrollImg = "/assets/lahoriya-scroll.webp";
const salonScrollImg = "/assets/salon-scroll.webp";

// New project imagery
const logitechHome = "/assets/logitech-home.png";
const logitechGallery = "/assets/logitech-gallary.png";
const cooksbook1 = "/assets/cooksbook-1.png";
const cooksbook2 = "/assets/cooksbook-2.png";
const guestPassWeb = "/assets/gp-website.png";
const gpAppHero = "/assets/gp-app-hero.png";
const gpAppMap = "/assets/gp-app-map.png";
const gpAppForum = "/assets/gp-app-forum.png";
const maxRetireHero = "/assets/max-ret-hero.png";
const maxRetireArticleHome = "/assets/max-re-article-home.png";
const maxRetireArticle = "/assets/max-r3-article.png";
const maxRetireCalculator = "/assets/max-ret-calculator.png";
const rtiHome = "/assets/RTI-home.png";
const rti2 = "/assets/rti-2.png";


const PROJECTS_DATA = [
  {
    id: "logitech-energy",
    title: "Logitech Energy",
    meta: "LOGITECH ENERGY • WEB PLATFORM",
    category: "Web platforms",
    description:
      "Marketing and product site for a solar and renewable-energy company, presenting clean-energy solutions with motion-rich storytelling and a project gallery.",
    tags: ["NEXT.JS", "TYPESCRIPT", "FRAMER MOTION"],
    image: logitechHome,
    gallery: [
      { src: logitechHome, caption: "Home — clean-energy positioning and primary calls to action." },
      { src: logitechGallery, caption: "Project gallery — completed solar installations and case work." },
    ],
    liveUrl: "https://logitechenergy.com/",
    liveButtonText: "Visit Logitech Energy ↗",
    githubUrl: null,
    caseStudy: {
      title: "Logitech Energy",
      tagline: "A modern web presence for a solar and renewable-energy company.",
      role: "Frontend Development",
      type: "Web platform",
      liveLabel: "logitechenergy.com",
      glance:
        "A marketing and product website for a solar and renewable-energy business, built to explain clean-energy solutions clearly, showcase completed installations, and turn visitors into consultation leads — with smooth motion and a fast, responsive layout.",
      brief:
        "Renewable-energy buyers need to understand what is being offered, trust that the work is real, and know how to take the next step — all before they commit to a consultation. The site had to make a technical, capital-heavy purchase feel approachable, credible, and easy to act on.",
      approach: [
        {
          title: "Storytelling-first layout",
          desc: "The homepage is structured as a narrative — problem, solution, proof, and call to action — so a first-time visitor understands the offering without wading through technical jargon.",
        },
        {
          title: "Motion that supports the message",
          desc: "Framer Motion is used for scroll-reveal and micro-interactions that guide attention rather than decorate, keeping the experience premium while staying performant on mobile.",
        },
        {
          title: "Proof through a project gallery",
          desc: "A dedicated gallery of completed solar installations gives the credibility a high-value purchase needs, backing the marketing claims with real work.",
        },
      ],
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      shipped: [
        "Marketing homepage with clear clean-energy positioning",
        "Project gallery showcasing completed installations",
        "Motion-rich, scroll-driven storytelling sections",
        "Consultation and lead-capture calls to action",
        "Fully responsive layout from phones to desktops",
        "Reusable component architecture for future pages",
      ],
      hardParts: [
        {
          challenge:
            "Communicating a technical, high-cost product to a non-technical audience without overwhelming them with specifications.",
          solution:
            "Content was structured around benefits and outcomes first, with technical detail layered underneath, so the page reads as a story rather than a spec sheet.",
        },
        {
          challenge:
            "Rich motion and image-heavy galleries can easily hurt load performance on mobile hardware.",
          solution:
            "Motion is scoped to lightweight transforms and images are optimized and lazily loaded, keeping the experience smooth without sacrificing the visual polish.",
        },
      ],
      outcome: [
        "A live, professional web presence for the Logitech Energy brand",
        "A credible showcase of real installations that supports the sales conversation",
        "A responsive, motion-rich site that positions clean energy as approachable",
      ],
      impact:
        "Delivered a polished, credible web presence that presents renewable-energy solutions clearly and turns interest into consultation leads.",
      closing:
        "Making a technical, capital-heavy purchase feel approachable — from first scroll to booked consultation.",
    },
  },
  {
    id: "cooksbook",
    title: "Cooksbook: Culinary Sales Platform",
    meta: "COOKSBOOK • WEB PLATFORM",
    category: "Web platforms",
    description:
      "A curated culinary marketplace where chefs sell recipes, live classes and subscriptions — recipe discovery, one-to-one bookings, and subscription management on a MERN backend.",
    tags: ["REACT.JS", "REDUX", "MERN STACK"],
    image: cooksbook1,
    gallery: [
      { src: cooksbook1, caption: "Landing page — the marketplace pitch, chef highlights and primary conversion path." },
      { src: cooksbook2, caption: "Personalized cooking experience — taste, diet and goal preferences." },
    ],
    liveUrl: "https://cooksbook.com/",
    liveButtonText: "Visit Cooksbook ↗",
    githubUrl: null,
    caseStudy: {
      title: "Cooksbook: Culinary Sales Platform",
      tagline: "A curated marketplace where chefs sell recipes, live classes and subscriptions.",
      role: "Design-to-frontend ownership, with MERN integration",
      type: "Web platform",
      liveLabel: "www.cooksbook.com",
      glance:
        "A premium culinary marketplace connecting users with curated chef content and live sessions. The platform enables seamless recipe discovery, one-on-one class bookings, and subscription management, all built with a high-performance MERN stack backend.",
      brief:
        "Independent chefs were selling recipes, classes and memberships across social posts, DMs and payment links — there was no single place where a home cook could find a chef, trust them, and buy from them. The product needed to be a storefront, a booking system and a subscription business at once, without feeling like three separate apps stitched together.",
      approach: [
        {
          title: "A design system before a single screen",
          desc: "The Figma work came first: type scale, spacing rhythm, and a component inventory covering cards, filters, media blocks and commerce states. Those decisions were translated into Tailwind tokens and a shared React component layer, so every later page was assembled from parts that already agreed with each other rather than styled from scratch.",
        },
        {
          title: "Discovery built for a growing catalogue",
          desc: "Recipe browsing is the heart of the product, so it was designed to stay fast as the catalogue grows — filterable, paginated views backed by normalized Redux state, with the list, the filters and the URL all reading from one source of truth instead of each keeping their own copy.",
        },
        {
          title: "Commerce flows treated as first-class UI",
          desc: "Bookings and subscriptions have far more states than a happy path: pending, confirmed, expired, payment-failed, already-owned. Each one got real interface design rather than a generic error, which is what keeps a marketplace feeling trustworthy at the exact moment money changes hands.",
        },
      ],
      stack: ["React.js", "Tailwind CSS", "Redux", "Figma", "UI/UX Architecture", "MERN Stack"],
      technologies: ["React.js", "Tailwind CSS", "Redux", "Figma", "MERN Stack", "REST APIs"],
      shipped: [
        "Curated chef storefronts with recipe, class and subscription offerings",
        "Filterable recipe discovery across the full chef catalogue",
        "One-to-one live class booking with scheduling states",
        "Subscription management for recurring premium content",
        "Responsive layout tuned from small phones to wide desktops",
        "Design-system-driven component library shared across every page",
      ],
      hardParts: [
        {
          challenge:
            "The pages are image-heavy by nature — food photography is the product — which puts continuous pressure on load time and layout stability.",
          solution:
            "Media was moved to responsive, lazily loaded images with reserved aspect ratios so nothing reflows as pictures arrive, and heavy list rendering was kept off the main path with memoized selectors.",
        },
        {
          challenge:
            "Purchase state had to stay coherent across discovery, booking and subscription screens, where the same chef or recipe can appear in several places at once.",
          solution:
            "A normalized Redux store keyed by entity id, with derived selectors for each view, so an update in one place is reflected everywhere without duplicated fetches or contradictory UI.",
        },
      ],
      outcome: [
        "Shipped and live as a public marketplace at cooksbook.com",
        "A reusable component and token layer that made later pages materially quicker to build",
        "One coherent flow from discovery through booking to subscription, instead of scattered sales channels",
      ],
      impact:
        "Turned scattered social selling into one coherent marketplace — discovery, booking and subscriptions in a single trustworthy storefront.",
      closing:
        "A storefront, a booking system and a subscription business at once — without feeling like three separate apps.",
    },
  },
  {
    id: "guest-pass",
    title: "Guest Pass",
    meta: "GUEST PASS • WEB PLATFORM",
    category: "Web platforms",
    description:
      "Location-aware gym discovery with live maps and turn-by-turn directions — a React and Bootstrap web app that helps drop-in visitors find and reach a nearby gym today.",
    tags: ["REACT.JS", "GOOGLE MAPS API", "GEOLOCATION"],
    image: guestPassWeb,
    gallery: [
      { src: guestPassWeb, caption: "Landing page — gym discovery as the primary action." },
    ],
    liveUrl: "https://yourguestpass.com/",
    liveButtonText: "Visit Guest Pass ↗",
    githubUrl: null,
    caseStudy: {
      title: "Guest Pass",
      tagline: "Location-aware gym discovery with live maps and turn-by-turn directions.",
      role: "Frontend development and maps/geolocation integration",
      type: "Web platform",
      liveLabel: "yourguestpass.com",
      glance:
        "A location-based web application built with React.js and Bootstrap that allows users to search gyms, view nearby locations on a map, and get directions from their current location using integrated APIs.",
      brief:
        "Someone travelling or between memberships wants a gym they can walk into today — but gym websites are built for long-term members, not drop-in visitors. Guest Pass had to answer three questions in one screen: what is near me, will they let me in, and how do I get there.",
      approach: [
        {
          title: "Location as the first interaction",
          desc: "The map and the result list are two views of the same query, kept in sync in both directions: panning the map updates the list, selecting a result moves the map. Location permission is requested in context — after the user has expressed intent to search nearby — with a manual search fallback that keeps the product fully usable when permission is denied.",
        },
        {
          title: "Two audiences, one product",
          desc: "Members and gym owners want opposite things from the same platform. Each got its own entry path and messaging while sharing the underlying components, so the supply side of the marketplace is a first-class surface rather than a footer link.",
        },
        {
          title: "Directions as an endpoint, not a feature list",
          desc: "Every result leads somewhere concrete: distance from the user's current position and turn-by-turn directions. The interface is built around completing that journey rather than around browsing for its own sake.",
        },
      ],
      stack: ["React.js", "Bootstrap", "Google Maps API", "Geolocation API", "REST API"],
      technologies: ["React.js", "Bootstrap", "Google Maps API", "Geolocation API", "REST API"],
      shipped: [
        "Gym search with live map and list views kept in sync",
        "Nearby results derived from the browser Geolocation API",
        "Turn-by-turn directions from the user's current position",
        "Dedicated gym-owner onboarding path",
        "REST-driven gym profiles with details and availability",
        "Responsive layout tuned for on-the-move phone use",
      ],
      hardParts: [
        {
          challenge:
            "Geolocation is permission-gated, frequently denied, and can be slow or inaccurate — building the core flow on the assumption that it works is a guaranteed dead end for a share of users.",
          solution:
            "Location is treated as an enhancement, not a requirement: the permission prompt is asked in context, and a manual location search covers denial, timeout and low-accuracy results so the product never reaches a state where nothing can be done.",
        },
        {
          challenge:
            "Map rendering with many markers competes directly with scroll and interaction performance on mobile hardware.",
          solution:
            "Marker rendering is bounded to the visible viewport with debounced map events, so panning stays responsive instead of re-rendering the full result set on every frame.",
        },
      ],
      outcome: [
        "Live at yourguestpass.com serving both members and gym owners",
        "A discovery flow that works end to end — search, locate, route — on a phone in the street",
        "Graceful behaviour when location access is denied, rather than a broken core feature",
      ],
      impact:
        "A discovery flow that works end to end — search, locate, route — on a phone in the street, serving both members and gym owners.",
      closing:
        "What is near me, will they let me in, and how do I get there — answered in one screen.",
    },
  },
  {
    id: "guest-pass-app",
    title: "Guest Pass Mobile App",
    meta: "GUEST PASS • MOBILE APP",
    category: "Mobile apps",
    description:
      "React Native companion app for Guest Pass — QR check-ins and conversion analytics that digitise gym guest entry for members and gym owners on the go.",
    tags: ["REACT NATIVE", "MOBILE APP", "QR CHECK-IN"],
    image: gpAppHero,
    gallery: [
      { src: gpAppHero, caption: "Discover, book, and rate gyms on the go — the Guest Pass app." },
      { src: gpAppMap, caption: "List and live map views for finding nearby gyms." },
      { src: gpAppForum, caption: "Community forum and detailed gym profiles." },
    ],
    liveUrl: "https://yourguestpass.com/",
    liveButtonText: "Visit Guest Pass ↗",
    githubUrl: null,
    caseStudy: {
      title: "Guest Pass Mobile App",
      tagline: "QR check-ins and conversion analytics that digitise gym guest entry.",
      role: "React Native mobile development",
      type: "Mobile app",
      liveLabel: "yourguestpass.com",
      glance:
        "The React Native companion to the Guest Pass platform. The app takes gym discovery and guest passes into the pocket, replacing paper day-passes and front-desk friction with QR-based check-ins and a native, on-the-move experience for members and gym owners.",
      brief:
        "Guest entry at gyms is still largely manual — paper passes, front-desk sign-ins, and no data on whether a guest ever converts to a member. The app had to make walking into a gym as a guest instant, while giving owners a digital record of who came in and what happened next.",
      approach: [
        {
          title: "Native-first, mobile-first flows",
          desc: "The app is designed around the moment a user is standing outside a gym — discovery, pass, and check-in are reachable in a few taps, with layouts tuned for one-handed use on a phone.",
        },
        {
          title: "QR check-in as the core loop",
          desc: "A scannable QR pass replaces paper and front-desk friction, giving members instant entry and gym owners a real-time, digital record of every guest visit.",
        },
        {
          title: "Shared platform, native surface",
          desc: "The app consumes the same REST backend as the Guest Pass web product, so members, gyms and passes stay consistent across web and mobile while the app delivers a fully native experience.",
        },
      ],
      stack: ["React Native", "JavaScript", "REST API", "QR / Camera", "Geolocation"],
      technologies: ["React Native", "JavaScript", "REST APIs", "Geolocation"],
      shipped: [
        "Native gym discovery and guest-pass browsing on mobile",
        "QR-based guest check-in flow",
        "Conversion-oriented analytics around guest entry",
        "Shared backend with the Guest Pass web platform",
        "Member and gym-owner journeys in a single app",
      ],
      hardParts: [
        {
          challenge:
            "Camera and QR scanning behave differently across devices and OS permission models, and a check-in that fails at the door defeats the whole product.",
          solution:
            "The scan flow handles permission states and fallbacks explicitly, so entry stays reliable even when a camera permission is denied or a scan is slow.",
        },
      ],
      outcome: [
        "A native mobile experience that puts gym discovery and passes in the pocket",
        "Digitised, QR-based guest entry in place of paper day-passes",
        "A consistent member and owner experience shared with the web platform",
      ],
      impact:
        "Digitised gym guest entry with QR check-ins, replacing paper passes with a native, data-aware mobile experience.",
      closing:
        "Walking into a gym as a guest, made instant — from discovery to a scannable pass.",
    },
  },
  {
    id: "max-retirement",
    title: "Max Retirement",
    meta: "MAX RETIREMENT • WEB PLATFORM",
    category: "Web platforms",
    description:
      "Content-driven retirement-planning platform with an interactive calculator and an SEO-focused article library, built for speed and clarity on Next.js.",
    tags: ["NEXT.JS", "TYPESCRIPT", "CALCULATOR"],
    image: maxRetireHero,
    gallery: [
      { src: maxRetireHero, caption: "Home — retirement planning positioning and primary actions." },
      { src: maxRetireCalculator, caption: "Retirement calculator — interactive planning tool." },
      { src: maxRetireArticleHome, caption: "Article library — SEO-focused education hub." },
      { src: maxRetireArticle, caption: "Article detail — long-form, markdown-driven content." },
    ],
    liveUrl: "https://max-retirement-site.vercel.app/",
    liveButtonText: "Visit Max Retirement ↗",
    githubUrl: null,
    caseStudy: {
      title: "Max Retirement",
      tagline: "A content-driven retirement-planning platform with an interactive calculator.",
      role: "Frontend Development",
      type: "Web platform",
      liveLabel: "max-retirement-site.vercel.app",
      glance:
        "A retirement-planning website that pairs an interactive calculator with a large, SEO-focused article library. Built on Next.js with markdown-driven content, it is designed to educate visitors, rank for retirement topics, and guide them toward planning their future.",
      brief:
        "Retirement is intimidating and information-heavy. People arrive with questions, not decisions, so the platform had to earn trust through clear education, let visitors see their own numbers with a calculator, and stay fast and discoverable across a growing library of articles.",
      approach: [
        {
          title: "Education as the front door",
          desc: "A markdown-driven article system lets a large library of retirement content be authored and shipped quickly, with clean typography and structure that keeps long-form reading comfortable.",
        },
        {
          title: "An interactive calculator that makes it personal",
          desc: "Rather than generic advice, the calculator turns a visitor's own inputs into projected outcomes, converting a passive reader into an engaged planner in a single interaction.",
        },
        {
          title: "Built for search and speed",
          desc: "Next.js rendering and a content-first structure keep pages fast and crawlable, so the article library can rank and scale without each new piece slowing the site down.",
        },
      ],
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "react-markdown", "Framer Motion"],
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "react-markdown", "Framer Motion"],
      shipped: [
        "Interactive retirement calculator with projected outcomes",
        "Markdown-driven article library for SEO content",
        "Long-form article templates with clean reading typography",
        "Content-first, crawlable page structure on Next.js",
        "Responsive layout across phones, tablets and desktops",
      ],
      hardParts: [
        {
          challenge:
            "A large, growing article library can become slow and hard to maintain if every page is hand-built.",
          solution:
            "Content is authored in markdown and rendered through shared templates, so new articles ship quickly and consistently while staying fast and crawlable.",
        },
        {
          challenge:
            "A calculator needs to feel instant and trustworthy without a heavy client bundle.",
          solution:
            "The calculation logic is kept lightweight and client-side, giving immediate feedback on input while the content-heavy pages stay optimized for load and SEO.",
        },
      ],
      outcome: [
        "A live retirement-planning platform pairing education with an interactive tool",
        "A scalable, markdown-driven content system for SEO growth",
        "An engaging calculator that turns readers into active planners",
      ],
      impact:
        "Paired a scalable SEO content engine with an interactive calculator, turning retirement readers into engaged planners.",
      closing:
        "Making an intimidating, information-heavy topic feel clear, personal, and worth acting on.",
    },
  },
  {
    id: "rivendell-tech",
    title: "Rivendell Tech Institute",
    meta: "RIVENDELL TECH • WEB PLATFORM",
    category: "Web platforms",
    description:
      "SEO-first education platform for a local tech institute — course discovery, program pages and enrolment, built for speed and scale on Next.js and Tailwind.",
    tags: ["NEXT.JS", "TAILWIND CSS", "SEO"],
    image: rtiHome,
    gallery: [
      { src: rtiHome, caption: "Home — institute positioning and program discovery." },
      { src: rti2, caption: "Programs — course listings and enrolment paths." },
    ],
    liveUrl: "https://rivendelltech.co/",
    liveButtonText: "Visit Rivendell Tech ↗",
    githubUrl: null,
    caseStudy: {
      title: "Rivendell Tech Institute",
      tagline: "SEO-first education platform built for speed and scale on Next.js.",
      role: "Frontend Development",
      type: "Web platform",
      liveLabel: "rivendelltech.co",
      glance:
        "A marketing and course-discovery website for a local tech institute, built with Next.js and Tailwind CSS. It presents programs clearly, ranks for the courses prospective students are searching for, and guides visitors from discovery to enrolment.",
      brief:
        "A local institute competes for students who are searching online for specific courses. The site needed to surface programs clearly, rank well for course-related searches, and convert interest into enrolment enquiries — all while loading fast for visitors on modest connections.",
      approach: [
        {
          title: "SEO-first structure",
          desc: "Program and course pages are structured for search from the ground up — clean semantics, fast rendering and crawlable content — so the institute can be found by students looking for exactly what it teaches.",
        },
        {
          title: "Clear path from course to enrolment",
          desc: "Every program page leads toward a concrete next step: enquire or enrol. The layout is built around moving a prospective student forward rather than just describing courses.",
        },
        {
          title: "Fast, responsive delivery",
          desc: "Next.js and Tailwind keep the site lightweight and responsive across devices, so pages load quickly for visitors on any connection.",
        },
      ],
      stack: ["Next.js", "Tailwind CSS", "TypeScript", "SEO"],
      technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
      shipped: [
        "SEO-optimized program and course pages",
        "Course discovery and enrolment enquiry flows",
        "Clean, semantic, crawlable page structure",
        "Fast, responsive Next.js delivery",
        "Reusable component library for program pages",
      ],
      hardParts: [
        {
          challenge:
            "A local institute has to rank against larger players for competitive course keywords.",
          solution:
            "The site is built SEO-first — fast rendering, clean semantics and well-structured program pages — so content is easy to crawl and rank for the specific courses students search for.",
        },
      ],
      outcome: [
        "A fast, discoverable web presence for the institute",
        "Program pages that guide visitors from discovery to enrolment",
        "A structure built to rank and scale as courses are added",
      ],
      impact:
        "Gave a local institute an SEO-first web presence that surfaces its courses in search and moves visitors toward enrolment.",
      closing:
        "Helping a local institute be found by the students already searching for what it teaches.",
    },
  },
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

// Featured projects shown first (page one), in this order; the rest keep their order.
const FEATURED_ORDER = ["zanderio", "max-retirement", "lahoriya"];
PROJECTS_DATA.sort((a, b) => {
  const ai = FEATURED_ORDER.indexOf(a.id);
  const bi = FEATURED_ORDER.indexOf(b.id);
  if (ai === -1 && bi === -1) return 0;
  if (ai === -1) return 1;
  if (bi === -1) return -1;
  return ai - bi;
});

export default PROJECTS_DATA;
