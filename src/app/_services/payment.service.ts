import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {AppConfig} from '../_config/app.config';
import 'rxjs/add/operator/map';


@Injectable()
export class PaymentService {
    constructor(private http:Http) { }
    getPaymentStatus(authority){
        try {
            return this.http.get(AppConfig.BASE_URL+'/registration/verify/'+authority)
            .map((res: Response) => res.json())
        } catch (error) {
          
        }
    }
}