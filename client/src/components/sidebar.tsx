import { Link, useLocation } from "wouter";
import { Moon, Sun, Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { useTheme } from "./theme-provider";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface SkillBarProps {
  skill: string;
  percentage: number;
}

function SkillBar({ skill, percentage }: SkillBarProps) {
  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm mb-2">
        <span className="font-medium">{skill}</span>
        <span className="text-muted-foreground">{percentage}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-primary transition-all duration-1000 ease-out rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

export function Sidebar() {
  const [location] = useLocation();
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "HOME" },
    { path: "/about", label: "ABOUT" },
    { path: "/portfolio", label: "PORTFOLIO" },
    { path: "/contact", label: "CONTACT" },
  ];

  const skills = [
    { name: "React.js", percentage: 95 },
    { name: "Node.js", percentage: 90 },
    { name: "TypeScript", percentage: 90 },
    { name: "JavaScript", percentage: 95 },
    { name: "Python", percentage: 85 },
    { name: "HTML", percentage: 95 },
    { name: "CSS", percentage: 90 },
    { name: "Docker", percentage: 70 },
    { name: "AWS", percentage: 75 },
  ];

  const socialLinks = [
    { icon: FaGithub, url: "https://github.com/ArijitBhardwaj", label: "GitHub" },
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/arijitbhardwaj/", label: "LinkedIn" },
    { icon: FaTwitter, url: "https://twitter.com", label: "Twitter" },
    { icon: FaInstagram, url: "https://instagram.com", label: "Instagram" },
  ];

  const sidebarContent = (
    <>
      <div className="flex flex-col items-center pt-8 pb-6 border-b border-sidebar-border">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary mb-4">
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center text-4xl font-bold text-primary">
            AB
          </div>
        </div>
        <h2 className="text-2xl font-bold text-sidebar-foreground mb-1">Arijit Bhardwaj</h2>
        <p className="text-sm text-muted-foreground mb-2">Full Stack Developer</p>
        <div className="flex gap-4 text-xs text-muted-foreground">
          <div>
            <span className="font-medium">Residence:</span> Vancouver, BC
          </div>
        </div>
        <div className="text-xs text-muted-foreground">
          <span className="font-medium">City:</span> Vancouver, BC
        </div>
      </div>

      <nav className="py-6 border-b border-sidebar-border">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                data-testid={`link-nav-${item.label.toLowerCase()}`}
                className={`block px-6 py-3 text-sm font-medium tracking-wide transition-colors hover-elevate ${
                  location === item.path
                    ? "text-primary border-r-4 border-primary bg-sidebar-accent"
                    : "text-sidebar-foreground"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="py-6 px-6 border-b border-sidebar-border max-h-[400px] overflow-y-auto">
        <h3 className="text-sm font-semibold mb-4 uppercase tracking-wide">Skills</h3>
        {skills.map((skill) => (
          <SkillBar key={skill.name} skill={skill.name} percentage={skill.percentage} />
        ))}
      </div>

      <div className="py-6 px-6 flex-1 flex flex-col justify-end">
        <div className="flex justify-center gap-4 mb-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`link-social-${social.label.toLowerCase()}`}
              className="w-10 h-10 rounded-full bg-secondary hover-elevate active-elevate-2 flex items-center justify-center text-foreground transition-all"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-sidebar border-b border-sidebar-border px-4 py-3 flex items-center justify-between">
        <h2 className="text-lg font-bold">Arijit Bhardwaj</h2>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            data-testid="button-theme-toggle"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={`lg:hidden fixed top-0 right-0 bottom-0 w-80 bg-sidebar z-50 transform transition-transform duration-300 overflow-y-auto ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">{sidebarContent}</div>
      </aside>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-80 bg-sidebar border-r border-sidebar-border flex-col overflow-y-auto">
        <div className="absolute top-4 right-4 z-10">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            data-testid="button-theme-toggle-desktop"
            className="rounded-full"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </Button>
        </div>
        {sidebarContent}
      </aside>
    </>
  );
}
