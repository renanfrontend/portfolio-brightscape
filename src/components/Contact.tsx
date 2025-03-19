
import { useLanguage } from "@/context/LanguageContext";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 md:py-32" ref={containerRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll" style={{ "--animation-delay": "0s" } as React.CSSProperties}>
          <h2 className="section-title">{t("contact.title")}</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("contact.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-on-scroll" style={{ "--animation-delay": "0.1s" } as React.CSSProperties}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium">
                  {t("contact.formName")}
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  {t("contact.formEmail")}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">
                  {t("contact.formMessage")}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full min-h-[150px]"
                />
              </div>

              <Button
                type="submit"
                className="w-full rounded-full"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? "Sending..."
                  : t("contact.formSubmit")}
              </Button>
            </form>
          </div>

          <div className="space-y-8 animate-on-scroll" style={{ "--animation-delay": "0.2s" } as React.CSSProperties}>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">
                {t("contact.contactInfo")}
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 mt-1 text-primary" />
                  <div>
                    <p className="font-medium">{t("contact.email")}</p>
                    <a
                      href="mailto:renan.santos@example.com"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      renan.santos@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 text-primary" />
                  <div>
                    <p className="font-medium">{t("contact.location")}</p>
                    <p className="text-muted-foreground">
                      {t("contact.locationValue")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 mt-1 text-primary" />
                  <div>
                    <p className="font-medium">{t("contact.phone")}</p>
                    <a
                      href="tel:+5511999999999"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      +55 11 99999-9999
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                {t("contact.linksTitle")}
              </h3>

              <div className="flex gap-4">
                <a
                  href="https://github.com/renanfrontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-accent transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/renan-augusto-santos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-accent transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:renan.santos@example.com"
                  className="p-3 rounded-full bg-accent transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
