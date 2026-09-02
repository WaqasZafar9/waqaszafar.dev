"use client";

import { useEffect, useState } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

const STORAGE_KEY = "theme";

function getInitialTheme() {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      return;
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="fixed bottom-5 left-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-black/[0.04] text-foreground backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:shadow-[0_0_18px_-2px_color-mix(in_srgb,var(--color-primary)_60%,transparent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:border-white/15 dark:bg-white/[0.06]"
    >
      <HiOutlineSun
        aria-hidden="true"
        className={`absolute h-5 w-5 transition-all duration-300 ${
          isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
        }`}
      />
      <HiOutlineMoon
        aria-hidden="true"
        className={`absolute h-5 w-5 transition-all duration-300 ${
          isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
        }`}
      />
    </button>
  );
}

export default ThemeToggle;
