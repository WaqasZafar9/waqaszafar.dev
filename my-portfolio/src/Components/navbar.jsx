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
    // If we're not on the home page, navigate to home first
    if (location.pathname !== "/") {
      window.location.href = "/#" + sectionId;
    } else {
      scrollToSection(sectionId);
    }
  };

  return (
    <div className="relative">
      <nav className="w-full bg-[#030712] px-7 py-6 relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="text-white font-bold text-3xl">&lt;WZ /&gt;</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {/* Navigation Links */}
            <div className="flex items-center gap-6">
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, "home")}
                className="text-white hover:text-gray-300 transition-colors font-medium cursor-pointer"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={(e) => handleNavClick(e, "about")}
                className="text-white hover:text-gray-300 transition-colors font-medium cursor-pointer"
              >
                About
              </a>
              <a
                href="#skills"
                onClick={(e) => handleNavClick(e, "skills")}
                className="text-white hover:text-gray-300 transition-colors font-medium cursor-pointer"
              >
                Skills
              </a>
              <a
                href="#projects"
                onClick={(e) => handleNavClick(e, "projects")}
                className="text-white hover:text-gray-300 transition-colors font-medium cursor-pointer"
              >
                Projects
              </a>
              <a
                href="#certificates"
                onClick={(e) => handleNavClick(e, "certificates")}
                className="text-white hover:text-gray-300 transition-colors font-medium cursor-pointer"
              >
                Certificates
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "contact")}
                className="text-white hover:text-gray-300 transition-colors font-medium cursor-pointer"
              >
                Contact
              </a>
            </div>

            {/* Download CV Button */}
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-900 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              Download CV
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
        <div className="flex flex-col h-full px-7 pt-6 pb-8 overflow-y-auto">
          {/* Header with Logo and Close Button */}
          <div className="flex items-center justify-between mb-6">
            <div className="text-white font-bold text-3xl">&lt;WZ /&gt;</div>
            <button
              onClick={closeMobileMenu}
              className="text-white text-2xl focus:outline-none hover:text-gray-300 transition-colors"
              aria-label="Close menu"
            >
              <HiX />
            </button>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 mb-6"></div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-6 mb-6">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "home")}
              className="text-white hover:text-gray-300 transition-colors font-medium text-lg cursor-pointer"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, "about")}
              className="text-white hover:text-gray-300 transition-colors font-medium text-lg cursor-pointer"
            >
              About
            </a>
            <a
              href="#skills"
              onClick={(e) => handleNavClick(e, "skills")}
              className="text-white hover:text-gray-300 transition-colors font-medium text-lg cursor-pointer"
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, "projects")}
              className="text-white hover:text-gray-300 transition-colors font-medium text-lg cursor-pointer"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="text-white hover:text-gray-300 transition-colors font-medium text-lg cursor-pointer"
            >
              Contact
            </a>
          </div>

          {/* Separator */}
          <div className="border-t border-gray-700 my-6"></div>

          {/* Meeting Section */}
          <div className="mt-auto pb-4">
            <h2 className="text-white text-xl font-medium mb-4">
              Lets have a Meeting
            </h2>
            <button onClick={() => window.open(resume, '_blank')} className="w-full bg-gray-200 text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-300 transition-colors">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
