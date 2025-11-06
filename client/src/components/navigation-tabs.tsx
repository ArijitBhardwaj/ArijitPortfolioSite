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
    <div className="flex items-center bg-sidebar border-b border-border h-12">
      <nav className="flex gap-0 overflow-x-auto flex-1">
        {navItems.map((item) => (
          <Link key={item.path} href={item.path}>
            <button
              className={`
                h-12 px-6 text-[12px] font-medium tracking-[0.15em] uppercase whitespace-nowrap transition-all
                ${location === item.path 
                  ? "bg-transparent border-b-2 border-primary text-primary" 
                  : "text-muted-foreground hover:text-foreground hover:bg-sidebar-accent"
                }
              `}
              data-testid={`link-nav-${item.label.toLowerCase()}`}
            >
              {item.label}
            </button>
          </Link>
        ))}
      </nav>
    </div>
  );
}
