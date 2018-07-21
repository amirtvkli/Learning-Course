import {Component} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

@Component({
    selector : 'register',
    templateUrl:'./register.page.html',
    styleUrls:['register.page.scss']
    
})
export class RegisterPage{
    user={courseId:'',firstName:'',lastName:'',nationalCode:'',birthDate:'',sex:'',educationField:'',mobilePhone:'',email:'',rulesCheck:false}
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