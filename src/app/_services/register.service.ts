import { Injectable } from "@angular/core";
import {Http,Headers,RequestOptions} from '@angular/http';
import {AppConfig} from '../_config/app.config';
 

@Injectable()

export class RegisterService{
    BASE_URL = AppConfig.BASE_URL;

    constructor(private http: Http){}

    register(user){
        try {
            this.http.post(this.BASE_URL+'/register',user)
            .subscribe(res=>{

            },err=>{
                
            });
        } catch (error) {
            
        }
    }
}