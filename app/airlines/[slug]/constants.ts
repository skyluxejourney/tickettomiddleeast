// app/airlines/[slug]/constants.ts

import { airlinesDataMap } from './data';
import type { AirlineData } from './airlines-data';

// Export types
export type { AirlineData };

// Export the data map
export { airlinesDataMap };

// Helper function to get airline by slug
export const getAirlineBySlug = (slug: string): AirlineData | undefined => {
  return airlinesDataMap[slug];
};

// Get all airline slugs
export const getAirlineSlugs = (): string[] => {
  return Object.keys(airlinesDataMap);
};

// Get all airlines
export const getAllAirlines = (): AirlineData[] => {
  return Object.values(airlinesDataMap);
};

// Export individual airlines for convenience
export const kuwaitAirways = airlinesDataMap['kuwait-airways'];
export const etihadAirways = airlinesDataMap['etihad-airways'];
export const qatarAirways = airlinesDataMap['qatar-airways'];
export const emirates = airlinesDataMap['emirates'];

// Default export
export default airlinesDataMap;