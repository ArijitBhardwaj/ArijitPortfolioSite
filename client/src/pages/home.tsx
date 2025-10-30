import { MountainBackground } from "@/components/mountain-background";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, FolderGit2, Users, GraduationCap } from "lucide-react";

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

function StatCard({ icon, value, label }: StatCardProps) {
  return (
    <Card className="p-6 text-center hover-elevate transition-all duration-300" data-testid={`card-stat-${label.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="flex justify-center mb-3">{icon}</div>
      <div className="text-4xl font-bold text-primary mb-2" data-testid={`text-stat-value-${label.toLowerCase().replace(/\s+/g, '-')}`}>{value}</div>
      <div className="text-sm uppercase tracking-wide text-muted-foreground" data-testid={`text-stat-label-${label.toLowerCase().replace(/\s+/g, '-')}`}>{label}</div>
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
    <Card className="p-6 hover-elevate transition-all duration-300 flex flex-col h-full" data-testid={`card-skill-${titleSlug}`}>
      <h3 className="text-xl font-semibold mb-3" data-testid={`text-skill-title-${titleSlug}`}>{title}</h3>
      <p className="text-sm text-muted-foreground mb-4 flex-grow leading-relaxed" data-testid={`text-skill-desc-${titleSlug}`}>{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <Badge
            key={tech}
            variant="secondary"
            className="bg-primary/10 text-primary hover:bg-primary/20 font-mono text-xs"
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
    { icon: <Briefcase className="w-12 h-12 text-primary" />, value: "5+", label: "Years Experience" },
    { icon: <FolderGit2 className="w-12 h-12 text-primary" />, value: "10+", label: "Completed Projects" },
    { icon: <Users className="w-12 h-12 text-primary" />, value: "8+", label: "Companies Worked" },
    { icon: <GraduationCap className="w-12 h-12 text-primary" />, value: "2+", label: "Years Teaching" },
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
      <section className="relative h-[60vh] md:h-[65vh] flex items-center justify-center overflow-hidden">
        <MountainBackground />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-6">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-4 border-primary shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center text-5xl md:text-6xl font-bold text-primary">
                AB
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
            You Know I Got This!
          </h1>
          <p className="text-lg md:text-xl text-white/90 drop-shadow-md">
            Full Stack Developer | Problem Solver | Innovation Builder
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className={`animate-fade-in-up stagger-${index + 1}`}>
                <StatCard {...stat} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center animate-fade-in">My Skill Set</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            Made with ❤️ by Arijit
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Email: arijit.bhardwaj@gmail.com
          </p>
        </div>
      </footer>
    </div>
  );
}
