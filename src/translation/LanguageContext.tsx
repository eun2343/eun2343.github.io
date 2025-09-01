import React, { createContext, useState } from "react";
import type { ReactNode } from "react";
import { en } from "./en";
import { de } from "./de";

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

  const translations = language === "en" ? en : de;

  return (
    <LanguageContext.Provider value={{ language, translations, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
