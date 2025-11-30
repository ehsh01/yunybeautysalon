import { useEffect } from "react";
import { useLocation } from "wouter";

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  type?: string;
}

export function SEO({ title, description, image, type = "website" }: SEOProps) {
  const [location] = useLocation();
  
  useEffect(() => {
    // Update title
    document.title = title;
    
    // Helper to update meta tags
    const updateMeta = (name: string, content: string, isProperty: boolean = false) => {
      let element = document.querySelector(isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(isProperty ? 'property' : 'name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    if (description) {
      updateMeta('description', description);
      updateMeta('og:description', description, true);
      updateMeta('twitter:description', description);
    }

    if (image) {
      updateMeta('og:image', image, true);
      updateMeta('twitter:image', image);
    }

    updateMeta('og:title', title, true);
    updateMeta('twitter:title', title);
    updateMeta('og:type', type, true);
    updateMeta('og:url', window.location.href, true);

  }, [title, description, image, type, location]);

  return null;
}
