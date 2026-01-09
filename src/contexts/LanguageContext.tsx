import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Language, languages, getLocalizedRoute, getLanguageFromPath } from '@/i18n';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  switchLanguage: () => void;
  getLocalizedPath: (targetLang: Language) => string;
  getLocalizedHref: (czPath: string) => string;
  languages: typeof languages;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  
  const [language, setLanguageState] = useState<Language>(() => 
    getLanguageFromPath(location.pathname)
  );

  // Sync language with URL on route changes
  useEffect(() => {
    const urlLang = getLanguageFromPath(location.pathname);
    if (urlLang !== language) {
      setLanguageState(urlLang);
    }
    // Always sync i18n with current language state
    if (i18n.language !== urlLang) {
      i18n.changeLanguage(urlLang);
    }
  }, [location.pathname, language, i18n]);

  const setLanguage = (lang: Language) => {
    if (lang === language) return;
    
    const newPath = getLocalizedRoute(location.pathname, lang);
    setLanguageState(lang);
    i18n.changeLanguage(lang);
    navigate(newPath);
  };

  const switchLanguage = () => {
    const newLang: Language = language === 'cs' ? 'en' : 'cs';
    setLanguage(newLang);
  };

  const getLocalizedPath = (targetLang: Language) => {
    return getLocalizedRoute(location.pathname, targetLang);
  };

  // Helper to get localized href from a Czech path
  const getLocalizedHref = useCallback((czPath: string) => {
    return getLocalizedRoute(czPath, language);
  }, [language]);

  return (
    <LanguageContext.Provider 
      value={{ 
        language, 
        setLanguage, 
        switchLanguage, 
        getLocalizedPath,
        getLocalizedHref,
        languages 
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
