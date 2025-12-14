import React, { createContext, useContext, ReactNode } from 'react';
import { translations, Language } from './translations';
import { useLocation } from "wouter";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [location, setLocation] = useLocation();
  
  // Derive language from URL
  // If path starts with /es, it's Spanish. Otherwise English.
  const isSpanish = location.startsWith('/es');
  const language: Language = isSpanish ? 'es' : 'en';

  const setLanguage = (lang: Language) => {
    if (lang === language) return;

    let newPath = location;
    if (lang === 'es') {
      // Switch to Spanish
      // e.g. /about -> /es/about
      // e.g. / -> /es
      if (location === '/') {
        newPath = '/es';
      } else {
        newPath = `/es${location}`;
      }
    } else {
      // Switch to English
      // e.g. /es/about -> /about
      // e.g. /es -> /
      newPath = location.replace(/^\/es/, '');
      if (newPath === '') newPath = '/';
    }
    setLocation(newPath);
  };

  const value = {
    language,
    setLanguage,
    t: translations[language],
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
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
