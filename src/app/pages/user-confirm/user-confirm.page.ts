import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '../../../../node_modules/@angular/compiler';
import { Router } from '../../../../node_modules/@angular/router';
import * as moment from 'jalali-moment';
import { RegisterService } from '../../_services/register.service';

@Component({
    selector: 'user-confirm',
    templateUrl: './user-confirm.page.html',
    styleUrls:['./user-confirm.page.scss']
})
export class UserConfirmPage implements OnInit {
    user;
    courses;
    currentCourse;
    birthDate;
    constructor(private router:Router,private registerService:RegisterService) { }

    ngOnInit() { 
        this.user=JSON.parse(localStorage.getItem('user-info'));
        this.courses=JSON.parse(localStorage.getItem('courseCache'));
        this.currentCourse=this.courses[this.user.courseId-1];
        if(this.user.birthDate)
       this.birthDate= moment.from(this.user.birthDate.toString(),'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD');
    }
    onDiscount(){
        
    }
    onSubmit(){
        this.registerService.register(this.user);
    }
    onReturn(){
        this.router.navigate([`/course/${this.user.courseId}`]);
    }
}