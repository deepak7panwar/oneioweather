import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        redirectTo: 'weather',
        pathMatch: 'full',
      },
      {
        path: 'weather',
        loadChildren: () =>
          import('./weather/weather.module').then((m) => m.WeatherModule),
      },
    ],
  },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      useHash: true,
    }),
  ],
  declarations: [],
  exports: [RouterModule],
})
export class AppRoutingModule {}
