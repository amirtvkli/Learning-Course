import { Injectable } from "@angular/core";
import {Http} from '@angular/http';
import {AppConfig} from '../_config/app.config';

@Injectable()

export class RegisterService{
    constructor(private http: Http){}
    result;
    register(user){
        delete user.rulesCheck;
        try {
            this.http.post(AppConfig.BASE_URL+'/registration/register',user)
            .subscribe(res=>{
                this.result=res.json();
                console.log(this.result)
                if(this.result.status==100)
                {
                    window.location.href ="https://www.zarinpal.com/pg/StartPay/" + this.result.authority;
                    
                }
                console.log('sucess');
            },err=>{
                console.error('error happend.')
            });
        } catch (error) {
            console.error(error);
        }
    }
}