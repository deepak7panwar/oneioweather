import { Inject, Injectable } from '@angular/core';
import { RestHelperService } from '@oneio/util';
import { ENVIRONMENT, EnvironmentType } from '../../app.injector.tokens';
import { Observable } from 'rxjs';
import { ICountryName } from '../interface';
import { IWeatherObj } from '../interface';

@Injectable({
  providedIn: 'root',
})
export class WeatherHelperService {
  constructor(
    @Inject(ENVIRONMENT) private environment: EnvironmentType,
    private http: RestHelperService
  ) {}
  public getCountryListByName(name: string): Observable<ICountryName> {
    const url = new URL(`/rest/v2/name/${name}`, this.environment.countryURL);
    return this.http.get<ICountryName>(url);
  }
  public getWeather(country: ICountryName): Observable<IWeatherObj> {
    const url = new URL(
      `/current?access_key=${this.environment.apiKey}&query=${country.name}`,
      this.environment.weatherURL
    );
    return this.http.get<IWeatherObj>(url);
  }
}
