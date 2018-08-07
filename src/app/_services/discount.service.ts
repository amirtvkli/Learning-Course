import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {AppConfig} from '../_config/app.config';
import { Observable } from 'rxjs/Rx'
import 'rxjs/operators/map';

@Injectable()
export class DiscountService {
    constructor(private http: Http) { }
    
    getAmount(couponCode,courseId){
        try {
            return this.http.get(AppConfig.BASE_URL+`/registration/couponvalidate/${couponCode}/${courseId}`)
            .map((res: Response) => res.json())  // could raise an error if invalid JSON
        }
        catch(error){

        }
        finally{}
    }
}