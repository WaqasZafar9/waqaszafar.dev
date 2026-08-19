import { useEffect, useRef, useState } from "react";

/**
 * Scroll choreography wrapper. Renders a <section> that animates in once,
 * the first time it enters the viewport, and then stays put — scrolling
 * back up past it doesn't fade/blur it back out.
 *
 * The hidden state lives in CSS (`.sr-<variant>:not(.is-in)`), so this only
 * has to toggle a class — no per-frame JS and no layout reads while scrolling.
 *
 * @param {string} variant  one of: rise | flip-up | unfold | swing-left |
 *                          swing-right | zoom-depth | spiral
 */
function Reveal({ variant = "rise", className = "", children, ...rest }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    // Reduced motion: land on the resting state and never animate.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInView(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // one-shot — never reverses back out
        }
      },
      { threshold: 0.12, rootMargin: "-6% 0px -6% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`sr sr-${variant} ${inView ? "is-in" : ""} ${className}`.trim()}
      {...rest}
    >
      {children}
    </section>
  );
}

export default Reveal;
