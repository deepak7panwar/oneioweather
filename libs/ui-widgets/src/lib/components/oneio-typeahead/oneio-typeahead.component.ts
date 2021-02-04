import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';

export type TypeAheadFinderType = (searchField: string) => Observable<[]>;

export type ResultFormatorType = (result: unknown) => unknown;

@Component({
  selector: 'oneio-typeahead',
  templateUrl: './oneio-typeahead.component.html',
  styleUrls: ['./oneio-typeahead.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class OneioTypeaheadComponent implements OnInit {
  @Input()
  isSearching!: Observable<boolean>;
  constructor() {}

  ngOnInit(): void {}
}
