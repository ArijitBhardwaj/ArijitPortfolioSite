import { useState, useEffect, useRef } from "react";
import { MountainBackground } from "@/components/mountain-background";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, FolderGit2, Users } from "lucide-react";
import profilePhoto from "@assets/linkin..myb_1761849483072.png";

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuad = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOutQuad * end));

      if (progress === 1) {
        clearInterval(timer);
        setCount(end);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [hasStarted, end, duration]);

  return { count, elementRef };
}

function StatCard({ icon, value, label }: StatCardProps) {
  const numericValue = parseInt(value.replace(/\D/g, ''));
  const suffix = value.replace(/\d/g, '');
  const { count, elementRef } = useCountUp(numericValue, 1500);

  return (
    <Card 
      ref={elementRef}
      className="p-3 text-center hover-elevate transition-all duration-300" 
      data-testid={`card-stat-${label.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="flex justify-center mb-1.5">{icon}</div>
      <div className="text-2xl font-bold text-primary mb-0.5" data-testid={`text-stat-value-${label.toLowerCase().replace(/\s+/g, '-')}`}>
        {count}{suffix}
      </div>
      <div className="text-[10px] uppercase tracking-wide text-muted-foreground" data-testid={`text-stat-label-${label.toLowerCase().replace(/\s+/g, '-')}`}>{label}</div>
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
    <Card className="p-4 hover-elevate transition-all duration-300 flex flex-col h-full" data-testid={`card-skill-${titleSlug}`}>
      <h3 className="text-base font-semibold mb-2" data-testid={`text-skill-title-${titleSlug}`}>{title}</h3>
      <p className="text-xs text-muted-foreground mb-2.5 flex-grow leading-relaxed" data-testid={`text-skill-desc-${titleSlug}`}>{description}</p>
      <div className="flex flex-wrap gap-1.5">
        {technologies.map((tech) => (
          <Badge
            key={tech}
            variant="secondary"
            className="bg-primary text-primary-foreground text-[10px] px-2 py-0.5"
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
    { icon: <Briefcase className="w-8 h-8 text-primary" />, value: "2+", label: "Industry Experience" },
    { icon: <FolderGit2 className="w-8 h-8 text-primary" />, value: "10+", label: "Completed Projects" },
    { icon: <Users className="w-8 h-8 text-primary" />, value: "3+", label: "Companies Worked" },
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
      <section className="relative w-full overflow-hidden" style={{ height: '25vh', maxHeight: '25vh', minHeight: '250px' }}>
        <div className="absolute inset-0">
          <MountainBackground />
        </div>
        <div className="relative z-10 h-full max-w-6xl mx-auto flex items-center justify-between px-4">
          <div className="text-left flex-1">
            <h1 className="text-xl md:text-3xl font-bold mb-2 text-white drop-shadow-lg">
              You Know I got this!
            </h1>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <img 
              src={profilePhoto} 
              alt="Arijit Bhardwaj" 
              className="w-40 h-40 lg:w-44 lg:h-44 object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-3 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {stats.map((stat, index) => (
              <div key={index} className={`animate-fade-in-up stagger-${index + 1}`}>
                <StatCard {...stat} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-6 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center animate-fade-in">My Skill Set</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
