import { useCallback, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import resume from "../assets/Resume.pdf";
import portrait from "../assets/my.webp";
import ShinyButton from "./ShinyButton/ShinyButton";

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
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Pill that glides beneath the hovered desktop nav link, tracking its
  // position/width via transform so the motion stays GPU-smooth. While it's
  // showing, it's the only highlight on screen — the active link's own
  // static background steps aside (see hoveredId below) so two links never
  // read as highlighted at once.
  const desktopNavRef = useRef(null);
  const linkRefs = useRef({});
  const [hoverPill, setHoverPill] = useState({ left: 0, width: 0, opacity: 0 });
  const [hoveredId, setHoveredId] = useState(null);

  const moveHoverPill = useCallback((id) => {
    const el = linkRefs.current[id];
    if (!el) return;
    setHoverPill({ left: el.offsetLeft, width: el.offsetWidth, opacity: 1 });
    setHoveredId(id);
  }, []);

  const hideHoverPill = useCallback(() => {
    setHoverPill((prev) => ({ ...prev, opacity: 0 }));
    setHoveredId(null);
  }, []);

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
    // The active link only wears its own static pill while nothing else is
    // hovered/focused — once the sliding hover pill is showing somewhere,
    // it's the sole highlight, so the two never overlap into a double one.
    const showActiveBg = isActive && (hoveredId === null || hoveredId === link.id);

    return (
      <a
        key={link.id}
        ref={
          isDesktop
            ? (el) => {
                linkRefs.current[link.id] = el;
              }
            : undefined
        }
        href={`${isHome ? "" : "/"}#${link.id}`}
        onClick={(event) => handleNavClick(event, link.id)}
        onMouseEnter={isDesktop ? () => moveHoverPill(link.id) : undefined}
        onFocus={isDesktop ? () => moveHoverPill(link.id) : undefined}
        aria-current={isActive ? "true" : undefined}
        className={`relative z-10 rounded-full font-medium transition-colors duration-200 ${FOCUS_RING} ${
          isDesktop
            ? `px-3.5 py-2 text-[0.9375rem] ${
                isActive ? "text-white" : "text-white/55 hover:text-white"
              } ${showActiveBg ? "bg-white/[0.07]" : ""}`
            : `px-4 py-3 text-base ${
                isActive
                  ? "bg-white/[0.07] text-white"
                  : "text-white/60 hover:bg-white/[0.04] hover:text-white active:bg-white/[0.06]"
              }`
        }`}
      >
        {link.name}
        {isDesktop && isActive && (
          <span
            aria-hidden="true"
            className="absolute inset-x-0 -bottom-0.5 mx-auto h-[3px] w-[3px] rounded-full bg-primary shadow-[0_0_8px_rgba(52,168,90,0.85)]"
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
              ? "border-white/[0.12] bg-background/70 py-2 pl-4 pr-2 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.9)] sm:pl-5 sm:pr-2.5"
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
            <span className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-white/[0.06] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-primary/60 group-hover:shadow-[0_0_18px_-2px_rgba(52,168,90,0.6)] motion-reduce:transform-none">
              <img
                src={portrait}
                alt="Waqas Zafar"
                width={36}
                height={36}
                loading="eager"
                className="h-full w-full object-cover"
              />
            </span>
            <span className="hidden text-sm font-medium tracking-tight text-white/85 transition-colors duration-200 group-hover:text-white lg:block">
              Waqas Zafar
            </span>
          </a>

          {/* Desktop navigation */}
          <nav
            ref={desktopNavRef}
            aria-label="Primary"
            onMouseLeave={hideHoverPill}
            onBlur={(event) => {
              // Only clear once focus actually leaves the nav — moving
              // between links inside it re-fires onFocus before this,
              // so it never flickers off between tabs.
              if (!event.currentTarget.contains(event.relatedTarget)) {
                hideHoverPill();
              }
            }}
            className="relative hidden items-center gap-0.5 md:flex lg:gap-1"
          >
            {/* Glides beneath the hovered/focused link — position driven by
                transform so it stays off the layout-thrashing path. */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0.5 left-0 z-0 rounded-full bg-white/[0.06] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] transition-[transform,width,opacity] duration-300 ease-out"
              style={{
                transform: `translateX(${hoverPill.left}px)`,
                width: `${hoverPill.width}px`,
                opacity: hoverPill.opacity,
              }}
            />
            {NAV_LINKS.map((link) => renderNavLink(link, "desktop"))}
          </nav>

          {/* Desktop actions — secondary (Resume) + primary (Hire Me) */}
          <div className="hidden shrink-0 items-center gap-2 md:flex">
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full border border-white/15 bg-white/[0.03] px-4 py-2.5 text-sm font-semibold tracking-tight text-white/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-background hover:shadow-[0_0_24px_-4px_rgba(255,255,255,0.4)] motion-reduce:transform-none ${FOCUS_RING}`}
            >
              Resume
            </a>
            <ShinyButton
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`!px-5 !py-2.5 text-sm ${FOCUS_RING}`}
            >
              Hire Me
            </ShinyButton>
          </div>

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
          className={`mx-auto mt-2 max-w-5xl overflow-hidden rounded-3xl border border-white/[0.1] bg-background/85 p-2 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.95)] backdrop-blur-xl transition-all duration-300 ease-out md:hidden ${
            isMobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-2 opacity-0"
          } motion-reduce:transition-none motion-reduce:transform-none`}
        >
          <nav aria-label="Mobile" className="flex flex-col">
            {NAV_LINKS.map((link) => renderNavLink(link, "mobile"))}
          </nav>

          {/* Actions — secondary (Resume) + primary (Hire Me) */}
          <div className="mt-2 flex flex-col gap-2">
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className={`block rounded-full border border-white/15 bg-white/[0.03] px-5 py-3 text-center text-sm font-semibold tracking-tight text-white/80 backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white hover:text-background active:scale-[0.98] ${FOCUS_RING}`}
            >
              Resume
            </a>
            <ShinyButton
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className={`w-full !py-3 text-sm ${FOCUS_RING}`}
            >
              Hire Me
            </ShinyButton>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
