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
    <div className="mb-3" data-testid={`skillbar-${skill.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="flex justify-between text-[12px] mb-1">
        <span className="font-medium">{skill}</span>
        <span className="text-muted-foreground">{percentage}%</span>
      </div>
      <div className="h-1.5 bg-[#3b3b44] rounded-full overflow-hidden">
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
    { name: "React.js", percentage: 90 },
    { name: "Node.js", percentage: 85 },
    { name: "TypeScript", percentage: 85 },
    { name: "JavaScript", percentage: 90 },
    { name: "Python", percentage: 85 },
    { name: "HTML", percentage: 90 },
    { name: "CSS", percentage: 85 },
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
      <SidebarHeader className="border-b border-sidebar-border pb-6 px-6 pt-6">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full relative mb-3">
            <div className="w-full h-full rounded-full overflow-hidden border-3 border-primary">
              <img 
                src={profilePhoto} 
                alt="Arijit Bhardwaj" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-1 right-1">
              <div className="relative">
                <span className="absolute inline-flex h-4 w-4 rounded-full bg-green-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-sidebar"></span>
              </div>
            </div>
          </div>
          <h2 className="text-[14px] font-bold text-sidebar-foreground mb-0.5">Arijit Bhardwaj</h2>
          <p className="text-[12px] text-muted-foreground mb-3">Full Stack Developer</p>
          <div className="w-full px-2 space-y-1 text-[12px]">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Residence:</span>
              <span className="text-sidebar-foreground">Canada</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">City:</span>
              <span className="text-sidebar-foreground">Vancouver, BC</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Age:</span>
              <span className="text-sidebar-foreground">28 years</span>
            </div>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="!overflow-visible px-6 py-6">
        <SidebarGroup>
          <SidebarGroupLabel className="uppercase tracking-wide text-[12px] font-bold mb-3">
            Skills
          </SidebarGroupLabel>
          <SidebarGroupContent>
            {skills.map((skill) => (
              <SkillBar key={skill.name} skill={skill.name} percentage={skill.percentage} />
            ))}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border pb-4 px-6">
        <div className="flex justify-center gap-3 pt-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`link-social-${social.label.toLowerCase()}`}
              className="w-8 h-8 rounded-full bg-secondary hover-elevate active-elevate-2 flex items-center justify-center text-foreground transition-all"
              aria-label={social.label}
            >
              <social.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
