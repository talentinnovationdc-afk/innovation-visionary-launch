import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { getAlternateUrls, getLanguageFromPath } from "@/i18n";

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  noindex?: boolean;
  ogImage?: string;
}

const BASE_URL = "https://t-i.cz";
const SITE_NAME = "Talent Innovation";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`;

const DEFAULT_TITLE_CS = "Talent Innovation | AI vzdělávání a automatizace pro firmy";
const DEFAULT_TITLE_EN = "Talent Innovation | AI Training and Automation for Business";
const DEFAULT_DESCRIPTION_CS = "Pomáháme firmám zrychlit práci díky AI – měřitelně, bezpečně a škálovatelně. Diagnostika, mapa úspor, AI agenti a akademie.";
const DEFAULT_DESCRIPTION_EN = "We help teams turn AI into everyday advantage. From practical training to workflows and automation that actually work.";

export const SEO = ({
  title,
  description,
  path,
  noindex = false,
  ogImage = DEFAULT_OG_IMAGE,
}: SEOProps) => {
  const location = useLocation();
  const currentPath = path || location.pathname;
  const currentLang = getLanguageFromPath(currentPath);
  
  // Get alternate URLs for hreflang
  const alternates = getAlternateUrls(currentPath);
  const canonicalUrl = `${BASE_URL}${currentPath}`;
  const csUrl = `${BASE_URL}${alternates.cs}`;
  const enUrl = `${BASE_URL}${alternates.en}`;
  
  // Language-specific defaults
  const defaultTitle = currentLang === 'en' ? DEFAULT_TITLE_EN : DEFAULT_TITLE_CS;
  const defaultDescription = currentLang === 'en' ? DEFAULT_DESCRIPTION_EN : DEFAULT_DESCRIPTION_CS;
  
  const fullTitle = title ? `${title} | ${SITE_NAME}` : defaultTitle;
  const finalDescription = description || defaultDescription;

  return (
    <Helmet>
      <html lang={currentLang} />
      <title>{fullTitle}</title>
      <meta name="description" content={finalDescription} />
      <link rel="canonical" href={canonicalUrl} />
      
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Hreflang tags for multilingual SEO */}
      <link rel="alternate" hrefLang="cs" href={csUrl} />
      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="x-default" href={csUrl} />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={currentLang === 'en' ? 'en_US' : 'cs_CZ'} />
      <meta property="og:locale:alternate" content={currentLang === 'en' ? 'cs_CZ' : 'en_US'} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};
