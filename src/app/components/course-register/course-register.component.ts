import { Component, OnInit, Input } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import * as moment from 'jalali-moment';
import { RegisterService } from '../../_services/register.service';
declare var require: any

@Component({
    selector: 'course-register',
    templateUrl: 'course-register.component.html',
    styleUrls:['./course-register.component.scss']
})

export class RegisterComponent implements OnInit {
    calendarIcon= require("assets/images/calendar-icon.svg");
    user={courseId:'',firstName:'',lastName:'',nationalCode:'',birthDate:'1370-01-01',sex:false,educationField:'',mobilePhone:'',email:'',rulesCheck:false}
    constructor(private registerService:RegisterService) { }
    @Input() courseId;
    ngOnInit() { }
    onSubmit(){
        let newDate;
        if(this.user.birthDate && this.user.birthDate!=''){
            newDate = new Date( moment.from(`${this.user.birthDate['year']}/${this.user.birthDate['month']}/${this.user.birthDate['day']} 16:40`, 'fa', 'YYYY/M/D HH:mm')
            .format('YYYY/M/D HH:mm:ss'));
        }
        delete this.user.birthDate;
        this.user.birthDate=newDate;
        this.user.courseId=this.courseId;
        this.registerService.register(this.user);
    }
}