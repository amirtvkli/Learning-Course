import { Component, OnInit, Input } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Router } from '../../../../node_modules/@angular/router';
import { SnackbarService } from '../../../../node_modules/ngx-snackbar';
declare var require: any

@Component({
    selector: 'course-register',
    templateUrl: 'course-register.component.html',
    styleUrls:['./course-register.component.scss']
})

export class RegisterComponent implements OnInit {
    submitted:boolean=false;
    calendarIcon= require("assets/images/calendar-icon.svg");
    user={courseId:'',firstName:'',lastName:'',nationalCode:'',birthDate:{},sex:false,educationField:'',mobilePhone:'',email:'',rulesCheck:false,CouponCode:''}
    constructor(private router:Router,private snackbar:SnackbarService) { }
    @Input() courseId;
    ngOnInit() {
        if(!!localStorage.getItem('user-info')){
            this.user=JSON.parse(localStorage.getItem('user-info'));
        }
     }
    onSubmit({value,valid}:{value:object,valid:boolean}){
        this.submitted=true;
        if(valid){
            this.user.courseId=this.courseId;
            localStorage.setItem('user-info',JSON.stringify(this.user));
            this.router.navigate(['/user-confirm']);
            this.submitted=false;
            this.snackbar.clear();
        }
        else{
            this.snackbar.add({msg:'اطلاعات وارد شده را کنترل نمایید.',
            background: '#da532c',
            color: '#fff',
            action: {
              text: '(خطا در ورود اطلاعات)',
              color: '#fff'
            },});
        }
        
    }
}