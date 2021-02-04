import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'oneio-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {
  @Input() label: string;
  @Input() value: string;
  constructor() {}

  ngOnInit(): void {}
}
