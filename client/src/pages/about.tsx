import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar, MapPin } from "lucide-react";

interface TimelineItemProps {
  type: "employment" | "education";
  title: string;
  organization: string;
  location?: string;
  period: string;
  description: string;
  bullets: string[];
  githubUrl?: string;
}

function TimelineItem({ type, title, organization, location, period, description, bullets, githubUrl }: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-12 last:pb-0">
      {/* Timeline line and dot */}
      <div className="absolute left-0 top-2 bottom-0 w-0.5 bg-border" />
      <div className="absolute left-[-7px] top-2 w-4 h-4 rounded-full bg-primary border-4 border-background" />
      
      <Card className="p-6 hover-elevate transition-all duration-300">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <h3 className="text-xl font-semibold mb-1">{organization}</h3>
            <p className="text-primary font-medium">{title}</p>
          </div>
          <div className="flex flex-col items-end gap-1">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>{period}</span>
            </div>
            {location && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>{location}</span>
              </div>
            )}
          </div>
        </div>
        
        {description && <p className="text-sm text-muted-foreground mb-4 italic">{description}</p>}
        
        <ul className="space-y-2 mb-4">
          {bullets.map((bullet, index) => (
            <li key={index} className="text-sm flex gap-2">
              <span className="text-primary mt-1.5">•</span>
              <span className="flex-1">{bullet}</span>
            </li>
          ))}
        </ul>
        
        {githubUrl && (
          <Button
            variant="outline"
            size="sm"
            className="gap-2"
            asChild
            data-testid="button-work-samples"
          >
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4" />
              Work Samples
            </a>
          </Button>
        )}
      </Card>
    </div>
  );
}

export default function About() {
  const hobbies = ["Coding", "Learning", "Travel", "Technology"];

  const timeline: TimelineItemProps[] = [
    {
      type: "employment",
      title: "Co-Founder & Full Stack Developer",
      organization: "Proactivly AI",
      location: "Mississauga, ON (Remote)",
      period: "Jul 2025 - Present",
      description: "Building an AI SaaS for interactive business-plan creation",
      bullets: [
        "Architected Firebase-based backend (Auth, Firestore, Storage) and Gemini integrations (Flash Lite/Pro/TTS)",
        "Implemented Stripe subscriptions with tiered access, coupons, invoicing; CI/CD via GitHub Actions",
        "Led roadmap alignment, UX design, and technical documentation",
      ],
      githubUrl: "https://github.com/ArijitBhardwaj",
    },
    {
      type: "employment",
      title: "Web Developer",
      organization: "Mori Cat",
      location: "Kingston, ON (Remote)",
      period: "Oct 2024 - Present",
      description: "Maintaining e-commerce site and building automation tools",
      bullets: [
        "Improved SEO and performance; integrated Shopify stores and analytics",
        "Built in-house automation tools for product/blog sync and Pinterest/Shopify workflows",
      ],
      githubUrl: "https://github.com/ArijitBhardwaj",
    },
    {
      type: "employment",
      title: "Head of Operations",
      organization: "Travvir",
      location: "Noida, India (Hybrid)",
      period: "Sep 2019 - Jun 2023",
      description: "Leading operations and digital marketing initiatives",
      bullets: [
        "Improved customer retention by 15% via feedback loops and targeted personalization",
        "Managed Google Ads end-to-end; increased conversions by 20% while reducing CPA",
      ],
    },
    {
      type: "education",
      title: "Diploma in Computer Systems Technology",
      organization: "Vancouver Community College",
      location: "Vancouver, BC",
      period: "Expected Jun 2025",
      description: "Comprehensive full-stack development program",
      bullets: [
        "Focused on modern web technologies, cloud computing, and software engineering best practices",
        "Built multiple real-world projects including AR applications, indoor navigation systems, and collaborative platforms",
      ],
    },
    {
      type: "education",
      title: "Bachelor of Technology in Textile Technology",
      organization: "Indian Institute of Technology, Delhi",
      location: "New Delhi, India",
      period: "Aug 2013 - May 2020",
      description: "Engineering foundation with data structures and algorithms",
      bullets: [
        "Developed strong analytical and problem-solving skills through rigorous engineering curriculum",
        "Gained experience with programming fundamentals, mathematics, and systematic thinking",
      ],
    },
  ];

  return (
    <div className="min-h-screen pb-16">
      {/* Hero Section */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/20 via-background to-primary/10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-40" />
        <div className="relative z-10 text-center px-4">
          <div className="mb-6">
            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-primary shadow-xl">
              <div className="w-full h-full bg-gradient-to-br from-primary/30 to-primary/50 flex items-center justify-center text-5xl font-bold text-primary">
                AB
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Technology Enthusiast</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building scalable solutions and pushing the boundaries of what's possible with code
          </p>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">About Me</h2>
          <Card className="p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">My Kind of Story</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hello, my name is Arijit Bhardwaj and I am a Full Stack Developer. I love building scalable applications 
                with modern web technologies and exploring new frontiers in XR and AI. The journey I've taken to get here 
                has been one of continuous learning and growth.
              </p>
              <p>
                One thing I have improved over time is not just technical skills, but also the ability to understand user needs 
                and translate them into elegant solutions. I don't chase perfection without purpose—I chase meaningful impact. 
                If I want to achieve something meaningful, I dedicate the time to explore, learn, and iterate. But that's what 
                drives me in real life, right? Challenges excite me, staying stagnant frustrates me.
              </p>
            </div>
          </Card>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">My Hobbies</h3>
            <div className="flex flex-wrap gap-3">
              {hobbies.map((hobby) => (
                <Badge
                  key={hobby}
                  className="px-4 py-2 text-sm bg-primary/10 text-primary hover:bg-primary/20"
                  data-testid={`badge-hobby-${hobby.toLowerCase()}`}
                >
                  {hobby}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-16 px-4 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-12">My Journey</h2>
          
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <span className="text-primary">💼</span> Current Employment
            </h3>
            <div className="space-y-0">
              {timeline.slice(0, 2).map((item, index) => (
                <TimelineItem key={index} {...item} />
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <span className="text-primary">📋</span> Former Employment
            </h3>
            <div className="space-y-0">
              {timeline.slice(2, 3).map((item, index) => (
                <TimelineItem key={index} {...item} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <span className="text-primary">🎓</span> Education
            </h3>
            <div className="space-y-0">
              {timeline.slice(3).map((item, index) => (
                <TimelineItem key={index} {...item} />
              ))}
            </div>
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
