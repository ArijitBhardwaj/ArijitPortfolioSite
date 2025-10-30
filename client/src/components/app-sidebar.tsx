import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
} from "@/components/ui/sidebar";
import profilePhoto from "@assets/linkin..myb_1761849483072.png";

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
      <SidebarHeader className="border-b border-sidebar-border pb-8">
        <div className="flex flex-col items-center pt-8">
          <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-primary mb-6">
            <img 
              src={profilePhoto} 
              alt="Arijit Bhardwaj" 
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold text-sidebar-foreground mb-2">Arijit Bhardwaj</h2>
          <p className="text-sm text-muted-foreground mb-4">Full Stack Developer</p>
          <div className="w-full px-4 space-y-1 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground font-medium">Residence:</span>
              <span className="text-sidebar-foreground">Canada</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground font-medium">City:</span>
              <span className="text-sidebar-foreground">Vancouver, BC</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground font-medium">Age:</span>
              <span className="text-sidebar-foreground">28 years</span>
            </div>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="!overflow-visible">
        <SidebarGroup>
          <SidebarGroupLabel className="uppercase tracking-wide text-sm font-bold px-4 mb-4">
            Skills
          </SidebarGroupLabel>
          <SidebarGroupContent className="px-4">
            {skills.map((skill) => (
              <SkillBar key={skill.name} skill={skill.name} percentage={skill.percentage} />
            ))}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border pb-6">
        <div className="flex justify-center gap-6 pt-6">
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
