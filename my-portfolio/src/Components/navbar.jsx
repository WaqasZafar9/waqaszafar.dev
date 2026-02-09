import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import resume from '../assets/Resume.pdf';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    closeMobileMenu();
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    if (sectionId === "cv") {
        window.open(resume, '_blank');
        return;
    }
    
    // If we're not on the home page, navigate to home first
    if (location.pathname !== "/") {
      window.location.href = "/#" + sectionId;
    } else {
      scrollToSection(sectionId);
    }
  };

  const navLinks = [
    { name: "About", id: "about" },
    { name: "CV", id: "experience" },
    { name: "Portfolio", id: "projects" }, // Mapping Portfolio to projects section for now
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <div className="absolute top-0 left-0 w-full z-50 font-sans">
      <nav className="w-full bg-transparent px-6 py-6 relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="text-white font-bold text-2xl tracking-wide">
            WAQAS . <span className="text-transparent bg-clip-text bg-linear-to-r from-neonPink to-blue-400">Z</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Navigation Links */}
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.id === "cv" ? resume : `#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  target={link.id === "cv" ? "_blank" : undefined}
                  rel={link.id === "cv" ? "noopener noreferrer" : undefined}
                  className="text-gray-300 hover:text-neonPink font-medium text-lg transition-colors cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Hire Me Button */}
            <a
              href="https://calendly.com/mwaqaszafar76/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-linear-to-r from-purple-600 to-indigo-600 text-white px-6 py-2.5 rounded-full font-medium text-sm hover:shadow-[0_0_15px_rgba(124,58,237,0.5)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white text-2xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Full Page Overlay */}
      <div
        className={`fixed inset-0 bg-[#030712] z-40 md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full px-6 pt-6 pb-8 overflow-y-auto">
          {/* Header with Logo and Close Button */}
          <div className="flex items-center justify-between mb-8">
            <div className="text-white font-bold text-2xl tracking-wide">WAQAS.Z</div>
            <button
              onClick={closeMobileMenu}
              className="text-white text-2xl focus:outline-none hover:text-gray-300 transition-colors"
              aria-label="Close menu"
            >
              <HiX />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-6 mb-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.id === "cv" ? resume : `#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                target={link.id === "cv" ? "_blank" : undefined}
                rel={link.id === "cv" ? "noopener noreferrer" : undefined}
                className="text-gray-300 hover:text-white font-medium text-lg transition-colors border-b border-gray-800 pb-2"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="mt-auto">
            <a
                href="https://calendly.com/mwaqaszafar76/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-linear-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
