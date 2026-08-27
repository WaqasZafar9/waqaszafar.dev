import { useRef, useState, useEffect } from "react";
import { FaMedium, FaArrowRight } from "react-icons/fa6";
import BlogCard from "../Components/ui/BlogCard";

// Articles I've written — add new posts here as they go up on Medium.
const articles = [
  {
    title: "How to Transition from Frontend to Backend Development",
    date: "Aug 2026",
    description:
      "A step-by-step plan to help you become a full-stack engineer by building and deploying projects along the way.",
    href: "https://medium.com/@waqaszafar01/how-to-transition-from-frontend-to-backend-development-a-complete-roadmap-eeeba70592ef",
  },
];

const Reading = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="reading"
      className="bg-background py-16 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="absolute top-[10%] right-[8%] w-[420px] h-[420px] bg-primary/[0.16] rounded-full blur-[130px] pointer-events-none mix-blend-screen"></div>

      <div className="container mx-auto max-w-4xl px-4 md:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible
              ? "animate-slide-in-left opacity-100"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex justify-center mb-6">
            <button className="bg-black/5 dark:bg-white/5 text-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-black/10 hover:dark:bg-white/10 transition-colors flex items-center gap-2 border border-black/10 dark:border-white/10 backdrop-blur-sm">
              <FaMedium className="text-primary" />
              Reading
            </button>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Read More{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-foreground to-primary">
              From Me
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Thoughts on frontend, backend, and everything in between — written
            up on Medium.
          </p>
        </div>

        <div
          className={`flex flex-col divide-y divide-border transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          {articles.map((article) => (
            <BlogCard
              key={article.href}
              title={article.title}
              date={article.date}
              description={article.description}
              href={article.href}
            />
          ))}
        </div>

        <div
          className={`flex justify-center mt-10 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href="https://waqaszafar01.medium.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors group"
          >
            View all articles on Medium
            <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reading;
