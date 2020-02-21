import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { AppComponent }  from './app.component';
import { EmpListComponent } from './emp/emp.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, EmpListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
