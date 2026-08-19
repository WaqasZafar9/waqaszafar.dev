import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import resume from "../assets/Resume.pdf";

const CALENDLY_URL = "https://calendly.com/mwaqaszafar76/30min";

// Height of the floating pill plus its top gap, so anchored scrolling
// lands the section heading below the navbar rather than behind it.
const SCROLL_OFFSET = 104;

const NAV_LINKS = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Work", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Contact", id: "contact" },
];

const FOCUS_RING =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neonPink/70 focus-visible:ring-offset-2 focus-visible:ring-offset-night";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const isHome = location.pathname === "/";

  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Highlight the section currently in view.
  useEffect(() => {
    if (!isHome) return undefined;

    const observed = new Set();

    const spy = new IntersectionObserver(
      (entries) => {
        const inView = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (inView) setActiveSection(inView.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    const observeSections = () => {
      NAV_LINKS.forEach(({ id }) => {
        if (observed.has(id)) return;
        const element = document.getElementById(id);
        if (element) {
          spy.observe(element);
          observed.add(id);
        }
      });
    };

    observeSections();

    // Sections below the fold are lazy loaded, so pick them up as they mount.
    const domWatcher = new MutationObserver(observeSections);
    domWatcher.observe(document.body, { childList: true, subtree: true });

    return () => {
      spy.disconnect();
      domWatcher.disconnect();
    };
  }, [isHome]);

  // Lock background scrolling and allow Escape to dismiss the mobile menu.
  useEffect(() => {
    if (!isMobileMenuOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeMobileMenu();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileMenuOpen, closeMobileMenu]);

  const handleNavClick = (event, sectionId) => {
    closeMobileMenu();

    // Let the browser handle modified clicks so links stay openable in new tabs.
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) {
      return;
    }

    if (!isHome) return;

    const element = document.getElementById(sectionId);
    if (!element) return;

    event.preventDefault();
    setActiveSection(sectionId);
    window.scrollTo({
      top: element.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET,
      behavior: "smooth",
    });
  };

  const renderNavLink = (link, variant) => {
    const isActive = isHome && activeSection === link.id;
    const isDesktop = variant === "desktop";

    return (
      <a
        key={link.id}
        href={`${isHome ? "" : "/"}#${link.id}`}
        onClick={(event) => handleNavClick(event, link.id)}
        aria-current={isActive ? "true" : undefined}
        className={`relative rounded-full font-medium transition-colors duration-200 ${FOCUS_RING} ${
          isDesktop
            ? `px-3.5 py-2 text-[0.9375rem] ${
                isActive
                  ? "bg-white/[0.07] text-white"
                  : "text-white/55 hover:bg-white/[0.05] hover:text-white"
              }`
            : `px-4 py-3 text-base ${
                isActive
                  ? "bg-white/[0.07] text-white"
                  : "text-white/60 hover:bg-white/[0.04] hover:text-white"
              }`
        }`}
      >
        {link.name}
        {isDesktop && isActive && (
          <span
            aria-hidden="true"
            className="absolute inset-x-0 -bottom-0.5 mx-auto h-[3px] w-[3px] rounded-full bg-neonPink shadow-[0_0_8px_rgba(139,147,255,0.85)]"
          />
        )}
      </a>
    );
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 font-sans">
      <div
        className={`px-4 transition-all duration-300 sm:px-6 ${
          isScrolled ? "pt-2 sm:pt-3" : "pt-4 sm:pt-6"
        }`}
      >
        <div
          className={`mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-full border backdrop-blur-xl transition-all duration-300 ${
            isScrolled
              ? "border-white/[0.12] bg-night/70 py-2 pl-4 pr-2 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.9)] sm:pl-5 sm:pr-2.5"
              : "border-white/[0.08] bg-white/[0.03] py-2.5 pl-4 pr-2.5 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.7)] sm:pl-6 sm:pr-3"
          }`}
        >
          {/* Brand */}
          <a
            href={isHome ? "#home" : "/#home"}
            onClick={(event) => handleNavClick(event, "home")}
            aria-label="Waqas Zafar — back to top"
            className={`group flex shrink-0 items-center gap-2.5 rounded-full py-1 pr-2 ${FOCUS_RING}`}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-[0.8125rem] font-semibold tracking-tight text-white transition-colors duration-200 group-hover:border-white/20">
              W
              <span className="bg-linear-to-r from-neonPink to-blue-400 bg-clip-text text-transparent">
                Z
              </span>
            </span>
            <span className="hidden text-sm font-medium tracking-tight text-white/85 transition-colors duration-200 group-hover:text-white lg:block">
              Waqas Zafar
            </span>
          </a>

          {/* Desktop navigation */}
          <nav
            aria-label="Primary"
            className="hidden items-center gap-0.5 md:flex lg:gap-1"
          >
            {NAV_LINKS.map((link) => renderNavLink(link, "desktop"))}
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full px-3.5 py-2 text-[0.9375rem] font-medium text-white/55 transition-colors duration-200 hover:bg-white/[0.05] hover:text-white ${FOCUS_RING}`}
            >
              Resume
            </a>
          </nav>

          {/* Desktop call to action */}
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden shrink-0 rounded-full bg-white px-5 py-2.5 text-sm font-semibold tracking-tight text-black transition-[transform,box-shadow,background-color] duration-300 hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-[0_8px_24px_-8px_rgba(255,255,255,0.45)] motion-reduce:transform-none md:block ${FOCUS_RING}`}
          >
            Hire Me
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-xl text-white transition-colors duration-200 hover:bg-white/[0.1] md:hidden ${FOCUS_RING}`}
          >
            {isMobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile navigation panel */}
        <div
          id="mobile-navigation"
          hidden={!isMobileMenuOpen}
          className={`mx-auto mt-2 max-w-5xl overflow-hidden rounded-3xl border border-white/[0.1] bg-night/85 p-2 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.95)] backdrop-blur-xl transition-all duration-300 ease-out md:hidden ${
            isMobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-2 opacity-0"
          } motion-reduce:transition-none motion-reduce:transform-none`}
        >
          <nav aria-label="Mobile" className="flex flex-col">
            {NAV_LINKS.map((link) => renderNavLink(link, "mobile"))}
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className={`rounded-full px-4 py-3 text-base font-medium text-white/60 transition-colors duration-200 hover:bg-white/[0.04] hover:text-white ${FOCUS_RING}`}
            >
              Resume
            </a>
          </nav>

          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobileMenu}
            className={`mt-2 block rounded-full bg-white px-5 py-3 text-center text-sm font-semibold tracking-tight text-black transition-colors duration-200 hover:bg-white/90 ${FOCUS_RING}`}
          >
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
