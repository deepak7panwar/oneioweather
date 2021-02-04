import { IWeatherObj, ICountryName } from '../../interface';
/**
 * Interface for the 'Weather' data
 */
export interface WeatherEntity {
  weather: IWeatherObj;
  country: ICountryName;
  entryOrder: number;
  id: number; // Primary ID
}
