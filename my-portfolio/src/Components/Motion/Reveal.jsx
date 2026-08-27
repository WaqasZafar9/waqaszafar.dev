import { motion, useReducedMotion } from "framer-motion";

// Shared easing for every variant — a soft decelerate that matches the
// rest of the site's motion language.
const EASE = [0.22, 1, 0.36, 1];

/**
 * Per-variant hidden state. No blur/filter anywhere — sections arrive via
 * opacity + transform only, which stays crisp instead of reading as a haze
 * settling over the page on a long scroll.
 *
 * @param {string} variant  one of: rise | flip-up | unfold | swing-left |
 *                          swing-right | zoom-depth | ascend | spiral
 */
const VARIANTS = {
  // Lifts and settles
  rise: {
    hidden: { opacity: 0, y: 32, scale: 0.99 },
    shown: { opacity: 1, y: 0, scale: 1 },
  },
  // Tips up from its base, like a panel being stood upright
  "flip-up": {
    hidden: { opacity: 0, rotateX: 8, y: 28 },
    shown: { opacity: 1, rotateX: 0, y: 0 },
    style: { transformPerspective: 1400, transformOrigin: "50% 100%" },
  },
  // Hinges down from the top edge
  unfold: {
    hidden: { opacity: 0, rotateX: -7, scale: 0.985 },
    shown: { opacity: 1, rotateX: 0, scale: 1 },
    style: { transformPerspective: 1400, transformOrigin: "50% 0%" },
  },
  // Swings in on a left-hand hinge
  "swing-left": {
    hidden: { opacity: 0, rotateY: -7, x: -28 },
    shown: { opacity: 1, rotateY: 0, x: 0 },
    style: { transformPerspective: 1400, transformOrigin: "0% 50%" },
  },
  // Swings in on a right-hand hinge
  "swing-right": {
    hidden: { opacity: 0, rotateY: 7, x: 28 },
    shown: { opacity: 1, rotateY: 0, x: 0 },
    style: { transformPerspective: 1400, transformOrigin: "100% 50%" },
  },
  // Arrives from depth, straight toward the viewer
  "zoom-depth": {
    hidden: { opacity: 0, scale: 0.965 },
    shown: { opacity: 1, scale: 1 },
    style: { transformPerspective: 1400 },
  },
  // Climbs from below, levelling out as it lands
  ascend: {
    hidden: { opacity: 0, y: 44, rotateX: -4, scale: 0.97 },
    shown: { opacity: 1, y: 0, rotateX: 0, scale: 1 },
    style: { transformPerspective: 1600, transformOrigin: "50% 100%" },
  },
  // Rotates on two axes as it rises
  spiral: {
    hidden: { opacity: 0, rotateZ: -2, rotateY: 5, scale: 0.975, y: 24 },
    shown: { opacity: 1, rotateZ: 0, rotateY: 0, scale: 1, y: 0 },
    style: { transformPerspective: 1400 },
  },
};

/**
 * Scroll choreography wrapper. Renders a <motion.section> that animates in
 * once, the first time it enters the viewport, and then stays put —
 * scrolling back up past it doesn't play it in reverse.
 *
 * @param {string} variant  see VARIANTS above
 */
function Reveal({ variant = "rise", className = "", children, ...rest }) {
  const prefersReducedMotion = useReducedMotion();
  const { hidden, shown, style } = VARIANTS[variant] ?? VARIANTS.rise;

  if (prefersReducedMotion) {
    return (
      <section className={className} {...rest}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      className={className}
      style={style}
      initial={hidden}
      whileInView={shown}
      viewport={{ once: true, amount: 0.12, margin: "-6% 0px -6% 0px" }}
      transition={{ duration: 0.7, ease: EASE }}
      {...rest}
    >
      {children}
    </motion.section>
  );
}

export default Reveal;
