import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';
//datepicker
import {NgbDateStruct, NgbCalendar, NgbDatepickerI18n, NgbDatepickerConfig} from '@ng-bootstrap/ng-bootstrap';
import {NgbCalendarPersian} from "ng2-datepicker-jalali/persian/ngb-calendar-persian";
import {NgbDatepickerI18nPersian} from "ng2-datepicker-jalali/persian/ngb-datepicker-i18n-persian";
import { VersionCheckService } from './_services/version-check.service.ts';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    {provide: NgbCalendar, useClass: NgbCalendarPersian},
    {provide: NgbDatepickerI18n, useClass: NgbDatepickerI18nPersian}
  ]
})
export class AppComponent implements OnInit  {
  title = 'app';
constructor(private version: VersionCheckService){

}
  ngOnInit() {
    this.version.initVersionCheck( 'http://academy.studiovista.ir');
   }
}

