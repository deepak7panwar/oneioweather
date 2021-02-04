import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneioLoaderComponent } from './oneio-loader.component';

describe('OneioLoaderComponent', () => {
  let component: OneioLoaderComponent;
  let fixture: ComponentFixture<OneioLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneioLoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneioLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
