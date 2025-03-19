
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
  Terminal,
  Palette,
  Briefcase,
  BookOpen,
  Cpu,
  BadgeCheck,
  LucideIcon
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface Skill {
  name: string;
  icon: React.ReactNode;
  level?: "beginner" | "intermediate" | "advanced" | "expert";
}

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  skills?: string[];
}

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

  const skills: Skill[] = [
    { name: "JavaScript", icon: <Code2 size={20} />, level: "expert" },
    { name: "React", icon: <Layers size={20} />, level: "expert" },
    { name: "TypeScript", icon: <Terminal size={20} />, level: "expert" },
    { name: "HTML/CSS", icon: <Layout size={20} />, level: "expert" },
    { name: "Node.js", icon: <Server size={20} />, level: "advanced" },
    { name: "Next.js", icon: <Cpu size={20} />, level: "expert" },
    { name: "SQL/NoSQL", icon: <Database size={20} />, level: "intermediate" },
    { name: "UI/UX Design", icon: <Figma size={20} />, level: "intermediate" },
    { name: "Responsive Design", icon: <Globe size={20} />, level: "expert" },
    { name: "Design Systems", icon: <Palette size={20} />, level: "advanced" },
    { name: "Testing", icon: <BookOpen size={20} />, level: "advanced" },
    { name: "Git/GitHub", icon: <Briefcase size={20} />, level: "expert" },
  ];

  const experiences: Experience[] = [
    {
      role: "Tech Lead",
      company: "Agência VOBOX",
      period: "Feb 2021 - Present",
      description: "Leading software development with a focus on standardization, quality, and innovation for corporate websites and ecommerce platforms.",
      skills: ["React", "Next.js", "TypeScript", "Node.js"]
    },
    {
      role: "Frontend Engineer",
      company: "LOFT (Real Estate Technology)",
      period: "Jun 2022 - Jan 2023",
      description: "Worked with real estate software development, focusing on responsive, accessible web applications using modern frontend technologies.",
      skills: ["React", "TypeScript", "Testing", "Design Systems"]
    },
    {
      role: "Frontend Engineer",
      company: "TOTVS (Enterprise Solutions)",
      period: "Nov 2020 - Jun 2022",
      description: "Developed frontend solutions for enterprise software, implementing responsive interfaces and improving user experience.",
      skills: ["React", "JavaScript", "CSS", "UI/UX"]
    },
    {
      role: "Web Developer",
      company: "Conectcar (Mobility Solutions)",
      period: "May 2019 - Nov 2020",
      description: "Built web applications for mobility solutions, focusing on frontend development with a user-centric approach.",
      skills: ["JavaScript", "HTML/CSS", "React"]
    },
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
            <div className="flex flex-col md:flex-row gap-10 items-start md:items-center animate-on-scroll" style={{ "--animation-delay": "0.1s" } as React.CSSProperties}>
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                <Avatar className="w-full h-full">
                  <AvatarImage src="https://github.com/renanfrontend.png" alt="Renan Santos" />
                  <AvatarFallback>RS</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Renan Augusto Santos</h3>
                <p className="text-primary font-medium mb-4">Tech Lead & Frontend Engineer</p>
                <p className="text-lg leading-relaxed mb-4">
                  {t("about.background")}
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-primary/10">São Paulo, Brazil</Badge>
                  <Badge variant="outline" className="bg-primary/10">8+ Years Experience</Badge>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll" style={{ "--animation-delay": "0.2s" } as React.CSSProperties}>
              <h3 className="text-2xl font-semibold mb-6">{t("about.skills")}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-3 rounded-lg glass-card transition-all duration-300 hover:scale-105"
                  >
                    {skill.icon}
                    <span>{skill.name}</span>
                    {skill.level === "expert" && (
                      <BadgeCheck size={16} className="text-primary ml-auto" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-on-scroll" style={{ "--animation-delay": "0.3s" } as React.CSSProperties}>
              <h3 className="text-2xl font-semibold mb-6">{t("about.experience")}</h3>
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-primary/30 pb-8 last:pb-0">
                    <div className="absolute -left-[9px] top-0">
                      <div className="w-4 h-4 rounded-full bg-primary"></div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                      <div>
                        <h4 className="text-xl font-medium">{exp.role}</h4>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground mt-1 sm:mt-0">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-3">
                      {exp.description}
                    </p>
                    {exp.skills && (
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <Badge key={i} variant="outline" className="bg-primary/5">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-on-scroll" style={{ "--animation-delay": "0.4s" } as React.CSSProperties}>
              <h3 className="text-2xl font-semibold mb-6">{t("about.education")}</h3>
              
              <div className="relative pl-8 border-l-2 border-primary/30">
                <div className="absolute -left-[9px] top-0">
                  <div className="w-4 h-4 rounded-full bg-primary"></div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <div>
                    <h4 className="text-xl font-medium">{t("about.education1")}</h4>
                    <p className="text-primary font-medium">{t("about.education1Location")}</p>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground mt-1 sm:mt-0">
                    <Calendar size={16} />
                    <span>{t("about.education1Date")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
