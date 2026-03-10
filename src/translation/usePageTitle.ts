import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from './useLanguage';

// Helper function to set or create meta tag
const setMetaTag = (name: string, content: string, property?: boolean) => {
  const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
  let metaTag = document.querySelector(selector) as HTMLMetaElement;
  
  if (metaTag) {
    metaTag.content = content;
  } else {
    metaTag = document.createElement('meta');
    if (property) {
      metaTag.setAttribute('property', name);
    } else {
      metaTag.name = name;
    }
    metaTag.content = content;
    document.head.appendChild(metaTag);
  }
};

// Helper function to set link tag
const setLinkTag = (rel: string, href: string, hreflang?: string) => {
  const selector = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]`;
  let linkTag = document.querySelector(selector) as HTMLLinkElement;
  
  if (linkTag) {
    linkTag.href = href;
  } else {
    linkTag = document.createElement('link');
    linkTag.rel = rel;
    linkTag.href = href;
    if (hreflang) {
      linkTag.hreflang = hreflang;
    }
    document.head.appendChild(linkTag);
  }
};

export const usePageTitle = () => {
  const location = useLocation();
  const { translations, language } = useLanguage();

  useEffect(() => {
    // Strip language prefix (/en or /de) to get the page path
    const pagePath = location.pathname.replace(/^\/(en|de)/, '') || '/';

    let titleKey: keyof typeof translations.app.PageTitles = 'home';

    // Handle translated URLs
    switch (pagePath) {
      case '/':
        titleKey = 'home';
        break;
      case '/about':
      case '/ueber-mich':
        titleKey = 'about';
        break;
      case '/treatment':
      case '/behandlung':
        titleKey = 'treatment';
        break;
      case '/acupuncture':
      case '/akupunktur':
        titleKey = 'treatment'; // Use treatment descriptions for acupuncture page
        break;
      case '/fee':
        titleKey = 'fee';
        break;
      case '/book-appointment':
        titleKey = 'bookAppointment';
        break;
      case '/contact':
      case '/kontakt':
        titleKey = 'contact';
        break;
      default:
        titleKey = 'home';
    }

    const title = translations.app.PageTitles[titleKey];
    const description = translations.app.PageDescriptions[titleKey];
    const keywords = translations.app.SeoKeywords[titleKey];
    const currentUrl = `https://choitcm.com${location.pathname}`;
    const canonicalUrl = currentUrl;

    // Update page title
    document.title = title;

    // Basic SEO meta tags
    setMetaTag('description', description);
    setMetaTag('keywords', keywords);
    setMetaTag('author', 'Dr. Eunkyeong Choi');
    setMetaTag('robots', 'index, follow');
    
    // Language and region meta tags
    document.documentElement.lang = language;
    setMetaTag('language', language === 'en' ? 'English' : 'German');
    setMetaTag('geo.region', 'CH');
    setMetaTag('geo.placename', 'Zurich, Switzerland');
    setMetaTag('geo.position', '47.3769;8.5417'); // Zurich coordinates
    setMetaTag('ICBM', '47.3769, 8.5417');

    // Business/Medical meta tags
    setMetaTag('classification', 'Medical Practice, Traditional Chinese Medicine');
    setMetaTag('category', 'Health, Fertility, Alternative Medicine');
    setMetaTag('coverage', 'Worldwide');
    setMetaTag('distribution', 'Global');
    setMetaTag('rating', 'General');

    // Open Graph meta tags
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:type', 'website', true);
    setMetaTag('og:url', currentUrl, true);
    setMetaTag('og:site_name', 'Choi TCM', true);
    setMetaTag('og:locale', language === 'en' ? 'en_US' : 'de_CH', true);
    setMetaTag('og:image', 'https://choitcm.com/images/logo-normal.png', true);
    setMetaTag('og:image:width', '800', true);
    setMetaTag('og:image:height', '600', true);
    setMetaTag('og:image:alt', 'Choi TCM - Fertility & Traditional Chinese Medicine', true);

    // Twitter Card meta tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', 'https://choitcm.com/images/logo-normal.png');
    setMetaTag('twitter:image:alt', 'Choi TCM - Fertility & Traditional Chinese Medicine');

    // Canonical URL
    setLinkTag('canonical', canonicalUrl);

    // Alternate language links
    const basePath = location.pathname.replace(/^\/(en|de)/, '');
    const alternateEnUrl = `/en${basePath === '/' ? '' : basePath}`;
    const alternateDeUrl = `/de${basePath === '/' ? '' : basePath}`;
    
    setLinkTag('alternate', `https://choitcm.com${alternateEnUrl}`, 'en');
    setLinkTag('alternate', `https://choitcm.com${alternateDeUrl}`, 'de');

    // Schema.org structured data for medical practice
    const existingSchema = document.querySelector('#structured-data');
    if (existingSchema) {
      existingSchema.remove();
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": "Choi TCM",
      "description": "Traditional Chinese Medicine clinic specializing in fertility treatments, acupuncture, and herbal medicine",
      "url": "https://choitcm.com",
      "logo": "https://choitcm.com/images/logo-normal.png",
      "image": "https://choitcm.com/images/logo-normal.png",
      "telephone": "+41-XX-XXX-XXXX", // Replace with actual phone
      "email": "info@choitcm.com", // Replace with actual email
      "address": [
        {
          "@type": "PostalAddress",
          "streetAddress": "Kreuzstrasse 60",
          "addressLocality": "Zürich",
          "postalCode": "8008",
          "addressCountry": "CH"
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "Habsburgerstrasse 16",
          "addressLocality": "Luzern",
          "postalCode": "6003",
          "addressCountry": "CH"
        }
      ],
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 47.3769,
        "longitude": 8.5417
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Monday",
          "opens": "11:00",
          "closes": "19:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Friday",
          "opens": "11:00",
          "closes": "19:00"
        }
      ],
      "medicalSpecialty": ["Fertility Medicine", "Traditional Chinese Medicine", "Acupuncture"],
      "serviceType": ["Fertility Treatment", "Acupuncture", "Herbal Medicine", "Traditional Chinese Medicine"],
      "founder": {
        "@type": "Person",
        "name": "Dr. Eunkyeong Choi",
        "jobTitle": "Doctor of Traditional Medicine",
        "alumniOf": "Dong-Eui University"
      },
      "sameAs": [
        // Add social media URLs here if available
      ]
    };

    const script = document.createElement('script');
    script.id = 'structured-data';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schemaData);
    document.head.appendChild(script);

  }, [location.pathname, translations, language]);
};
