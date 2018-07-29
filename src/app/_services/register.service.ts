import { Injectable } from "@angular/core";
import {Http,Headers,RequestOptions} from '@angular/http';
import {AppConfig} from '../_config/app.config';
 

@Injectable()

export class RegisterService{
    BASE_URL = AppConfig.BASE_URL;

    constructor(private http: Http){}

    register(user){
        delete user.rulesCheck;
        try {
            this.http.post(this.BASE_URL+'/registration/register',user)
            .subscribe(res=>{
                console.log('sucess');
            },err=>{
                console.error('error happend.')
            });
        } catch (error) {
            console.error(error);
        }
    }
}