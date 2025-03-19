
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
      name: "E-commerce Dashboard",
      description: "A modern e-commerce dashboard with analytics, inventory management, and order tracking features.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80",
      github: "https://github.com/renanfrontend/ecommerce-dashboard",
    },
    {
      id: 2,
      name: "Social Media App",
      description: "A fully responsive social media application with real-time chat, user profiles, and post sharing.",
      technologies: ["React", "Firebase", "Styled Components", "Redux"],
      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      github: "https://github.com/renanfrontend/social-media-app",
      demo: "https://social-app-demo.example.com",
    },
    {
      id: 3,
      name: "Personal Finance Tracker",
      description: "A finance tracking application with expense categorization, budgeting, and visualization tools.",
      technologies: ["Next.js", "TypeScript", "Chart.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      github: "https://github.com/renanfrontend/finance-tracker",
      demo: "https://finance-tracker-demo.example.com",
    },
    {
      id: 4,
      name: "Weather Application",
      description: "A weather forecast application with location detection, 5-day forecasts, and weather alerts.",
      technologies: ["React", "OpenWeather API", "Geolocation API", "PWA"],
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      github: "https://github.com/renanfrontend/weather-app",
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
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
