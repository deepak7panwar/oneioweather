import { IWeatherObj, ICountryName } from '../../interface';
import {
  faCompass,
  faFlag,
  faCalendarDay,
} from '@fortawesome/free-solid-svg-icons';

import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'oneio-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit {
  @Input() data: {
    country: ICountryName;
    weather: IWeatherObj;
  };
  @Output() delete = new EventEmitter<string>();
  public faCompass = faCompass;
  public faflag = faFlag;
  public faCalendarDay = faCalendarDay;
  constructor() {}

  ngOnInit(): void {}

  removeCard() {
    this.delete.emit('delete');
  }
}
