import type { AirlineData } from '../airlines-data';
import { kuwaitAirwaysData } from './kuwait-airways';
import { etihadAirwaysData } from './etihad-airways';
import { qatarAirwaysData } from './qatar-airways';
import { emiratesData } from './emirates';

export const airlinesDataMap: Record<string, AirlineData> = {
  'kuwait-airways': kuwaitAirwaysData,
  'etihad-airways': etihadAirwaysData,
  'qatar-airways': qatarAirwaysData,
  'emirates': emiratesData,
};

export {
  kuwaitAirwaysData,
  etihadAirwaysData,
  qatarAirwaysData,
  emiratesData,
};

export default airlinesDataMap;