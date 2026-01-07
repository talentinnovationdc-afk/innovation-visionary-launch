import { Helmet } from "react-helmet-async";

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

const DEFAULT_TITLE = "Talent Innovation | AI vzdělávání a automatizace pro firmy";
const DEFAULT_DESCRIPTION = "Pomáháme firmám zrychlit práci díky AI – měřitelně, bezpečně a škálovatelně. Diagnostika, mapa úspor, AI agenti a akademie.";

export const SEO = ({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  noindex = false,
  ogImage = DEFAULT_OG_IMAGE,
}: SEOProps) => {
  const canonicalUrl = `${BASE_URL}${path}`;
  const fullTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="cs_CZ" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};
