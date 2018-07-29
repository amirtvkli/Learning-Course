import {Component} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
declare var require: any
import * as moment from 'jalali-moment';
import { RegisterService } from '../../_services/register.service';

@Component({
    selector : 'register',
    templateUrl:'./register.page.html',
    styleUrls:['register.page.scss']
    
})
export class RegisterPage{
    calendarIcon= require("assets/images/calendar-icon.svg");
    
    user={courseId:'',firstName:'',lastName:'',nationalCode:'',birthDate:'1370-01-01',sex:'',educationField:'',mobilePhone:'',email:'',rulesCheck:false}
    //banner= require("assets/images/banner.jpg");
    
    constructor(private router:ActivatedRoute,private registerService:RegisterService){
        
    }
    ngOnInit() {
        this.router.params.subscribe((params: Params) => { 
            this.user.courseId=params.courseId;
        })
    }
    onSubmit(){
        let newDate;
        if(this.user.birthDate && this.user.birthDate!=''){
            newDate = new Date( moment.from(`${this.user.birthDate['year']}/${this.user.birthDate['month']}/${this.user.birthDate['day']} 16:40`, 'fa', 'YYYY/M/D HH:mm')
            .format('YYYY-M-D HH:mm:ss'));
        }
        delete this.user.birthDate;
        this.user.birthDate=newDate;
        this.registerService.register(this.user);
    }
    
}