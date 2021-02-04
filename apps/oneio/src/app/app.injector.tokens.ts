import { InjectionToken } from '@angular/core';

export type EnvironmentType = {
  production: string;
  countryURL: string;
  weatherURL: string;
  apiKey: string;
};
const DEFAULT_ENV = {
  production: '',
  countryURL: '',
  weatherURL: '',
  apiKey: '',
};
export const ENVIRONMENT = new InjectionToken<EnvironmentType>('Environment', {
  providedIn: 'root',
  factory: () => DEFAULT_ENV,
});
