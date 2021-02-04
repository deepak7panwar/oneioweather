import { IWeatherObj, ICountryName } from '../../interface';
/**
 * Interface for the 'Weather' data
 */
export interface WeatherEntity {
  weather: IWeatherObj;
  country: ICountryName;
  entryOrder: number;
  id: string; // Primary ID
}
