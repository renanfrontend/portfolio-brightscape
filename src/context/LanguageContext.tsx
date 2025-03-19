
import { createContext, useContext, useState, useEffect } from "react";
import enTranslations from "../locales/en";
import ptTranslations from "../locales/pt";

export type Language = "en" | "pt";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

// Define a recursive type for nested translations
interface TranslationValue {
  [key: string]: string | TranslationValue;
}

interface Translations {
  [key: string]: TranslationValue;
}

const translations: Translations = {
  en: enTranslations,
  pt: ptTranslations,
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    // Check if window is defined (browser environment)
    if (typeof window !== "undefined") {
      // Check local storage
      const savedLanguage = localStorage.getItem("language") as Language;
      if (savedLanguage) return savedLanguage;

      // Check browser language
      const browserLanguage = navigator.language.split("-")[0];
      if (browserLanguage === "pt") return "pt";
    }
    
    return "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    const keys = key.split(".");
    let translation: any = translations[language];
    
    for (const k of keys) {
      if (!translation[k]) {
        console.warn(`Translation not found for key: ${key}`);
        return key;
      }
      translation = translation[k];
    }
    
    return translation as string;
  };

  const value = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  
  return context;
}
