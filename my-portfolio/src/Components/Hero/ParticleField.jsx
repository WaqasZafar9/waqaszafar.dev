import { useEffect, useRef } from "react";

/**
 * ParticleField
 * Sparse floating background particles creating depth behind the 2.5D/3D mascot.
 * Uses the theme's green/blue tones, slow drift, and subtle mouse parallax offset.
 */
function ParticleField({ mousePos = { x: 0, y: 0 }, compact = false, active = true }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !active) return undefined;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    const count = compact ? 12 : 28;
    const colors = [
      "rgba(52, 168, 90, ", // #34a85a primary
      "rgba(126, 217, 160, ", // #7ed9a0 primary, lighter tint
      "rgba(163, 163, 163, ", // #a3a3a3 muted-foreground
      "rgba(255, 255, 255, ", // white
    ];

    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.8 + 1,
      colorPrefix: colors[Math.floor(Math.random() * colors.length)],
      baseAlpha: Math.random() * 0.35 + 0.1,
      alphaPulseSpeed: Math.random() * 0.015 + 0.005,
      alphaPhase: Math.random() * Math.PI * 2,
      vx: (Math.random() - 0.5) * 0.25,
      vy: -(Math.random() * 0.3 + 0.1), // Slow upward float
      parallaxFactor: Math.random() * 15 + 8, // Parallax depth multiplier
    }));

    let time = 0;

    const render = () => {
      time += 0.016;
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse parallax offset
      const targetPx = mousePos.x * 25;
      const targetPy = mousePos.y * 25;

      particles.forEach((p) => {
        p.y += p.vy;
        p.x += p.vx + Math.sin(time + p.alphaPhase) * 0.08;

        // Wrap around boundaries smoothly
        if (p.y < -10) p.y = height + 10;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        // Pulsing alpha
        const currentAlpha = Math.max(
          0.05,
          p.baseAlpha + Math.sin(time * p.alphaPulseSpeed + p.alphaPhase) * 0.12
        );

        // Apply mouse parallax shift based on particle depth
        const drawX = p.x + (targetPx * (p.parallaxFactor / 20));
        const drawY = p.y + (targetPy * (p.parallaxFactor / 20));

        ctx.beginPath();
        ctx.arc(drawX, drawY, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.colorPrefix}${currentAlpha})`;
        ctx.shadowBlur = p.radius * 3;
        ctx.shadowColor = `${p.colorPrefix}0.6)`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [compact, mousePos.x, mousePos.y, active]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
    />
  );
}

export default ParticleField;
