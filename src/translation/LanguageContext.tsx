import React, { createContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import { en } from "./en";
import { de } from "./de";
import { useLocation } from "react-router-dom";

export type Language = "en" | "de";

export type Translations = typeof en;

interface LanguageContextType {
  language: Language;
  translations: Translations;
  setLanguage: (lang: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("en");
  const location = useLocation();

  // Keep language in sync with the first pathname segment (/en or /de)
  useEffect(() => {
    const firstSegment = location.pathname.split("/")[1];
    if (firstSegment === "en" || firstSegment === "de") {
      setLanguage(firstSegment as Language);
    }
  }, [location.pathname]);

  const translations = language === "en" ? en : de;

  return (
    <LanguageContext.Provider value={{ language, translations, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
