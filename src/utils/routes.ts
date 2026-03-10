export type Language = "en" | "de";

export interface RouteConfig {
  en: string;
  de: string;
}

// Centralized URL mappings for all translated routes
export const ROUTES: Record<string, RouteConfig> = {
  home: {
    en: "/",
    de: "/",
  },
  about: {
    en: "/about",
    de: "/ueber-mich",
  },
  treatment: {
    en: "/treatment",
    de: "/behandlung",
  },
  fertility: {
    en: "/fertility",
    de: "/fruchtbarkeit",
  },
  gynecology: {
    en: "/gynecology",
    de: "/gynaekologie",
  },
  pregnancy: {
    en: "/pregnancy",
    de: "/schwangerschaft",
  },
  acupuncture: {
    en: "/acupuncture",
    de: "/akupunktur",
  },
  contact: {
    en: "/contact",
    de: "/kontakt", 
  },
};

// Helper function to get full URL with language prefix
export const getLocalizedPath = (routeKey: keyof typeof ROUTES, language: Language): string => {
  return `/${language}${ROUTES[routeKey][language]}`;
};

// Helper function to translate URL segments between languages
export const translateUrlPath = (path: string, targetLanguage: Language): string => {
  // Strip leading slash for easier matching
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  
  // Find the route that matches the current path
  for (const [, config] of Object.entries(ROUTES)) {
    const enPath = config.en.startsWith("/") ? config.en.slice(1) : config.en;
    const dePath = config.de.startsWith("/") ? config.de.slice(1) : config.de;
    
    if (cleanPath === enPath || cleanPath === dePath) {
      return config[targetLanguage];
    }
  }
  
  // If no match found, return original path
  return path;
};

// Helper function to get route class name from path
export const getRouteClassName = (pathname: string): string => {
  // Strip language prefix
  const stripped = pathname.replace(/^\/(en|de)/, "") || "/";
  const cleanPath = stripped.startsWith("/") ? stripped.slice(1) : stripped;
  
  // Map paths to class names
  for (const [routeKey, config] of Object.entries(ROUTES)) {
    const enPath = config.en.startsWith("/") ? config.en.slice(1) : config.en;
    const dePath = config.de.startsWith("/") ? config.de.slice(1) : config.de;
    
    if (cleanPath === enPath || cleanPath === dePath) {
      return `route-${routeKey}`;
    }
  }
  
  // Special cases for existing routes not yet in ROUTES
  switch (stripped) {
    case "/why-choi-tcm":
      return "route-why-choi-tcm";
    default:
      return "route-unknown";
  }
};