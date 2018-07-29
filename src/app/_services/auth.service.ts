import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http';
import { AppConfig } from '../_config/app.config';
import { Router } from '@angular/router';
import { SnackbarService } from 'ngx-snackbar';

@Injectable()
export class AuthService {
    
    BASE_URL = AppConfig.BASE_URL;
    TOKEN_KEY=AppConfig.TOKEN_KEY;
    
    constructor(private http:Http,private router:Router,private snackbar:SnackbarService) { }
    
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
                    this.snackbar.add({
                        msg: 'نام کاربری یا گذرواژه اشتباه است.',
                        background: '#c70000',
                        color: '#fff',
                        timeout: 3000 ,
                        action: {
                          text: '',
                          onClick: (snack) => {
                            console.log('dismissed: ' + snack.id);
                          },
                        },
                        onAdd: (snack) => {
                          console.log('added: ' + snack.id);
                        },
                        onRemove: (snack) => {
                          console.log('removed: ' + snack.id);
                        }
                    })
                }
            );
        } catch (error) {
            this.snackbar.add({
                msg: 'خطایی رخ داده است.',
                timeout: 3000 ,
                action: {
                  text: '',
                  onClick: (snack) => {
                    console.log('dismissed: ' + snack.id);
                  },
                },
                onAdd: (snack) => {
                  console.log('added: ' + snack.id);
                },
                onRemove: (snack) => {
                  console.log('removed: ' + snack.id);
                }
            })
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
            this.snackbar.add({
                msg: 'شما به پنل کاربری خود وارد شدید.',
                background: '#00a40c',
                color: '#fff',
                timeout: 5000
                // ,
                // action: {
                //   text: 'Undo',
                //   onClick: (snack) => {
                //     console.log('dismissed: ' + snack.id);
                //   },
                // },
                // onAdd: (snack) => {
                //   console.log('added: ' + snack.id);
                // },
                // onRemove: (snack) => {
                //   console.log('removed: ' + snack.id);
                // }
              });
        }
    }
}