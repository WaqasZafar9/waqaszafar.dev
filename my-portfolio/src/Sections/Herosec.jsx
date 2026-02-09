import React, { useEffect, useRef, useState } from "react";
import { FaGithub, FaDribbble, FaLinkedin, FaArrowRight, FaDownload, FaPaintBrush, FaLayerGroup } from "react-icons/fa";
import myImage from "../assets/my.png";
import resume from "../assets/Resume.pdf";

function Herosec() {

  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

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

  return (
    <section
      ref={sectionRef}
      id="home"
      className="bg-black min-h-screen flex items-start justify-center pt-30 md:pt-40 md:pb-20 pb-35 px-4 overflow-hidden relative font-sans"
    >
        {/* Adjusted Background Lights - Direction Changed, Text Area Clear */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            {/* Top Right - Purple/Pink Glow (Behind Image side) */}
            <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] bg-purple-900/40 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-pulse"></div>
            
            {/* Bottom Left - Blue/Cyan Glow (Subtle, away from main text focus) */}
            <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-900/30 rounded-full blur-[120px] mix-blend-screen opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>

             {/* Top Center Glow - Just below Navbar */}
             <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-indigo-500/20 rounded-full blur-[100px] -z-10 mix-blend-screen opacity-30"></div>
        </div>

        {/* Dynamic Mouse Follower Glow */}
        <div 
            className="pointer-events-none fixed top-0 left-0 z-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
            style={{ 
                left: `${mousePosition.x}px`, 
                top: `${mousePosition.y}px` 
            }}
        ></div>

      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-4 items-center justify-between">
          
          {/* Left Section - Text Content */}
          <div
            ref={textRef}
            className={`flex-1 flex flex-col items-center lg:items-start space-y-8 transition-all duration-1000 w-full lg:w-auto text-center lg:text-left ${isVisible
                ? "animate-slide-in-left opacity-100"
                : "opacity-0 translate-x-[-50px]"
              }`}
          >
            {/* Welcome Badge - Glassmorphism */}
            <div className="inline-block">
                <div className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg">
                    <span className="text-pink-400 font-medium text-sm tracking-wide">Welcome to my world</span>
                </div>
            </div>

            {/* Main Heading and Roles */}
            <div className="space-y-4">
                <h2 className="text-5xl md:text-6xl lg:text-[70px] font-bold text-white tracking-tight leading-tight">
                    Hi, I am <br />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-neonPink to-blue-400">
                        Waqas Zafar
                    </span>
                </h2>
                
                {/* Role/Subtitle */}
                <h3 className="text-2xl md:text-3xl text-gray-300 font-normal tracking-wide leading-snug">
                    Software Engineer <br />
                    {/* <span className="text-gray-400">Mobile App Developer</span> */}
                </h3>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 font-light">
              Building high-performance web and mobile applications with React, Next.js, and React Native. I turn ideas into scalable, production-ready digital products.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-5 pt-2 w-full sm:w-auto">
                <a 
                    href="#contact" 
                    className="group relative px-8 py-4 rounded-full bg-linear-to-r from-purple-600 to-indigo-600 text-white font-medium transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.6)] hover:scale-105 active:scale-95 w-full sm:w-auto flex items-center justify-center gap-2 min-w-[160px]"
                >
                    Hire Me
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform text-sm" />
                </a>
                
                <a 
                    href={resume} 
                    download="Waqas_Zafar_CV.pdf"
                    className="group px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white font-medium transition-all duration-300 hover:bg-white/10 hover:border-white/20 w-full sm:w-auto flex items-center justify-center gap-2 min-w-[160px]"
                >
                    Get CV
                    <FaDownload className="text-sm group-hover:translate-y-0.5 transition-transform" />
                </a>
            </div>
          </div>

          {/* Right Section - Image with Floating Cards */}
          <div
            ref={imageRef}
            className={`flex-1 flex items-center justify-center lg:justify-end transition-all duration-1000 delay-300 w-full lg:w-auto ${isVisible
                ? "animate-slide-in-right opacity-100"
                : "opacity-0 translate-x-[50px]"
              }`}
          >
            <div className="relative w-full max-w-[400px] lg:max-w-[500px] aspect-square flex items-center justify-center">
              
              {/* Backlight Glow for Subject */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-purple-600/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
              
              {/* Main Image Container (Invisible Frame) */}
              <div className="relative z-10 w-full h-full rounded-full">
                  <img
                    src={myImage}
                    alt="Waqas Zafar"
                    className="w-full h-full object-cover rounded-full drop-shadow-2xl hover:scale-[1.02] transition-all duration-500"
                    onError={(e) => {
                      e.target.src = "https://placehold.co/500x500/1a1a1a/ffffff?text=Waqas+Zafar";
                    }}
                  />
              </div>

              {/* Float Card 1: Experience (Left) */}
              <div className="absolute top-[15%] -left-[5%] md:-left-[20px] z-20 animate-bounce" style={{ animationDuration: '3s' }}>
                  <div className="flex items-center gap-3 bg-[#0f111a]/80 backdrop-blur-xl p-4 rounded-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] pr-6 hover:bg-[#0f111a] transition-colors">
                      <div className="w-12 h-12 rounded-full bg-linear-to-tr from-blue-500/20 to-purple-500/20 flex items-center justify-center text-blue-400 border border-white/5">
                        <FaPaintBrush size={20} />
                      </div>
                      <div>
                          <p className="text-xs text-gray-400 font-medium tracking-wide">Experience</p>
                          <p className="text-white font-bold text-lg">1.5+ Years</p>
                      </div>
                  </div>
              </div>

              {/* Float Card 2: Projects (Right) */}
              <div className="absolute bottom-[15%] -right-[5%] md:-right-[20px] z-20 animate-bounce" style={{ animationDuration: '4s' }}>
                  <div className="flex items-center gap-3 bg-[#0f111a]/80 backdrop-blur-xl p-4 rounded-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] pr-6 hover:bg-[#0f111a] transition-colors">
                      <div className="w-12 h-12 rounded-full bg-linear-to-tr from-pink-500/20 to-purple-500/20 flex items-center justify-center text-pink-400 border border-white/5">
                        <FaLayerGroup size={20} />
                      </div>
                      <div>
                          <p className="text-xs text-gray-400 font-medium tracking-wide">Projects</p>
                          <p className="text-white font-bold text-lg">20+ Done</p>
                      </div>
                  </div>
              </div>

            </div>
          </div>
        </div>
      </div>

       {/* Mouse Scroll Indicator */}
       <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
            <div className="w-[30px] h-[50px] rounded-full border-2 border-white/20 flex justify-center p-2 backdrop-blur-sm">
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-scroll-down"></div>
            </div>
       </div>
    </section>
  );
}

export default Herosec;
