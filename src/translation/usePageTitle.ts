import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from './useLanguage';

export const usePageTitle = () => {
  const location = useLocation();
  const { translations } = useLanguage();

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
      case '/ueber-uns':
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
        titleKey = 'contact';
        break;
      default:
        titleKey = 'home';
    }

    // Update page title
    document.title = translations.app.PageTitles[titleKey];

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', translations.app.PageDescriptions[titleKey]);
    } else {
      // Create meta description if it doesn't exist
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = translations.app.PageDescriptions[titleKey];
      document.head.appendChild(newMetaDescription);
    }
  }, [location.pathname, translations]);
};
