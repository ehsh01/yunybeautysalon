import { Helmet } from "react-helmet-async";
import { useLocation } from "wouter";

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  type?: string;
}

export function SEO({ title, description, image, type = "website" }: SEOProps) {
  const [location] = useLocation();
  const canonicalUrl = `https://yunybeautysalon.com${location}`;

  return (
    <Helmet>
      {/* Basic */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
}
