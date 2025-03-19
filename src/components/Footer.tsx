
import { useLanguage } from "@/context/LanguageContext";
import { Heart } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground text-sm">
              &copy; {currentYear} Renan Santos. {t("footer.rights")}
            </p>
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <span>{t("footer.madeWith")}</span>
            <Heart size={14} className="mx-1 text-red-500" />
            <span>React, TypeScript & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
