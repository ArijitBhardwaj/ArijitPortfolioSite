import { Link, useLocation } from "wouter";
import { Moon, Sun } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { useTheme } from "./theme-provider";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

interface SkillBarProps {
  skill: string;
  percentage: number;
}

function SkillBar({ skill, percentage }: SkillBarProps) {
  return (
    <div className="mb-4" data-testid={`skillbar-${skill.toLowerCase().replace(/\s+/g, '-')}`}>
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

export function AppSidebar() {
  const [location] = useLocation();
  const { theme, setTheme } = useTheme();

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

  return (
    <Sidebar>
      <SidebarHeader className="border-b border-sidebar-border pb-6">
        <div className="flex flex-col items-center pt-4">
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
        <div className="absolute top-4 right-4 z-10">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            data-testid="button-theme-toggle"
            className="rounded-full"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </Button>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton
                    asChild
                    isActive={location === item.path}
                    data-testid={`link-nav-${item.label.toLowerCase()}`}
                  >
                    <Link href={item.path}>
                      <span className="text-sm font-medium tracking-wide uppercase">{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="uppercase tracking-wide text-xs font-semibold">
            Skills
          </SidebarGroupLabel>
          <SidebarGroupContent className="max-h-[400px] overflow-y-auto">
            <div className="px-2">
              {skills.map((skill) => (
                <SkillBar key={skill.name} skill={skill.name} percentage={skill.percentage} />
              ))}
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border">
        <div className="flex justify-center gap-4 py-4">
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
      </SidebarFooter>
    </Sidebar>
  );
}
