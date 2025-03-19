
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavItemProps {
  label: string;
  href: string;
  active: boolean;
  onClick: () => void;
}

const NavItem = ({ label, href, active, onClick }: NavItemProps) => (
  <li>
    <a
      href={href}
      className={cn(
        "nav-link",
        active && "active"
      )}
      onClick={onClick}
    >
      {label}
    </a>
  </li>
);

export default function Navbar() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = ["home", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a
              href="#home"
              className="text-xl font-bold tracking-tight transition-colors duration-200"
            >
              Renan Santos
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-8 items-center">
              <NavItem
                label={t("nav.home")}
                href="#home"
                active={activeSection === "home"}
                onClick={() => handleNavClick("home")}
              />
              <NavItem
                label={t("nav.about")}
                href="#about"
                active={activeSection === "about"}
                onClick={() => handleNavClick("about")}
              />
              <NavItem
                label={t("nav.projects")}
                href="#projects"
                active={activeSection === "projects"}
                onClick={() => handleNavClick("projects")}
              />
              <NavItem
                label={t("nav.contact")}
                href="#contact"
                active={activeSection === "contact"}
                onClick={() => handleNavClick("contact")}
              />
            </ul>
          </nav>

          {/* Theme and Language toggles */}
          <div className="hidden md:flex items-center space-x-2">
            <ThemeToggle />
            <LanguageToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <LanguageToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="ml-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-sm transition-all duration-300 ease-in-out transform",
          isMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-10"
        )}
        style={{ top: "4rem" }}
      >
        <nav className="h-full flex flex-col pt-8">
          <ul className="flex flex-col space-y-8 items-center text-xl">
            <NavItem
              label={t("nav.home")}
              href="#home"
              active={activeSection === "home"}
              onClick={() => handleNavClick("home")}
            />
            <NavItem
              label={t("nav.about")}
              href="#about"
              active={activeSection === "about"}
              onClick={() => handleNavClick("about")}
            />
            <NavItem
              label={t("nav.projects")}
              href="#projects"
              active={activeSection === "projects"}
              onClick={() => handleNavClick("projects")}
            />
            <NavItem
              label={t("nav.contact")}
              href="#contact"
              active={activeSection === "contact"}
              onClick={() => handleNavClick("contact")}
            />
          </ul>
        </nav>
      </div>
    </header>
  );
}
