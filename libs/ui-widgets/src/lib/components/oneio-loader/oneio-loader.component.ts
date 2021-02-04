import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'oneio-loader',
  templateUrl: './oneio-loader.component.html',
  styleUrls: ['./oneio-loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OneioLoaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
