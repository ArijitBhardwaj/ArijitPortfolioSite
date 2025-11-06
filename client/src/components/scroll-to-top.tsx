import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <Button
      onClick={scrollToTop}
      size="icon"
      className="fixed bottom-8 right-8 z-50 rounded-md bg-sidebar border-2 border-primary text-primary hover:bg-primary/10 h-14 w-14 transition-all duration-300 shadow-lg no-default-hover-elevate no-default-active-elevate relative overflow-visible"
      data-testid="button-scroll-to-top"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-7 h-7" />
      {isClicked && (
        <span className="absolute inset-0 rounded-md border-2 border-primary animate-ping" />
      )}
    </Button>
  );
}
