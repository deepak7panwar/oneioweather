import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as WeatherActions from './weather.actions';
import { WeatherHelperService } from '../../services';
import { map } from 'rxjs/operators';

@Injectable()
export class WeatherEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WeatherActions.init),
      fetch({
        run: () => {
          return WeatherActions.loadWeatherSuccess({ weather: null });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return WeatherActions.loadWeatherFailure({ error });
        },
      })
    )
  );
  fetch$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WeatherActions.loadWeatherForCountry),
      fetch({
        run: (action) => {
          return this.weatherService.getWeather(action.country).pipe(
            map((d) => {
              return WeatherActions.pushWeatherToList({
                weather: {
                  weather: d,
                  entryOrder: new Date().getTime(),
                  id: (action.country.numericCode),
                  country: action.country,
                },
              });
            })
          );
        },
        onError: (action, error) => {
          console.error('Error', error);
          return WeatherActions.loadWeatherFailure({ error });
        },
      })
    )
  );

  constructor(
    private actions$: Actions,
    private weatherService: WeatherHelperService
  ) {}
}
