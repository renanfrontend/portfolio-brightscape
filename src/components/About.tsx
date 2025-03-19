
import { useLanguage } from "@/context/LanguageContext";
import { useEffect, useRef } from "react";
import { 
  Calendar, 
  Code2, 
  Database, 
  Figma, 
  Globe, 
  Layout, 
  Layers, 
  Server, 
  Settings, 
  Terminal
} from "lucide-react";

export default function About() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

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

  const skills = [
    { name: "HTML/CSS", icon: <Layout size={20} /> },
    { name: "JavaScript", icon: <Code2 size={20} /> },
    { name: "TypeScript", icon: <Terminal size={20} /> },
    { name: "React", icon: <Layers size={20} /> },
    { name: "Next.js", icon: <Server size={20} /> },
    { name: "Node.js", icon: <Settings size={20} /> },
    { name: "SQL/NoSQL", icon: <Database size={20} /> },
    { name: "UI/UX Design", icon: <Figma size={20} /> },
    { name: "Responsive Design", icon: <Globe size={20} /> },
  ];

  return (
    <section id="about" className="py-20 md:py-32 overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll" style={{ "--animation-delay": "0s" } as React.CSSProperties}>
            <h2 className="section-title">{t("about.title")}</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("about.description")}
            </p>
          </div>

          <div className="space-y-16">
            <div className="animate-on-scroll" style={{ "--animation-delay": "0.1s" } as React.CSSProperties}>
              <p className="text-lg leading-relaxed mb-6">
                {t("about.background")}
              </p>
            </div>

            <div className="animate-on-scroll" style={{ "--animation-delay": "0.2s" } as React.CSSProperties}>
              <h3 className="text-2xl font-semibold mb-6">{t("about.skills")}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-3 rounded-lg glass-card transition-all duration-300 hover:scale-105"
                  >
                    {skill.icon}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-on-scroll" style={{ "--animation-delay": "0.3s" } as React.CSSProperties}>
              <h3 className="text-2xl font-semibold mb-6">{t("about.experience")}</h3>
              
              <div className="space-y-8">
                <div className="relative pl-8 border-l-2 border-primary/30 pb-8">
                  <div className="absolute -left-[9px] top-0">
                    <div className="w-4 h-4 rounded-full bg-primary"></div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h4 className="text-xl font-medium">{t("about.currentRole")}</h4>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Calendar size={16} />
                      <span>{t("about.currentRoleDate")}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    {t("about.currentRoleDescription")}
                  </p>
                </div>

                <div className="relative pl-8 border-l-2 border-primary/30 pb-8">
                  <div className="absolute -left-[9px] top-0">
                    <div className="w-4 h-4 rounded-full bg-primary"></div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h4 className="text-xl font-medium">{t("about.previousRole")}</h4>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Calendar size={16} />
                      <span>{t("about.previousRoleDate")}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    {t("about.previousRoleDescription")}
                  </p>
                </div>

                <div className="relative pl-8 border-l-2 border-primary/30">
                  <div className="absolute -left-[9px] top-0">
                    <div className="w-4 h-4 rounded-full bg-primary"></div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h4 className="text-xl font-medium">{t("about.earlierRole")}</h4>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Calendar size={16} />
                      <span>{t("about.earlierRoleDate")}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    {t("about.earlierRoleDescription")}
                  </p>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll" style={{ "--animation-delay": "0.4s" } as React.CSSProperties}>
              <h3 className="text-2xl font-semibold mb-6">{t("about.education")}</h3>
              
              <div className="relative pl-8 border-l-2 border-primary/30">
                <div className="absolute -left-[9px] top-0">
                  <div className="w-4 h-4 rounded-full bg-primary"></div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h4 className="text-xl font-medium">{t("about.education1")}</h4>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Calendar size={16} />
                    <span>{t("about.education1Date")}</span>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  {t("about.education1Location")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
