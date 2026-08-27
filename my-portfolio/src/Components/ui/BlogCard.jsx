// Adapted from the shadcn-style "blog-cards" community component.
// This project is a Vite + JS React app (no Next.js router, no TS), so the
// original `next/link` usage is swapped for a plain anchor and prop-types
// are dropped to match the rest of the codebase's conventions.
//
// The original design puts title — dashed line — date on one `nowrap` row,
// which only holds up for short titles. A real post title ("How to
// Transition from Frontend to Backend Development") ran off the edge of
// the screen on mobile since it never wraps. Below `sm:` the row now
// stacks (title wraps freely, date drops underneath); the single dashed
// row comes back at `sm:` and up where there's enough width for it, with
// a truncating ellipsis as a safety net instead of overflowing.
const BlogCard = ({ title, date, description, href = "#" }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full p-4 space-y-1 blog-card group hover:cursor-pointer"
    >
      <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-end sm:justify-center sm:gap-1">
        <div className="text-xl font-serif text-foreground transition-all duration-500 ease-out group-hover:text-primary sm:whitespace-nowrap sm:truncate sm:max-w-[70%] md:text-2xl">
          {title}
        </div>
        <span className="hidden w-full border-b-[0.5px] border-dashed border-border transition-all duration-500 ease-out group-hover:border-primary mb-[6px] sm:block"></span>
        <div className="text-xs uppercase text-muted-foreground transition-all duration-500 ease-out group-hover:text-primary font-mono whitespace-nowrap sm:text-base">
          {date}
        </div>
      </div>
      <div className="text-muted-foreground md:text-lg group-hover:text-primary transition-all duration-500 ease-out md:max-w-full max-w-sm">
        {description}
      </div>
    </a>
  );
};

export default BlogCard;
