import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as WeatherActions from './weather.actions';
import { WeatherEntity } from './weather.models';
import { state } from '@angular/animations';

export const WEATHER_FEATURE_KEY = 'weather';

export interface State extends EntityState<WeatherEntity> {
  selectedId?: string | number; // which Weather record has been selected
  loaded: boolean; // has the Weather list been loaded
  error?: string | null; // last known error (if any)
}

export interface WeatherPartialState {
  readonly [WEATHER_FEATURE_KEY]: State;
}

export const weatherAdapter: EntityAdapter<WeatherEntity> = createEntityAdapter<WeatherEntity>(
  {
    sortComparer: (a, b) => b.entryOrder - a.entryOrder,
  }
);

export const initialState: State = weatherAdapter.getInitialState({
  loaded: true,
  entryOrder: 0,
});

const weatherReducer = createReducer(
  initialState,
  on(WeatherActions.init, (state) => ({
    ...state,
    loaded: true,
    error: null,
  })),
  on(WeatherActions.pushWeatherToList, (state, { weather }) => {
    if (state.ids.length === 20) {
      const stateIds = state.ids as string[];
      const s = stateIds.includes(weather.country.numericCode)
        ? state
        : weatherAdapter.removeOne(stateIds[19], state);
      return weatherAdapter.addOne(weather, { ...s, loaded: true });
    }
    return weatherAdapter.addOne(weather, { ...state, loaded: true });
  }),
  on(WeatherActions.loadingStart, (state) => ({ ...state, loaded: false })),
  on(WeatherActions.loadWeatherSuccess, (state) => ({
    ...state,
    loaded: true,
  })),
  on(WeatherActions.pophWeatherToList, (state, { weather }) =>
    weatherAdapter.removeOne(weather.id, state)
  ),
  on(WeatherActions.loadWeatherFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return weatherReducer(state, action);
}
