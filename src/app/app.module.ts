import {  HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserXhr, HttpModule } from '@angular/http';


// Pages
import {HomePage, RegisterPage, RulesPage} from './pages/index';

// Components
import { NavComponent, FooterComponent, CourseListComponent, CourseViewComponent} from './components/index';

// Routes
import {AppRouting} from './app.routes';

// Services
import { RegisterService,CoursesService } from './_services/index';

// Models
import { Course } from './_model';

// Pipes
import { PricePipe, CapacityPipe, GregorianToJalali } from './_pipes';


@NgModule({
  declarations: [
    AppComponent,
    
    //pipes
    PricePipe,
    CapacityPipe,
    GregorianToJalali,
    
    //components
    NavComponent,
    FooterComponent,
    CourseListComponent,
    CourseViewComponent,
    
    //pages
    HomePage,
    RegisterPage,
    RulesPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRouting
  ],
  providers: [
    
    //models
    Course,
    
    //services
    RegisterService,
    CoursesService,
    
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
