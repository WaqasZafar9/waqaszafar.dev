import "./ShinyButton.css";

/**
 * Pill-shaped button with an animated conic-gradient border and a soft
 * "shine" sweep on hover/focus. Renders as an <a> when `href` is given
 * (e.g. anchor CTAs like "#projects"), otherwise as a <button>.
 */
function ShinyButton({ children, href, onClick, className = "", ...rest }) {
  const classes = `shiny-cta ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick} {...rest}>
        {/* inline-flex so multi-child content (e.g. text + an icon) always
          lays out in one row — Tailwind's preflight sets svg { display:
          block }, which would otherwise break a plain inline span onto a
          new line. Also the actual flex container for any `gap-*` passed
          via className: .shiny-cta itself only ever has this one child. */}
      <span className="z-[1] inline-flex items-center justify-center gap-2">
        {children}
      </span>
      </a>
    );
  }

  return (
    <button type="button" className={classes} onClick={onClick} {...rest}>
      {/* inline-flex so multi-child content (e.g. text + an icon) always
          lays out in one row — Tailwind's preflight sets svg { display:
          block }, which would otherwise break a plain inline span onto a
          new line. Also the actual flex container for any `gap-*` passed
          via className: .shiny-cta itself only ever has this one child. */}
      <span className="z-[1] inline-flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
}

export default ShinyButton;
