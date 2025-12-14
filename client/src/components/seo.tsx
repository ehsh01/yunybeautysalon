import { Helmet } from "react-helmet-async";
import { useLocation } from "wouter";
import { useLanguage } from "@/lib/language-context";

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  type?: string;
}

export function SEO({ title, description, image, type = "website" }: SEOProps) {
  const [location] = useLocation();
  const { language } = useLanguage();
  
  // Construct canonical URL (handling hash routing is tricky for canonicals, but usually we point to the main domain + path)
  // For GitHub Pages hash routing, the real URL is domain.com/#/path
  const baseUrl = "https://yunybeautysalon.com";
  const canonicalUrl = `${baseUrl}/#${location}`;

  // Generate alternate link for the other language
  let alternatePath = "";
  let alternateLang = "";
  
  if (language === "en") {
    // Current is English, alternate is Spanish
    alternateLang = "es";
    alternatePath = `/es${location === "/" ? "" : location}`;
  } else {
    // Current is Spanish, alternate is English
    alternateLang = "en";
    alternatePath = location.replace(/^\/es/, "") || "/";
  }
  
  const alternateUrl = `${baseUrl}/#${alternatePath}`;

  return (
    <Helmet>
      {/* Basic */}
      <html lang={language} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Hreflang tags */}
      <link rel="alternate" hrefLang={language} href={canonicalUrl} />
      <link rel="alternate" hrefLang={alternateLang} href={alternateUrl} />
      {/* x-default usually points to the English/root version */}
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/#${language === 'en' ? location : alternatePath}`} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content={language === 'es' ? 'es_US' : 'en_US'} />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
}
