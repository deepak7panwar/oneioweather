import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneioTypeaheadComponent } from './oneio-typeahead.component';

describe('OneioTypeaheadComponent', () => {
  let component: OneioTypeaheadComponent;
  let fixture: ComponentFixture<OneioTypeaheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneioTypeaheadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneioTypeaheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
