import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [countdown, setCountdown] = useState(10);

  // Track mouse position for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Auto-redirect countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          navigate("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Waqas Zafar</title>
        <meta
          name="description"
          content="The page you're looking for doesn't exist."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 flex items-center justify-center overflow-hidden relative">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating orbs */}
          <div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              transition: "transform 0.3s ease-out",
            }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
            style={{
              transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
              transition: "transform 0.3s ease-out",
              animationDelay: "1s",
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
            style={{
              transform: `translate(${mousePosition.x * 0.5}px, ${
                mousePosition.y * 0.5
              }px)`,
              transition: "transform 0.3s ease-out",
              animationDelay: "2s",
            }}
          />

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        {/* Main content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          {/* Glitch effect 404 */}
          <div className="relative inline-block mb-8">
            <h1 className="text-[12rem] sm:text-[16rem] md:text-[20rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 leading-none animate-pulse select-none">
              404
            </h1>
            {/* Glitch layers */}
            <h1
              className="absolute inset-0 text-[12rem] sm:text-[16rem] md:text-[20rem] font-black text-blue-500/30 leading-none select-none pointer-events-none"
              style={{
                transform: `translate(${mousePosition.x * 0.1}px, ${
                  mousePosition.y * 0.1
                }px)`,
                transition: "transform 0.1s ease-out",
              }}
            >
              404
            </h1>
            <h1
              className="absolute inset-0 text-[12rem] sm:text-[16rem] md:text-[20rem] font-black text-purple-500/30 leading-none select-none pointer-events-none"
              style={{
                transform: `translate(${-mousePosition.x * 0.1}px, ${
                  -mousePosition.y * 0.1
                }px)`,
                transition: "transform 0.1s ease-out",
              }}
            >
              404
            </h1>
          </div>

          {/* Error message */}
          <div className="space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white animate-fade-in-up">
              Page Not Found
            </h2>
            <p
              className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Oops! The page you're looking for seems to have wandered off into
              the digital void. Don't worry, we'll guide you back home.
            </p>
          </div>

          {/* Action buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <button
              onClick={handleGoHome}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg
                  className="w-5 h-5 transition-transform group-hover:-translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Back to Home
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            <button
              onClick={() => window.history.back()}
              className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 transition-transform group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"
                  />
                </svg>
                Go Back
              </span>
            </button>
          </div>

          {/* Auto-redirect counter */}
          <div
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-md rounded-full border border-white/10 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="relative">
              <div className="w-12 h-12 rounded-full border-4 border-white/10 flex items-center justify-center">
                <span className="text-xl font-bold text-white">
                  {countdown}
                </span>
              </div>
              <svg className="absolute inset-0 -rotate-90 w-12 h-12">
                <circle
                  cx="24"
                  cy="24"
                  r="20"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="4"
                  strokeDasharray={`${(countdown / 10) * 126} 126`}
                  className="transition-all duration-1000 ease-linear"
                />
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className="text-gray-300 text-sm">
              Redirecting to homepage...
            </span>
          </div>

          {/* Decorative elements */}
          <div className="mt-16 flex justify-center gap-8 opacity-50">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default NotFound;
