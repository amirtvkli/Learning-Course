import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

//Pages
import {HomePage} from './pages/index';

//Components
import { NavComponent } from './components/index';


//Routes
import {AppRouting} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
