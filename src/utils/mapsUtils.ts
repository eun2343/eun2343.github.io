// Google Maps integration utilities for Choi TCM locations

export interface Location {
  name: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const choiTCMLocations: Location[] = [
  {
    name: 'Choi TCM Zürich',
    address: 'Kreuzstrasse 60, 8032 Zürich, Switzerland',
    coordinates: {
      lat: 47.3662,
      lng: 8.5481
    }
  },
  {
    name: 'Choi TCM Luzern',
    address: 'Habsburgerstrasse 16, 6003 Luzern, Switzerland',
    coordinates: {
      lat: 47.0473136,
      lng: 8.3079459
    }
  }
];

/**
 * Generate Google Maps Static API URL
 * @param location - Location object with coordinates
 * @param apiKey - Google Maps API key
 * @param size - Image size (default: 400x300)
 * @param zoom - Zoom level (default: 15)
 * @returns URL for static map image
 */
export const generateStaticMapUrl = (
  location: Location,
  apiKey: string,
  size: string = '400x300',
  zoom: number = 15
): string => {
  const { lat, lng } = location.coordinates;
  return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=${zoom}&size=${size}&maptype=roadmap&markers=color:red%7Clabel:C%7C${lat},${lng}&key=${apiKey}`;
};

/**
 * Generate Google Maps URL for opening in browser
 * @param location - Location object
 * @returns URL for opening in Google Maps
 */
export const generateMapsUrl = (location: Location): string => {
  const encodedAddress = encodeURIComponent(location.address);
  return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
};

/**
 * Open location in Google Maps
 * @param location - Location object
 */
export const openInGoogleMaps = (location: Location): void => {
  const url = generateMapsUrl(location);
  window.open(url, '_blank', 'noopener,noreferrer');
};
