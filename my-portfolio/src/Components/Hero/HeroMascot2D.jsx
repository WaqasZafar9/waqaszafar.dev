import React, { useEffect, useState } from "react";

/**
 * HeroMascot2D Component
 * A 2D/2.5D floating ghost mascot matching heyabhay.design:
 * - Smooth SVG dome shape & 3-stop vertical gradient
 * - Dynamic waving skirt hem animation (cloth wave effect)
 * - Eye tracking mouse movement (eyes follow cursor)
 * - Frosted "Click on Ghost" pill badge on lower body
 */
function HeroMascot2D({
  mousePos = { x: 0, y: 0 },
  hovered = false,
  showBadge = true,
  onHoverChange = () => {},
  onPoke = () => {},
  floatY = 0,
}) {
  const [waveTime, setWaveTime] = useState(0);

  // Waving skirt hem animation loop
  useEffect(() => {
    let animationId;
    const animateWave = () => {
      setWaveTime((t) => t + 0.04);
      animationId = requestAnimationFrame(animateWave);
    };
    animationId = requestAnimationFrame(animateWave);
    return () => cancelAnimationFrame(animateWave);
  }, []);

  // Calculate 3D perspective tilt and shift from cursor coordinates
  const tiltX = -mousePos.y * 12;
  const tiltY = mousePos.x * 16;
  const shiftX = mousePos.x * 14;
  const shiftY = mousePos.y * 10;

  // Eye tracking offset (eyes shift within face relative to mouse position)
  const eyeShiftX = mousePos.x * 8;
  const eyeShiftY = mousePos.y * 6;

  // Calculate dynamic bottom skirt wave offsets
  const w1 = Math.sin(waveTime * 2.5) * 4;
  const w2 = Math.cos(waveTime * 2.5) * 4;
  const w3 = Math.sin(waveTime * 2.5 + 1.5) * 4;
  const w4 = Math.cos(waveTime * 2.5 + 1.5) * 4;

  // Dynamic SVG path for ghost body with continuous waving skirt hem
  const ghostBodyPath = `
    M 100 16
    C 64 16, 34 46, 34 82
    V 172
    Q 48 ${184 + w1}, 62 174
    Q 76 ${164 - w2}, 90 174
    Q 104 ${184 + w3}, 118 174
    Q 132 ${164 - w4}, 146 174
    Q 160 ${184 + w1}, 166 172
    V 82
    C 166 46, 136 16, 100 16
    Z
  `;

  return (
    <div className="relative flex h-full w-full items-center justify-center [perspective:1000px]">
      {/* 2D Ghost Container with Explicit Sizing & 3D Perspective Tilt */}
      <div
        onClick={onPoke}
        onMouseEnter={() => onHoverChange(true)}
        onMouseLeave={() => onHoverChange(false)}
        className="group relative flex h-[260px] w-[210px] sm:h-[300px] sm:w-[250px] md:h-[320px] md:w-[270px] items-center justify-center cursor-pointer select-none transition-transform duration-200 ease-out"
        style={{
          transform: `translate3d(${shiftX}px, ${shiftY + floatY}px, 0px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(${
            hovered ? 1.06 : 1.0
          })`,
        }}
      >
        {/* Soft Ambient Body Glow */}
        <div
          className={`absolute inset-2 rounded-full bg-accent/40 blur-[35px] transition-all duration-300 ${
            hovered ? "scale-125 opacity-80" : "scale-100 opacity-50"
          }`}
        />

        {/* 2D SVG Ghost Mascot */}
        <svg
          viewBox="0 0 200 240"
          className="relative z-10 h-full w-full drop-shadow-[0_15px_35px_rgba(111,120,255,0.4)] transition-all duration-300"
          role="presentation"
        >
          <defs>
            {/* Smooth 3-Stop Vertical Gradient */}
            <linearGradient id="ghostBodyGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="52%" stopColor="#cfd7fa" />
              <stop offset="100%" stopColor="#7a8edf" />
            </linearGradient>
          </defs>

          {/* Ghost Body Silhouette with Waving Skirt Hem */}
          <path fill="url(#ghostBodyGrad)" d={ghostBodyPath} />

          {/* Left Capsule Eye (Tracks Mouse Movement) */}
          <ellipse
            cx={76 + eyeShiftX}
            cy={86 + eyeShiftY}
            rx="7.5"
            ry="14"
            fill="#090a10"
          />

          {/* Right Capsule Eye (Tracks Mouse Movement) */}
          <ellipse
            cx={124 + eyeShiftX}
            cy={86 + eyeShiftY}
            rx="7.5"
            ry="14"
            fill="#090a10"
          />
        </svg>

        {/* "Click on Ghost" Frosted Pill Badge (Positioned over lower body of ghost matching Screenshot 1 & 2) */}
        <div
          className={`absolute bottom-[16%] left-1/2 z-20 -translate-x-1/2 transition-all duration-300 ${
            showBadge ? "opacity-100 scale-100 cursor-pointer" : "opacity-0 scale-95 pointer-events-none"
          }`}
          onClick={(e) => {
            e.stopPropagation();
            onPoke();
          }}
        >
          <span className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/20 px-4 py-1.5 text-xs font-medium text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:border-white/60 hover:bg-white/30 hover:scale-105 active:scale-95 whitespace-nowrap">
            Click on Ghost
          </span>
        </div>
      </div>
    </div>
  );
}

export default HeroMascot2D;
