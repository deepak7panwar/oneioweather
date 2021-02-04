import { async, TestBed } from '@angular/core/testing';
import { UiWidgetsModule } from './ui-widgets.module';

describe('UiWidgetsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiWidgetsModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(UiWidgetsModule).toBeDefined();
  });
});
