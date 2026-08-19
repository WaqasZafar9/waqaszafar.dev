import { useEffect, useRef, useState } from "react";

/**
 * Scroll choreography wrapper. Renders a <section> that animates in when it
 * enters the viewport and back out when it leaves, so scrolling either
 * direction re-plays the motion.
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
      ([entry]) => setInView(entry.isIntersecting),
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
