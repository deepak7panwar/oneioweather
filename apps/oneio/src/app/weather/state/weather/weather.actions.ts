import { createAction, props } from '@ngrx/store';
import { WeatherEntity } from './weather.models';
import { ICountryName } from '../../interface/country.name.interface';

export const init = createAction('[Weather Page] Init');
export const loadWeatherForCountry = createAction(
  '[Weather/API] Load Weather for Country',
  props<{ country: ICountryName }>()
);
export const pushWeatherToList = createAction(
  '[Weather/API] Add weather of country to list',
  props<{ weather: WeatherEntity }>()
);
export const loadingStart = createAction('[Weather/API]  Load Weather started');
export const loadingEnd = createAction('[Weather/API]  Load Weather started');
export const pophWeatherToList = createAction(
  '[Weather/API] remove weather from country to list',
  props<{ weather: WeatherEntity }>()
);
export const loadWeatherSuccess = createAction(
  '[Weather/API] Load Weather Success',
  props<{ weather: WeatherEntity }>()
);
export const removWeatherFromList = createAction(
  '[Weather/API] RemoveWeather',
  props<{ weather: number }>()
);

export const loadWeatherFailure = createAction(
  '[Weather/API] Loading Weather Failed',
  props<{ error: any }>()
);
