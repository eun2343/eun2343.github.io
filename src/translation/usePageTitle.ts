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

    switch (pagePath) {
      case '/':
        titleKey = 'home';
        break;
      case '/about':
        titleKey = 'about';
        break;
      case '/treatment':
        titleKey = 'treatment';
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

    document.title = translations.app.PageTitles[titleKey];
  }, [location.pathname, translations]);
};
