import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Monitor, GraduationCap } from "lucide-react";

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

function TimelineItem({
  type,
  title,
  organization,
  location,
  period,
  description,
  bullets,
  githubUrl,
}: TimelineItemProps) {
  const IconComponent = type === "employment" ? Monitor : GraduationCap;

  return (
    <div className="relative grid md:grid-cols-[1fr_auto_1fr] gap-8 mb-16">
      {/* Left side - Organization and Period */}
      <div className="md:text-right">
        <h3 className="text-xl font-semibold mb-2">{organization}</h3>
        <p className="text-sm text-muted-foreground mb-1">{period}</p>
        {location && (
          <p className="text-xs text-muted-foreground">{location}</p>
        )}
      </div>

      {/* Center - Timeline with Icon */}
      <div className="hidden md:flex flex-col items-center">
        <div className="w-0.5 h-8 bg-border"></div>
        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
          <IconComponent className="w-6 h-6 text-primary-foreground" />
        </div>
        <div className="w-0.5 flex-1 bg-border"></div>
      </div>

      {/* Right side - Title and Details */}
      <div>
        <div className="mb-4">
          <h4 className="text-lg font-semibold text-primary mb-2">{title}</h4>
          {description && (
            <p className="text-sm text-muted-foreground mb-3 italic">
              {description}
            </p>
          )}
        </div>

        <ul className="space-y-2 mb-4">
          {bullets.map((bullet, index) => (
            <li key={index} className="text-sm flex gap-2">
              <span className="text-primary mt-1">◦</span>
              <span className="flex-1">{bullet}</span>
            </li>
          ))}
        </ul>

        {githubUrl && (
          <Button
            variant="outline"
            size="sm"
            className="gap-2 border-primary text-primary hover:bg-primary/10"
            asChild
            data-testid="button-work-samples"
          >
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              WORK SAMPLES
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        )}
      </div>

      {/* Mobile layout - simplified */}
      <div className="md:hidden absolute left-0 top-0 flex items-start gap-3">
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <IconComponent className="w-5 h-5 text-primary-foreground" />
          </div>
          <div className="w-0.5 h-full bg-border mt-2"></div>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const hobbies = [
    "Binge Watch animes",
    "basketball",
    "table tennis",
    "badminton",
  ];

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
      type: "education",
      title: "Diploma in Computer Systems Technology",
      organization: "Vancouver Community College",
      location: "Vancouver, BC",
      period: "Sep 2023 - Jun 2025",
      description: "Comprehensive full-stack development program",
      bullets: [
        "Focused on modern web technologies, cloud computing, and software engineering best practices",
        "Built multiple real-world projects including AR applications, indoor navigation systems, and collaborative platforms",
      ],
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
      title: "Bachelor of Technology in Textile Technology",
      organization: "Indian Institute of Technology, Delhi",
      location: "New Delhi, India",
      period: "Graduated 2018",
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
        <div className="relative z-10 text-center px-8">
          <div className="mb-6">
            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-primary shadow-xl">
              <div className="w-full h-full bg-gradient-to-br from-primary/30 to-primary/50 flex items-center justify-center text-5xl font-bold text-primary">
                AB
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Technology Enthusiast
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building scalable solutions and pushing the boundaries of what's
            possible with code
          </p>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-16 px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">About Me</h2>
          <p className="text-lg text-muted-foreground mb-8">My Kind of Story</p>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">My Hobbies</h3>
            <div className="flex flex-wrap gap-3">
              {hobbies.map((hobby) => (
                <Button
                  key={hobby}
                  variant="outline"
                  className="rounded-full border-2 border-primary text-primary hover:bg-primary/10 px-6 py-2"
                  data-testid={`badge-hobby-${hobby.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {hobby}
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-6 text-base md:text-lg leading-relaxed">
            <p>
              Hello my name is Arijit Bhardwaj and I am a Software Engineer. I
              love developing full fledged web and mobile applications. One
              thing I have improved over time in me, is not giving up, if I want
              to achieve a milestone, and I don't know how to do it, I will be
              honest to myself and I'll dedicate more time to explore and learn.
              But that's what we do in real life right ? I may be blunt or
              straight forward, but I am loyal, if I chose you then I will be
              there for you for 24 hours, because that's what I do. Challenges
              excite me, staying idle frights me!
            </p>
          </div>
        </div>
      </section>

      {/* Journey Section with Timeline */}
      <section className="py-16 px-8 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-12 text-center">
            My Journey
          </h2>

          <div className="relative">
            {timeline.map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "TypeScript",
                  "Next.js",
                  "Tailwind CSS",
                  "Three.js",
                ].map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-primary/10 text-primary"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Node.js",
                  "Express",
                  "Firebase",
                  "PostgreSQL",
                  "REST APIs",
                ].map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-primary/10 text-primary"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">DevOps & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {["Docker", "AWS", "GitHub Actions", "Git", "Linux"].map(
                  (skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-primary/10 text-primary"
                    >
                      {skill}
                    </Badge>
                  ),
                )}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">XR Development</h3>
              <div className="flex flex-wrap gap-2">
                {["AR Foundation", "Unity", "Vuforia", "WebXR"].map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-primary/10 text-primary"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
