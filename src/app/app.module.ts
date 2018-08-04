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
// Ngx Spinner
import { NgxSpinnerModule } from 'ngx-spinner';

// Pages
import {HomePage, CoursePage, RulesPage, PaymentPage} from './pages';

// Components
import { NavComponent, FooterComponent, CourseListComponent, CourseViewComponent, RegisterComponent, UserConfirmComponent} from './components';

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
import { PaymentService } from './_services/payment.service';
import { VersionCheckService } from './_services/version-check.service.ts';
import { HttpClientModule } from '../../node_modules/@angular/common/http';


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
    UserConfirmComponent,
    
    //pages
    HomePage,
    CoursePage,
    RulesPage,
    LoginPage,
    PaymentPage
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRouting,
    // progress bar
    NgProgressModule,
    NgbModule.forRoot(),
    SnackbarModule.forRoot(),
    NgxSpinnerModule
  ],
  providers: [
    //models
    Course,
    
    //services
    RegisterService,
    CoursesService,
    AuthService,
    PaymentService,
    VersionCheckService,

    // progress bar
    { provide: BrowserXhr, useClass: NgProgressBrowserXhr },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
