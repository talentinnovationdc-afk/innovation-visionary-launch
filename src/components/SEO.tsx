import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
}

const BASE_URL = "https://t-i.cz";

export const SEO = ({
  title = "Talent Innovation | AI vzdělávání a automatizace",
  description = "Talent Innovation na t-i.cz je vaším oficiálním centrem pro AI transformaci. Nabízíme vzdělávání, automatizaci a implementaci AI řešení pro firmy.",
  path = "/",
}: SEOProps) => {
  const canonicalUrl = `${BASE_URL}${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Talent Innovation" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};
