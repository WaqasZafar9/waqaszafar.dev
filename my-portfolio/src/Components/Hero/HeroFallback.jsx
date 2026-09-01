import React from "react";

/**
 * HeroFallback
 * 2.5D Mascot Fallback representation shown during loading, fallback,
 * or when the visitor prefers reduced motion.
 */
function HeroFallback({ mousePos = { x: 0, y: 0 }, hovered = false }) {
  // 2.5D perspective tilt calculations
  const rotateX = -mousePos.y * 14;
  const rotateY = mousePos.x * 18;
  const translateX = mousePos.x * 12;
  const translateY = mousePos.y * 10;

  return (
    <div className="absolute inset-0 flex items-center justify-center [perspective:1000px]">
      <div
        className="relative transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(${translateX}px, ${translateY}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        }}
      >
        {/* Dynamic drop shadow */}
        <div
          className="absolute inset-0 rounded-full bg-primary/30 blur-[40px] transition-opacity duration-300"
          style={{
            transform: `translate3d(${-translateX * 0.5}px, ${-translateY * 0.5 + 20}px, -20px)`,
            opacity: hovered ? 0.6 : 0.35,
          }}
        />

        <svg
          viewBox="0 0 200 240"
          className={`h-full w-auto max-h-[300px] transition-transform duration-500 ${
            hovered ? "scale-105 drop-shadow-[0_0_60px_color-mix(in_srgb,var(--color-primary)_50%,transparent)]" : "drop-shadow-[0_0_40px_color-mix(in_srgb,var(--color-primary)_30%,transparent)]"
          }`}
          role="presentation"
        >
          <defs>
            <linearGradient id="ghostBody" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f8f9ff" />
              <stop offset="55%" stopColor="#c3cbf0" />
              <stop offset="100%" stopColor="#7f92d6" />
            </linearGradient>
          </defs>

          {/* Dome and wavy hem */}
          <path
            fill="url(#ghostBody)"
            d="M100 12c-38 0-69 31-69 69v108c0 7 8 11 13 6l14-13c4-4 10-4 14 0l13 13c4 4 10 4 14 0l13-13c4-4 10-4 14 0l14 13c5 5 13 1 13-6V81c0-38-31-69-69-69z"
          />

          {/* Eyes */}
          <ellipse cx="78" cy="88" rx="9" ry="13" fill="#0a0b12" />
          <ellipse cx="122" cy="88" rx="9" ry="13" fill="#0a0b12" />
        </svg>
      </div>
    </div>
  );
}

export default HeroFallback;
