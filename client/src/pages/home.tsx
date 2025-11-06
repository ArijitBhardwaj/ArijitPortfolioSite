import { MountainBackground } from "@/components/mountain-background";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, FolderGit2, Users, GraduationCap } from "lucide-react";
import profilePhoto from "@assets/linkin..myb_1761849483072.png";

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

function StatCard({ icon, value, label }: StatCardProps) {
  return (
    <Card className="p-4 text-center hover-elevate transition-all duration-300" data-testid={`card-stat-${label.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="flex justify-center mb-2">{icon}</div>
      <div className="text-3xl font-bold text-primary mb-1" data-testid={`text-stat-value-${label.toLowerCase().replace(/\s+/g, '-')}`}>{value}</div>
      <div className="text-xs uppercase tracking-wide text-muted-foreground" data-testid={`text-stat-label-${label.toLowerCase().replace(/\s+/g, '-')}`}>{label}</div>
    </Card>
  );
}

interface SkillCardProps {
  title: string;
  description: string;
  technologies: string[];
}

function SkillCard({ title, description, technologies }: SkillCardProps) {
  const titleSlug = title.toLowerCase().replace(/\s+/g, '-');
  return (
    <Card className="p-5 hover-elevate transition-all duration-300 flex flex-col h-full" data-testid={`card-skill-${titleSlug}`}>
      <h3 className="text-lg font-semibold mb-2.5" data-testid={`text-skill-title-${titleSlug}`}>{title}</h3>
      <p className="text-sm text-muted-foreground mb-3 flex-grow leading-relaxed" data-testid={`text-skill-desc-${titleSlug}`}>{description}</p>
      <div className="flex flex-wrap gap-1.5">
        {technologies.map((tech) => (
          <Badge
            key={tech}
            variant="secondary"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-xs px-2 py-0.5"
            data-testid={`badge-skill-${titleSlug}-tech-${tech.toLowerCase().replace(/\s+/g, '-')}`}
          >
            {tech}
          </Badge>
        ))}
      </div>
    </Card>
  );
}

export default function Home() {
  const stats = [
    { icon: <Briefcase className="w-10 h-10 text-primary" />, value: "4+", label: "Industry Experience" },
    { icon: <FolderGit2 className="w-10 h-10 text-primary" />, value: "10+", label: "Completed Projects" },
    { icon: <Users className="w-10 h-10 text-primary" />, value: "3+", label: "Companies Worked" },
    { icon: <GraduationCap className="w-10 h-10 text-primary" />, value: "1+", label: "Years of Teaching" },
  ];

  const skills = [
    {
      title: "Front End Development",
      description: "Building responsive, accessible, and performant user interfaces with modern frameworks and best practices.",
      technologies: ["React.js", "TypeScript", "JavaScript", "HTML/CSS"],
    },
    {
      title: "Back End Development",
      description: "Creating scalable server-side applications with robust APIs, authentication, and database integration.",
      technologies: ["Node.js", "Express", "Firebase", "AWS"],
    },
    {
      title: "DevOps",
      description: "Implementing CI/CD pipelines, containerization, and cloud infrastructure for reliable deployments.",
      technologies: ["Docker", "AWS Lambda", "CI/CD", "GitHub Actions"],
    },
    {
      title: "UI/UX Design",
      description: "Crafting intuitive user experiences with modern design systems and component libraries.",
      technologies: ["Responsive Design", "Material-UI", "Shadcn UI", "Figma"],
    },
    {
      title: "Product Management",
      description: "Leading product development from ideation to launch with agile methodologies and user-centric approach.",
      technologies: ["Agile", "Roadmap Planning", "Stripe Integration", "Analytics"],
    },
    {
      title: "Problem Solving",
      description: "Architecting efficient solutions for complex technical challenges with focus on performance and scalability.",
      technologies: ["Algorithm Design", "Performance Optimization", "System Architecture", "Debugging"],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden" style={{ height: '35vh', maxHeight: '35vh', minHeight: '300px' }}>
        <div className="absolute inset-0">
          <MountainBackground />
        </div>
        <div className="relative z-10 h-full max-w-6xl mx-auto flex items-center justify-between px-4">
          <div className="text-left flex-1">
            <h1 className="text-2xl md:text-4xl font-bold mb-2 text-white drop-shadow-lg">
              You Know I got this!
            </h1>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <img 
              src={profilePhoto} 
              alt="Arijit Bhardwaj" 
              className="w-48 h-48 lg:w-56 lg:h-56 object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-4 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className={`animate-fade-in-up stagger-${index + 1}`}>
                <StatCard {...stat} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center animate-fade-in">My Skill Set</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {skills.map((skill, index) => (
              <div key={index} className={`animate-fade-in-up stagger-${index + 1}`}>
                <SkillCard {...skill} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-card border-t border-border">
        <div className="max-w-6xl mx-auto flex justify-between items-center text-sm text-muted-foreground">
          <p>Made with 💛 by Arijit</p>
          <p>Email: arijit.bhardwaj@gmail.com</p>
        </div>
      </footer>
    </div>
  );
}
