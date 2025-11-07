import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    setIsClicked(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    
    setTimeout(() => {
      setIsClicked(false);
    }, 1000);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 rounded-md bg-card border-2 border-primary text-primary hover:bg-primary/10 h-14 w-14 flex items-center justify-center transition-all duration-300 shadow-lg cursor-pointer overflow-visible"
      data-testid="button-scroll-to-top"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-7 h-7" />
      {isClicked && (
        <span className="absolute inset-0 rounded-md border-2 border-primary animate-ping" />
      )}
    </button>
  );
}
