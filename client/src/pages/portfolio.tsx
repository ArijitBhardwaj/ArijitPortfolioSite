import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import proactivlyImg from "@assets/stock_images/ai_chatbot_assistant_4c4bcf7e.jpg";
import fursightImg from "@assets/stock_images/e-commerce_online_sh_2188a8e9.jpg";
import arFurnitureImg from "@assets/stock_images/augmented_reality_ar_ba8edd51.jpg";
import naviGoImg from "@assets/stock_images/indoor_navigation_gp_b2c41418.jpg";
import collaborativeNotesImg from "@assets/stock_images/collaboration_teamwo_62b6b743.jpg";
import vrTrainingImg from "@assets/stock_images/virtual_reality_vr_h_b02ada41.jpg";
import overrunGameImg from "@assets/stock_images/mobile_game_smartpho_fe1880b6.jpg";
import arBusinessCardImg from "@assets/stock_images/augmented_reality_bu_72fa92f4.jpg";
import postingAppImg from "@assets/stock_images/social_media_app_sma_6aa4cba3.jpg";
import wordSaberImg from "@assets/stock_images/vr_virtual_reality_e_48e343e9.jpg";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

function ProjectCard({ title, description, technologies, githubUrl, liveUrl, image }: ProjectCardProps) {
  const titleSlug = title.toLowerCase().replace(/\s+/g, '-');
  return (
    <Card className="hover-elevate active-elevate-2 transition-all duration-300 flex flex-col h-full group" data-testid={`card-project-${titleSlug}`}>
      {/* Project Image */}
      <div className="aspect-[4/3] overflow-hidden border-b border-border rounded-t-xl" data-testid={`img-project-${titleSlug}`}>
        {image ? (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 flex items-center justify-center transition-all duration-300 group-hover:from-primary/30 group-hover:via-primary/15 group-hover:to-primary/10">
            <div className="text-7xl md:text-8xl font-bold text-primary/40 transition-all duration-300 group-hover:text-primary/60 group-hover:scale-110">{title.charAt(0)}</div>
          </div>
        )}
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-xl md:text-2xl font-bold mb-4" data-testid={`text-project-title-${titleSlug}`}>{title}</h3>
        <p className="text-base text-muted-foreground mb-5 flex-grow leading-relaxed" data-testid={`text-project-desc-${titleSlug}`}>
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-5">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="bg-primary/10 text-primary hover:bg-primary/20 font-mono text-xs px-3 py-1"
              data-testid={`badge-project-${titleSlug}-tech-${tech.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {tech}
            </Badge>
          ))}
        </div>
        
        <div className="flex flex-col gap-2">
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm text-muted-foreground hover:text-primary underline flex items-center gap-1"
              data-testid={`link-github-${titleSlug}`}
            >
              Github URL
            </a>
          )}
          {liveUrl && (
            <Button
              variant="default"
              size="sm"
              className="gap-2 w-full"
              asChild
              data-testid={`button-live-${titleSlug}`}
            >
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" />
                Preview
              </a>
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}

export default function Portfolio() {
  const projects: ProjectCardProps[] = [
    {
      title: "Proactivly",
      description: "An AI-powered business chatbot that guides entrepreneurs from raw ideas to structured business models through conversational AI with context-aware memory and analytics dashboard.",
      technologies: ["React", "TypeScript", "Node.js", "Express", "Firebase", "Gemini API"],
      githubUrl: "https://github.com/ArijitBhardwaj",
      image: proactivlyImg,
    },
    {
      title: "Fursight",
      description: "AI content automation platform for e-commerce merchants that generates SEO-optimized blogs and Pinterest pins from research documents using RAG and semantic search.",
      technologies: ["React", "TypeScript", "Qdrant", "Gemini API", "Shopify", "Pinterest API"],
      githubUrl: "https://github.com/ArijitBhardwaj",
      image: fursightImg,
    },
    {
      title: "AR Furniture Showcase",
      description: "Augmented reality application for realistic virtual furniture placement with accurate scaling, occlusion, and lighting using ARKit/ARCore integration.",
      technologies: ["Unity", "AR Foundation", "Blender", "C#"],
      githubUrl: "https://github.com/ArijitBhardwaj/TeamXRProject",
      image: arFurnitureImg,
    },
    {
      title: "NaviGo",
      description: "Real-time indoor navigation web app providing turn-by-turn directions via QR calibration and device sensors with optimized A* pathfinding algorithm.",
      technologies: ["React", "Material-UI", "Node.js", "Firebase", "A* Algorithm"],
      githubUrl: "https://github.com/ArijitBhardwaj",
      image: naviGoImg,
    },
    {
      title: "Collaborative Notes",
      description: "Multi-platform note-taking app with sub-second real-time collaboration across web and Chrome extension using Socket.IO and role-based access control.",
      technologies: ["React", "Node.js", "Socket.IO", "AWS DynamoDB", "Chrome Extension"],
      githubUrl: "https://github.com/ArijitBhardwaj",
      image: collaborativeNotesImg,
    },
    {
      title: "Virtual Reality Industrial Training",
      description: "Immersive VR training simulation platform designed to provide hands-on learning experiences in virtual environments with interactive scenarios and real-time feedback.",
      technologies: ["Unity", "C#", "VR SDK", "3D Modeling", "Oculus"],
      githubUrl: "https://github.com/ArijitBhardwaj",
      image: vrTrainingImg,
    },
    {
      title: "OverRun Android Game",
      description: "Action-packed Android endless runner game featuring dynamic obstacle generation, progressive difficulty scaling, power-ups, and leaderboard integration for competitive gameplay.",
      technologies: ["Java", "Android SDK", "SQLite", "Canvas API", "Game Development"],
      githubUrl: "https://github.com/Travis975/Team-Null-CSTP2205-Android-Programming",
      image: overrunGameImg,
    },
    {
      title: "AR Business Card",
      description: "Innovative augmented reality business card experience that displays interactive 3D models and portfolio content when scanned, creating memorable networking moments.",
      technologies: ["Unity", "AR Foundation", "Vuforia", "C#", "3D Modeling"],
      githubUrl: "https://github.com/ArijitBhardwaj/AR_Business_Card",
      image: arBusinessCardImg,
    },
    {
      title: "Posting App",
      description: "Modern social media platform inspired by Threads with real-time posting, following system, personalized feed algorithm, and engaging user interactions.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.IO", "Express", "JWT"],
      githubUrl: "https://github.com/lordbomebob/Posting_App",
      image: postingAppImg,
    },
    {
      title: "Word Saber VR",
      description: "Immersive VR word-slicing game combining rhythm-based mechanics with language learning, featuring gesture recognition and adaptive difficulty for engaging educational gameplay.",
      technologies: ["Unity", "C#", "VR SDK", "Oculus Integration", "Motion Tracking"],
      githubUrl: "https://github.com/ArijitBhardwaj/TeamXRProject",
      image: wordSaberImg,
    },
  ];

  return (
    <div className="min-h-screen pb-16">
      {/* Header Section */}
      <section className="py-16 px-8 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Portfolio</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in-up stagger-1">
            From engineering roots at IIT Delhi to co-founding an AI SaaS startup, software development has been my greatest pivot yet. These 10+ projects span full-stack web apps, augmented and virtual reality experiences, AI-powered platforms, and mobile games. Every build sharpened a new edge. Every challenge was worth showing up for.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
            {projects.map((project, index) => (
              <div key={index} className={`animate-fade-in-up stagger-${(index % 10) + 1}`}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 bg-card border-t border-border">
        <div className="max-w-6xl mx-auto flex justify-between items-center text-sm text-muted-foreground">
          <p>Made with 💛 by Arijit</p>
          <p>Email: arijit.bhardwaj@gmail.com</p>
        </div>
      </footer>
    </div>
  );
}
