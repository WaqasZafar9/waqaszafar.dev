
function GroundShadow({ floatY = 0, hovered = false }) {

  const normalizedY = (floatY + 0.15) / 0.3;
  const shadowScale = 1 + normalizedY * 0.22;
  const shadowOpacity = Math.max(0.2, 0.65 - normalizedY * 0.35);
  const ambientGlowScale = 1 + (hovered ? 0.15 : 0) + normalizedY * 0.1;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute bottom-[14%] left-1/2 z-0 h-16 w-64 -translate-x-1/2 select-none"
    >
      <div
        className="absolute inset-0 rounded-[100%] bg-primary/20 blur-[28px] transition-all duration-500 ease-out"
        style={{
          transform: `scale(${ambientGlowScale})`,
          opacity: hovered ? 0.45 : 0.28,
        }}
      />

      <div
        className="absolute left-1/2 top-1/2 h-8 w-44 -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-[#040508]/80 blur-[12px] transition-transform duration-300 ease-out"
        style={{
          transform: `translate(-50%, -50%) scale(${shadowScale})`,
          opacity: shadowOpacity,
        }}
      />

      <div
        className="absolute left-1/2 top-1/2 h-3 w-28 -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-background blur-[6px] transition-transform duration-300 ease-out"
        style={{
          transform: `translate(-50%, -50%) scale(${shadowScale * 0.85})`,
          opacity: shadowOpacity * 0.8,
        }}
      />
    </div>
  );
}

export default GroundShadow;
