import { Component, OnDestroy } from '@angular/core';
import { WeatherHelperService } from './services';
import { ICountryName } from './interface';
import { ResultFormatorType } from '@oneio/ui-widgets';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of, iif, Subject, Subscription } from 'rxjs';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import {
  debounceTime,
  distinctUntilChanged,
  tap,
  switchMap,
  catchError,
  filter,
  map,
  defaultIfEmpty,
} from 'rxjs/operators';
import { Store } from '@ngrx/store';
import {
  loadWeatherForCountry,
  pophWeatherToList,
  loadingStart,
} from './state/weather/weather.actions';
import {
  getAllWeather,
  getWeatherLoaded,
} from './state/weather/weather.selectors';

@Component({
  selector: 'oneio-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnDestroy {
  public faDatabase = faDatabase;
  public form: FormGroup;
  public isSearching = new Subject<boolean>();
  public isSearchFailed: boolean;
  public weatherCards$: Observable<unknown>;
  public weatherCardLoding$: Observable<boolean>;
  private formSubscription$: Subscription;
  constructor(
    private weatherService: WeatherHelperService,
    private formBuilder: FormBuilder,
    private store: Store
  ) {
    this.form = this.getForm();
    this.isSearching.next(false);
    this.isSearchFailed = false;
    this.formSubscription$ = this.form.valueChanges
      .pipe(
        filter((d) => d.country),
        tap(() => this.store.dispatch(loadingStart()))
      )
      .subscribe((d: { country: ICountryName }) => {
        this.store.dispatch(loadWeatherForCountry({ country: d.country }));
      });
    this.weatherCards$ = this.store.select(getAllWeather).pipe(
      filter((d) => !!d),
      defaultIfEmpty([])
    );
    this.weatherCardLoding$ = this.store
      .select(getWeatherLoaded)
      .pipe(map((d) => !d));
  }
  public search = (text: string) =>
    this.weatherService.getCountryListByName(text);
  public search$ = (text$: Observable<string>) => {
    return text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      tap(() => this.isSearching.next(true)),
      switchMap((filterText: string) => {
        const searchTermLength = filterText.length <= 1;
        const queryFromApi$ = this.search(filterText).pipe(
          catchError(() => {
            this.isSearchFailed = true;
            return of([]);
          })
        );
        const emptyResult$ = of([]).pipe(
          tap(() => {
            this.isSearchFailed = false;
          })
        );
        return iif(() => searchTermLength, emptyResult$, queryFromApi$);
      }),
      tap(() => this.isSearching.next(false))
    );
  };
  public removeCard(data) {
    this.store.dispatch(pophWeatherToList({ weather: data }));
  }
  public formatter: ResultFormatorType = (x: ICountryName) => x.name;
  public getForm() {
    return this.formBuilder.group({
      country: ['', Validators.required],
    });
  }
  ngOnDestroy(): void {
    this.formSubscription$.unsubscribe();
  }
}
