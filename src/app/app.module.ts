import {  HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserXhr, HttpModule } from '@angular/http';
import { NgProgressModule, NgProgressBrowserXhr } from 'ngx-progressbar';

// Import NgbModule library
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

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
import { LoginPage } from './pages/login/login.page';


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
    RulesPage,
    LoginPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRouting,
    // progress bar
    NgProgressModule,
    NgbModule.forRoot()
  ],
  providers: [
    
    //models
    Course,
    
    //services
    RegisterService,
    CoursesService,
    // progress bar
    { provide: BrowserXhr, useClass: NgProgressBrowserXhr },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
