
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full w-9 h-9 hover:bg-accent transition-all duration-300"
          aria-label="Change language"
        >
          <Globe size={20} className="transition-transform duration-300 ease-in-out" />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="glass-card rounded-xl border-white/20 dark:border-white/10 min-w-32"
      >
        <DropdownMenuItem
          className={`cursor-pointer transition-colors ${
            language === "en" ? "text-primary font-semibold" : ""
          }`}
          onClick={() => {
            setLanguage("en");
            setIsOpen(false);
          }}
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem
          className={`cursor-pointer transition-colors ${
            language === "pt" ? "text-primary font-semibold" : ""
          }`}
          onClick={() => {
            setLanguage("pt");
            setIsOpen(false);
          }}
        >
          Português
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
