import { Injectable } from "@angular/core";
import {Http} from "@angular/http";
import  'rxjs/add/operator/map'
@Injectable()
export class CoursesService{
    url : string="http://neshanekhane.ir:2029/registration"
    constructor(private http:Http){}
    GetCourses()
    {
        return this.http.get(this.url + "/getcourses").map(res=>{return res.json()},err=>{console.error('cant get the course list.')});
    }
    
}