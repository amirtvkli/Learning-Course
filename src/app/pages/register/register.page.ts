import {Component} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
declare var require: any


@Component({
    selector : 'register',
    templateUrl:'./register.page.html',
    styleUrls:['register.page.scss']
    
})
export class RegisterPage{
    calendarIcon= require("assets/images/calendar-icon.svg");

    user={courseId:'',firstName:'',lastName:'',nationalCode:'',birthDate:'1370-01-01',sex:'',educationField:'',mobilePhone:'',email:'',rulesCheck:false}
    //banner= require("assets/images/banner.jpg");
    
    constructor(private router:ActivatedRoute){
        
    }
    ngOnInit() {
        this.router.params.subscribe((params: Params) => { 
            this.user.courseId=params.courseId;
        })
    }
    onSubmit(){
        console.log(this.user);
    }
    
}