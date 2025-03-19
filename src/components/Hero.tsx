
import { useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
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

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      ref={containerRef}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent dark:from-primary/10 dark:to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div
            className="animate-on-scroll"
            style={{ "--animation-delay": "0s" } as React.CSSProperties}
          >
            <p className="text-lg md:text-xl mb-2 text-muted-foreground">
              {t("hero.greeting")}
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Renan Santos
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              {t("hero.title")}
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              {t("hero.description")}
            </p>
          </div>

          <div
            className="flex flex-col sm:flex-row items-center gap-4 animate-on-scroll"
            style={{ "--animation-delay": "0.2s" } as React.CSSProperties}
          >
            <Button
              size="lg"
              className="rounded-full px-8 transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="#projects">{t("hero.cta")}</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="#contact">{t("hero.contact")}</a>
            </Button>
          </div>

          <div
            className="flex gap-4 mt-10 animate-on-scroll"
            style={{ "--animation-delay": "0.4s" } as React.CSSProperties}
          >
            <a
              href="https://github.com/renanfrontend"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full transition-all duration-300 hover:bg-accent"
              aria-label="GitHub"
            >
              <Github size={24} className="text-foreground" />
            </a>
            <a
              href="https://linkedin.com/in/renan-augusto-santos"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full transition-all duration-300 hover:bg-accent"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} className="text-foreground" />
            </a>
            <a
              href="mailto:contact@example.com"
              className="p-3 rounded-full transition-all duration-300 hover:bg-accent"
              aria-label="Email"
            >
              <Mail size={24} className="text-foreground" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          className="p-2 rounded-full bg-background/80 dark:bg-background/50 backdrop-blur-sm shadow-md flex items-center justify-center"
          aria-label="Scroll down"
        >
          <ArrowDown size={24} className="text-primary" />
        </a>
      </div>
    </section>
  );
}
