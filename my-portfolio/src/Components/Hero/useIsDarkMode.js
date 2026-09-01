import { useEffect, useState } from "react";

/**
 * Tracks whether `.dark` is set on <html>, for canvas/three.js visuals that
 * can't read CSS custom properties directly and need a JS-side theme color.
 * Updates live when ThemeToggle flips the class, not just on mount.
 */
function useIsDarkMode() {
  const [isDark, setIsDark] = useState(
    () => typeof document !== "undefined" && document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const root = document.documentElement;
    const observer = new MutationObserver(() => {
      setIsDark(root.classList.contains("dark"));
    });
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return isDark;
}

export default useIsDarkMode;
