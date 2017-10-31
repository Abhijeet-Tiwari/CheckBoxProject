import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { AppComponent }  from './app.component';


  
@NgModule({
  imports:      [ BrowserModule, RouterModule,FormsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent]
})
export class AppModule { }
