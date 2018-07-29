import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http';
import { AppConfig } from '../_config/app.config';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
    
    BASE_URL = AppConfig.BASE_URL;
    TOKEN_KEY=AppConfig.TOKEN_KEY;
    
    constructor(private http:Http,private router:Router) { }
    
    get isAuthenticated() {
        return !!localStorage.getItem(this.TOKEN_KEY);
    }
    
    get tokenHeader() {
        var header = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem(this.TOKEN_KEY) });
        return new RequestOptions({ headers: header });
    }
    
    login(data) {
        try {
            this.http.post(this.BASE_URL + '/auth/login', data)
            .subscribe(
                res => {
                    this.authentication(res);
                },
                err => {
                    console.log('login error'+err);
                }
            );
        } catch (error) {
            console.log('login serious error'+error);
        }
        
    }
    logout(){
        localStorage.removeItem(this.TOKEN_KEY);
    }
    
    authentication(res){
        var authResponse = res.json();
        if (!authResponse.token)
        return;
        else {
            localStorage.setItem(this.TOKEN_KEY, authResponse.token);
            this.router.navigate(['/']);
        }
    }
}