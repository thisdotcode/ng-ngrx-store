import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { reducers } from './store/app.state';
import { AppComponent } from './app.component';
import { GetInputComponent } from './components/get-input/get-input.component';
import { DisplayListComponent } from './components/display-list/display-list.component';

@NgModule({
  declarations: [AppComponent, GetInputComponent, DisplayListComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    StoreModule.forRoot(reducers),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
