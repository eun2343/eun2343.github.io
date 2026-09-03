/// <reference types="vite/client" />

interface Window {
  dataLayer?: Array<Record<string, unknown>>;
  HubspotFormsV4?: HubSpotFormsV4;
}

// Google Tag Manager dataLayer declarations
declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    HubspotFormsV4?: HubSpotFormsV4;
  }
}
