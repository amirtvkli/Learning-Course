import { Injectable } from "@angular/core";
import {Http} from "@angular/http";
import  'rxjs/add/operator/map'
@Injectable()
export class CoursesService{
    url : string="http://localhost:6905/Registration"
    constructor(private http:Http){}
    GetCourses()
    {
        return this.http.get(this.url + "/GetCourses").map(res=>{return res.json()});
    }
    
}