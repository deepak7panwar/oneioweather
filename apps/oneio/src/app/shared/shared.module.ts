import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiWidgetsModule } from '@oneio/ui-widgets';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [],
  imports: [
    NgbTypeaheadModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UiWidgetsModule,
    FontAwesomeModule,
  ],
  exports: [
    NgbTypeaheadModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UiWidgetsModule,
    FontAwesomeModule
  ],
})
export class SharedModule {}
