import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './weather.component';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromWeather from './state/weather/weather.reducer';
import { WeatherEffects } from './state/weather/weather.effects';
import { CardComponent } from './components/oneio-card/card.component';

@NgModule({
  declarations: [WeatherComponent, CardComponent],
  imports: [
    SharedModule,
    WeatherRoutingModule,
    StoreModule.forFeature(
      fromWeather.WEATHER_FEATURE_KEY,
      fromWeather.reducer
    ),
    EffectsModule.forFeature([WeatherEffects]),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class WeatherModule {}
