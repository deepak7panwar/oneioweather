import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OneioTypeaheadComponent } from './components/oneio-typeahead/oneio-typeahead.component';
import { OneioLoaderComponent } from './components/oneio-loader/oneio-loader.component';
import { ListItemComponent } from './components/oneio-list-item/list-item.component';
import { VerticalNavComponent } from './components/vertical-nav/vertical-nav.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    NgbTypeaheadModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    OneioTypeaheadComponent,
    OneioLoaderComponent,
    VerticalNavComponent,
    ListItemComponent,
    FooterComponent,
  ],
  exports: [
    OneioTypeaheadComponent,
    OneioLoaderComponent,
    VerticalNavComponent,
    ListItemComponent,
    FooterComponent,
  ],
})
export class UiWidgetsModule {}
