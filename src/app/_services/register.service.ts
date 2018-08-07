import { Injectable } from "@angular/core";
import {Http} from '@angular/http';
import {AppConfig} from '../_config/app.config';
import { NgxSpinnerService } from "../../../node_modules/ngx-spinner";
import { SnackbarService } from "../../../node_modules/ngx-snackbar";
import * as moment from 'jalali-moment';

@Injectable()

export class RegisterService{
    constructor(private http: Http,private spinner:NgxSpinnerService,private snackbar:SnackbarService){}
    result;
    register(user){
        let newDate;
        if(user.birthDate){
            newDate = new Date( moment.from(`${user.birthDate['year']}/${user.birthDate['month']}/${user.birthDate['day']} 16:40`, 'fa', 'YYYY/M/D HH:mm')
            .format('YYYY/M/D HH:mm:ss'));
        }
        user.birthDate=newDate;
        delete user.rulesCheck;
        try {
            this.spinner.show();
            this.http.post(AppConfig.BASE_URL+'/registration/register',user)
            .subscribe(res=>{
                this.result=res.json();
                if(this.result.status==100)
                {
                    this.snackbar.add({
                        msg: 'در حال انتقال به صفحه پرداخت بانک...',
                        color: '#ffffff',
                        action: {
                            text: '(زرین‌پال)',
                            color: '#ffffff'
                        },
                    });
                    window.location.href ="https://www.zarinpal.com/pg/StartPay/" + this.result.authority;
                }
            },err=>{
                this.spinner.hide();
                this.snackbar.add({
                    msg: 'خطایی رخ داده است.',
                    background:'#da532c',
                    color: '#ffffff',
                    action: {
                        text: '(خطا در ارتباط با درگاه پرداخت بانک)',
                        color: '#ffffff'
                    },
                });
            });
        } catch (error) {
            console.error(error);
        }
    }
}