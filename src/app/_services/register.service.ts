import { Injectable } from "@angular/core";
import {Http} from '@angular/http';
import {AppConfig} from '../_config/app.config';

@Injectable()

export class RegisterService{
    constructor(private http: Http){}

    register(user){
        delete user.rulesCheck;
        try {
            this.http.post(AppConfig.BASE_URL+'/registration/register',user)
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