import {Component} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector : 'register',
    templateUrl:'./register.page.html',
    styleUrls:['register.page.scss']
    
})
export class RegisterPage{
    courseId;
    user={firstName:'',lastName:'',nationalCode:'',birthDate:'',sex:'',educationField:'',mobilePhone:'',email:'',rulesCheck:false}
    //banner= require("assets/images/banner.jpg");
    
    constructor(private router:ActivatedRoute){
        
    }
    ngOnInit() {
        this.router.params.subscribe((params: Params) => { 
            this.courseId=params.courseId;
            console.log(this.courseId);
            
        })
    }
    onSubmit(){
        console.log(this.user);
    }
    
}