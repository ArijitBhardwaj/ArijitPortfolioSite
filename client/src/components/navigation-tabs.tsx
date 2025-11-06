import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export function NavigationTabs() {
  const [location] = useLocation();

  const navItems = [
    { path: "/", label: "HOME" },
    { path: "/about", label: "ABOUT" },
    { path: "/portfolio", label: "PORTFOLIO" },
    { path: "/contact", label: "CONTACT" },
    { path: "/resume", label: "RESUME" },
  ];

  return (
    <div className="flex items-center border-b border-border bg-background px-4 md:px-6 py-3 md:py-4">
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
    </div>
  );
}
