import {  HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserXhr, HttpModule } from '@angular/http';
import { NgProgressModule, NgProgressBrowserXhr } from 'ngx-progressbar';
import {SnackbarModule} from 'ngx-snackbar';

// Import NgbModule library
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// Pages
import {HomePage, CoursePage, RulesPage} from './pages';

// Components
import { NavComponent, FooterComponent, CourseListComponent, CourseViewComponent, RegisterComponent} from './components';

// Routes
import {AppRouting} from './app.routes';

// Services

// Models
import { Course } from './_model';

// Pipes
import { PricePipe, CapacityPipe, GregorianToJalali } from './_pipes';
import { LoginPage } from './pages/login/login.page';
import { RegisterService } from './_services/register.service';
import { CoursesService } from './_services/courses.service';
import { AuthService } from './_services/auth.service';


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
    RegisterComponent,
    
    //pages
    HomePage,
    CoursePage,
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
    NgbModule.forRoot(),
    SnackbarModule.forRoot()
  ],
  providers: [
    //models
    Course,
    
    //services
    RegisterService,
    CoursesService,
    AuthService,

    // progress bar
    { provide: BrowserXhr, useClass: NgProgressBrowserXhr },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
