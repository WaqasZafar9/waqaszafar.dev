import "./ShinyButton.css";

function ShinyButton({ children, href, onClick, className = "", ...rest }) {
  const classes = `shiny-cta ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick} {...rest}>
      <span className="z-[1] inline-flex items-center justify-center gap-2">
        {children}
      </span>
      </a>
    );
  }

  return (
    <button type="button" className={classes} onClick={onClick} {...rest}>
      <span className="z-[1] inline-flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
}

export default ShinyButton;
