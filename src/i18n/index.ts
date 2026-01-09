import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import locale files
import cs from './locales/cs.json';
import en from './locales/en.json';

// Language configuration
export const languages = {
  cs: { name: 'Čeština', shortName: 'CZ', flag: '🇨🇿' },
  en: { name: 'English', shortName: 'EN', flag: '🇬🇧' },
} as const;

export type Language = keyof typeof languages;

// Route mapping for language switching (CZ ↔ EN with fully English slugs)
export const routeMap: Record<string, Record<Language, string>> = {
  // Main pages
  '/': { cs: '/', en: '/en' },
  '/en': { cs: '/', en: '/en' },
  
  // B2B pages
  '/profirmy': { cs: '/profirmy', en: '/en/for-business' },
  '/en/for-business': { cs: '/profirmy', en: '/en/for-business' },
  '/profirmy/mapa-uspor': { cs: '/profirmy/mapa-uspor', en: '/en/for-business/savings-map' },
  '/en/for-business/savings-map': { cs: '/profirmy/mapa-uspor', en: '/en/for-business/savings-map' },
  '/profirmy/ai-agenti-na-miru': { cs: '/profirmy/ai-agenti-na-miru', en: '/en/for-business/custom-ai-agents' },
  '/en/for-business/custom-ai-agents': { cs: '/profirmy/ai-agenti-na-miru', en: '/en/for-business/custom-ai-agents' },
  
  // Team Academy
  '/akademie-pro-tymy': { cs: '/akademie-pro-tymy', en: '/en/team-academy' },
  '/en/team-academy': { cs: '/akademie-pro-tymy', en: '/en/team-academy' },
  
  // B2C pages - Online Academies
  '/online': { cs: '/online', en: '/en/online' },
  '/en/online': { cs: '/online', en: '/en/online' },
  '/online/master-of-ai-creativity': { cs: '/online/master-of-ai-creativity', en: '/en/online/master-of-ai-creativity' },
  '/en/online/master-of-ai-creativity': { cs: '/online/master-of-ai-creativity', en: '/en/online/master-of-ai-creativity' },
  '/online/chatgptakademie': { cs: '/online/chatgptakademie', en: '/en/online/chatgpt-academy' },
  '/en/online/chatgpt-academy': { cs: '/online/chatgptakademie', en: '/en/online/chatgpt-academy' },
  '/online/copilotakademie': { cs: '/online/copilotakademie', en: '/en/online/copilot-academy' },
  '/en/online/copilot-academy': { cs: '/online/copilotakademie', en: '/en/online/copilot-academy' },
  '/online/agentiautomatizace': { cs: '/online/agentiautomatizace', en: '/en/online/agents-and-automation' },
  '/en/online/agents-and-automation': { cs: '/online/agentiautomatizace', en: '/en/online/agents-and-automation' },
  
  // Support pages
  '/metodika': { cs: '/metodika', en: '/en/methodology' },
  '/en/methodology': { cs: '/metodika', en: '/en/methodology' },
  '/o-nas': { cs: '/o-nas', en: '/en/about' },
  '/en/about': { cs: '/o-nas', en: '/en/about' },
  '/reference': { cs: '/reference', en: '/en/references' },
  '/en/references': { cs: '/reference', en: '/en/references' },
  '/poptavka': { cs: '/poptavka', en: '/en/contact' },
  '/en/contact': { cs: '/poptavka', en: '/en/contact' },
  '/gdpr-cookies': { cs: '/gdpr-cookies', en: '/en/gdpr-cookies' },
  '/en/gdpr-cookies': { cs: '/gdpr-cookies', en: '/en/gdpr-cookies' },
  '/obchodni-podminky': { cs: '/obchodni-podminky', en: '/en/terms-and-conditions' },
  '/en/terms-and-conditions': { cs: '/obchodni-podminky', en: '/en/terms-and-conditions' },
  
  // Thank you pages (noindex)
  '/dekujeme': { cs: '/dekujeme', en: '/en/thank-you' },
  '/en/thank-you': { cs: '/dekujeme', en: '/en/thank-you' },
  '/dekujeme-formular': { cs: '/dekujeme-formular', en: '/en/thank-you-form' },
  '/en/thank-you-form': { cs: '/dekujeme-formular', en: '/en/thank-you-form' },
};

// Get equivalent route in target language
export const getLocalizedRoute = (currentPath: string, targetLang: Language): string => {
  // Remove query string for matching
  const pathWithoutQuery = currentPath.split('?')[0];
  
  // Check exact match first
  if (routeMap[pathWithoutQuery]) {
    return routeMap[pathWithoutQuery][targetLang];
  }
  
  // Fallback: try to find closest match or return home
  const basePath = pathWithoutQuery.startsWith('/en') 
    ? pathWithoutQuery.replace('/en', '') || '/'
    : pathWithoutQuery;
    
  if (routeMap[basePath]) {
    return routeMap[basePath][targetLang];
  }
  
  // Default fallback
  return targetLang === 'en' ? '/en' : '/';
};

// Detect language from URL
export const getLanguageFromPath = (path: string): Language => {
  return path.startsWith('/en') ? 'en' : 'cs';
};

// Get alternate URLs for hreflang tags
export const getAlternateUrls = (currentPath: string): { cs: string; en: string } => {
  const pathWithoutQuery = currentPath.split('?')[0];
  
  if (routeMap[pathWithoutQuery]) {
    return {
      cs: routeMap[pathWithoutQuery].cs,
      en: routeMap[pathWithoutQuery].en,
    };
  }
  
  // Fallback to homepage
  return { cs: '/', en: '/en' };
};

// Initialize i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      cs: { translation: cs },
      en: { translation: en },
    },
    lng: 'cs', // Default language
    fallbackLng: 'cs',
    interpolation: {
      escapeValue: false, // React already escapes
    },
    returnNull: false,
    returnEmptyString: false,
  });

export default i18n;
