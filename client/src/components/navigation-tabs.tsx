import { Link, useLocation } from "wouter";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";
import { Button } from "@/components/ui/button";

export function NavigationTabs() {
  const [location] = useLocation();
  const { theme, setTheme } = useTheme();

  const navItems = [
    { path: "/", label: "HOME" },
    { path: "/about", label: "ABOUT" },
    { path: "/portfolio", label: "PORTFOLIO" },
    { path: "/contact", label: "CONTACT" },
  ];

  return (
    <div className="flex items-center justify-between border-b border-border bg-background px-4 md:px-6 py-3 md:py-4">
      <nav className="flex gap-1 md:gap-2 overflow-x-auto flex-1">
        {navItems.map((item) => (
          <Link key={item.path} href={item.path}>
            <Button
              variant={location === item.path ? "default" : "ghost"}
              size="sm"
              className={`
                px-3 md:px-6 py-2 text-xs md:text-sm font-medium tracking-wide uppercase whitespace-nowrap
                ${location === item.path 
                  ? "bg-transparent border-2 border-primary text-primary hover:bg-primary/10" 
                  : "text-muted-foreground hover:text-foreground"
                }
              `}
              data-testid={`link-nav-${item.label.toLowerCase()}`}
            >
              {item.label}
            </Button>
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-2 md:gap-3 ml-2">
        <span className="text-xs md:text-sm text-muted-foreground hidden sm:inline">Switch Theme</span>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          data-testid="button-theme-toggle"
          className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-8 w-8 md:h-9 md:w-9"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </Button>
      </div>
    </div>
  );
}
