import {  HashLocationStrategy, LocationStrategy } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/Forms';
import { BrowserXhr, HttpModule } from '@angular/http';


//Pages
import {HomePage, CoursePage, RegisterPage} from './pages/index';

//Components
import { NavComponent,FooterComponent } from './components/index';


//Routes
import {AppRouting} from './app.routes';


@NgModule({
  declarations: [
    AppComponent,

    //pages
    HomePage,
    CoursePage,
    RegisterPage,


    //components
    NavComponent,
    FooterComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRouting,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
