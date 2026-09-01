import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

const VARIANTS = {
  rise: {
    hidden: { opacity: 0, y: 32, scale: 0.99 },
    shown: { opacity: 1, y: 0, scale: 1 },
  },
  "flip-up": {
    hidden: { opacity: 0, rotateX: 8, y: 28 },
    shown: { opacity: 1, rotateX: 0, y: 0 },
    style: { transformPerspective: 1400, transformOrigin: "50% 100%" },
  },
  unfold: {
    hidden: { opacity: 0, rotateX: -7, scale: 0.985 },
    shown: { opacity: 1, rotateX: 0, scale: 1 },
    style: { transformPerspective: 1400, transformOrigin: "50% 0%" },
  },
  "swing-left": {
    hidden: { opacity: 0, rotateY: -7, x: -28 },
    shown: { opacity: 1, rotateY: 0, x: 0 },
    style: { transformPerspective: 1400, transformOrigin: "0% 50%" },
  },
  "swing-right": {
    hidden: { opacity: 0, rotateY: 7, x: 28 },
    shown: { opacity: 1, rotateY: 0, x: 0 },
    style: { transformPerspective: 1400, transformOrigin: "100% 50%" },
  },
  "zoom-depth": {
    hidden: { opacity: 0, scale: 0.965 },
    shown: { opacity: 1, scale: 1 },
    style: { transformPerspective: 1400 },
  },
  ascend: {
    hidden: { opacity: 0, y: 44, rotateX: -4, scale: 0.97 },
    shown: { opacity: 1, y: 0, rotateX: 0, scale: 1 },
    style: { transformPerspective: 1600, transformOrigin: "50% 100%" },
  },
  spiral: {
    hidden: { opacity: 0, rotateZ: -2, rotateY: 5, scale: 0.975, y: 24 },
    shown: { opacity: 1, rotateZ: 0, rotateY: 0, scale: 1, y: 0 },
    style: { transformPerspective: 1400 },
  },
};

function Reveal({ variant = "rise", className = "", children, ...rest }) {
  const prefersReducedMotion = useReducedMotion();
  const { hidden, shown, style } = VARIANTS[variant] ?? VARIANTS.rise;
  const MotionSection = motion.section;

  if (prefersReducedMotion) {
    return (
      <section className={className} {...rest}>
        {children}
      </section>
    );
  }

  return (
    <MotionSection
      className={className}
      style={style}
      initial={hidden}
      whileInView={shown}
      viewport={{ once: true, amount: 0.12, margin: "-6% 0px -6% 0px" }}
      transition={{ duration: 0.7, ease: EASE }}
      {...rest}
    >
      {children}
    </MotionSection>
  );
}

export default Reveal;
