import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';
import { RegisterService } from '../../_services/register.service';
import { DiscountService } from '../../_services/discount.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { HttpErrorResponse } from '../../../../node_modules/@angular/common/http';
import { Observable } from '../../../../node_modules/rxjs';

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
    discount={"error":false,"code":'',"value":0};
    submitted:boolean=false;
    constructor(private router:Router,private registerService:RegisterService,private discountService:DiscountService) { }
    
    ngOnInit() { 
        this.user=JSON.parse(localStorage.getItem('user-info'));
        this.courses=JSON.parse(localStorage.getItem('courseCache'));
        this.currentCourse=this.courses[this.user.courseId-1];
        if(this.user.birthDate)
        this.birthDate=`${this.user.birthDate.year}/${this.user.birthDate.month}/${this.user.birthDate.day}` ;
    }
    onDiscount({value,valid}:{value:object,valid:boolean}){
        this.submitted=true;
        if(valid){
            this.discountService.getAmount(value['discountCode'],this.user.courseId)
            .catch(this.handleError('get-data'))
            .subscribe(
                data=>{
                this.discount.error=false;
                this.discount.code='';
                this.discount.value=Number(data);
                this.user.couponCode=value['discountCode'];
                localStorage.setItem('user-info',JSON.stringify(this.user));
            },err=>{
                this.discount.error=true;
                this.discount.code='';
                console.log(err);
            },
            ()=>{});
        }
        else{
            this.discount.error=true;
        }
    }
    onSubmit(){
        this.registerService.register(this.user);
    }
    onReturn(){
        this.router.navigate([`/course/${this.user.courseId}`]);
    }
    private handleError(operation: String) {
        return (err: any) => {
            let errMsg = `error in ${operation}() retrieving discount`;
            console.log(`${errMsg}:`, err)
            if(err instanceof HttpErrorResponse) {
                // you could extract more info about the error if you want, e.g.:
                console.log(`status: ${err.status}, ${err.statusText}`);
                // errMsg = ...
            }
            return Observable.throw(errMsg);
        }
    }
}
