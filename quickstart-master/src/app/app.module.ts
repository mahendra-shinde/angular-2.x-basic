import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ListComponent } from './list/list.component';

@NgModule({
  imports:      [ BrowserModule ],
  // Number of CHILD components
  declarations: [ AppComponent, ListComponent ],
  // First Component to LOAD
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
