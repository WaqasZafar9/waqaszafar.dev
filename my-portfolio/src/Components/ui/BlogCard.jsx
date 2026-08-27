// Adapted from the shadcn-style "blog-cards" community component.
// This project is a Vite + JS React app (no Next.js router, no TS), so the
// original `next/link` usage is swapped for a plain anchor and prop-types
// are dropped to match the rest of the codebase's conventions.
const BlogCard = ({ title, date, description, href = "#" }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full p-4 space-y-1 blog-card group hover:cursor-pointer"
    >
      <div className="flex justify-center gap-1 items-end relative">
        <div className="md:text-2xl text-xl font-serif whitespace-nowrap text-foreground group-hover:text-primary transition-all duration-500 ease-out">
          {title}
        </div>
        <span className="w-full border-b-[0.5px] border-dashed border-border group-hover:border-primary transition-all duration-500 ease-out mb-[6px]"></span>
        <div className="text-muted-foreground whitespace-nowrap uppercase group-hover:text-primary transition-all duration-500 ease-out font-mono md:text-base text-xs">
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
