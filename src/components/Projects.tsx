
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  demo?: string;
}

export default function Projects() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      name: "Ignite Call",
      description: "A powerful scheduling application that integrates with Google Calendar, allowing users to manage appointments efficiently.",
      technologies: ["React", "Next.js", "TypeScript", "Prisma", "Google API"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3882&q=80",
      github: "https://github.com/renanfrontend/ignite-call",
      demo: "https://ignite-call-demo.vercel.app",
    },
    {
      id: 2,
      name: "DT Money",
      description: "A personal finance application for tracking income and expenses with interactive charts and transaction history.",
      technologies: ["React", "TypeScript", "Styled Components", "MirageJS"],
      image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      github: "https://github.com/renanfrontend/dt-money",
    },
    {
      id: 3,
      name: "Coffee Delivery",
      description: "An e-commerce application for a coffee shop with product listings, shopping cart, and checkout functionalities.",
      technologies: ["React", "TypeScript", "Context API", "React Hook Form"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3543&q=80",
      github: "https://github.com/renanfrontend/coffee-delivery",
      demo: "https://coffee-delivery-demo.vercel.app",
    },
    {
      id: 4,
      name: "Ignite Shop",
      description: "A modern e-commerce platform for clothing with Stripe integration for seamless payment processing.",
      technologies: ["Next.js", "TypeScript", "Stripe API", "Stitches"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=7952&q=80",
      github: "https://github.com/renanfrontend/ignite-shop",
      demo: "https://ignite-shop-demo.vercel.app",
    },
    {
      id: 5,
      name: "Ignite Timer",
      description: "A productivity tool based on the Pomodoro technique to improve focus and time management.",
      technologies: ["React", "TypeScript", "Styled Components", "Immer"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=6000&q=80",
      github: "https://github.com/renanfrontend/ignite-timer",
    },
    {
      id: 6,
      name: "GitHub Blog",
      description: "A blog platform that uses GitHub Issues as a CMS, allowing developers to write posts using Markdown.",
      technologies: ["React", "TypeScript", "GitHub API", "Axios"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=5530&q=80",
      github: "https://github.com/renanfrontend/github-blog",
    },
  ]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("appear");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = containerRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary/50 dark:bg-secondary/20" ref={containerRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll" style={{ "--animation-delay": "0s" } as React.CSSProperties}>
          <h2 className="section-title">{t("projects.title")}</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("projects.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="animate-on-scroll group"
              style={{ "--animation-delay": `${0.1 + index * 0.1}s` } as React.CSSProperties}
            >
              <div className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <div className="relative overflow-hidden aspect-video">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                  
                  <div className="mb-6">
                    <p className="text-sm font-medium mb-2">{t("projects.technologies")}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-1 rounded-full"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={16} />
                        <span>{t("projects.viewCode")}</span>
                      </a>
                    </Button>
                    
                    {project.demo && (
                      <Button
                        size="sm"
                        className="gap-1 rounded-full"
                        asChild
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={16} />
                          <span>{t("projects.viewProject")}</span>
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
