import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GetInputComponent } from './components/get-input/get-input.component';
import { DisplayListComponent } from './components/display-list/display-list.component';

import { StoreModule } from '@ngrx/store';
import { myListReducer } from './store/reducers/my-list.reducer';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    StoreModule.forRoot({
      myList: myListReducer,
    }),
  ],
  declarations: [AppComponent, GetInputComponent, DisplayListComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
