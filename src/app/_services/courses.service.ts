import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Subject } from 'rxjs/Rx'
import { AppConfig } from "../_config/app.config";

@Injectable()
export class CoursesService{
     //Logos List
     private courseStore=[];
     private courseSubject=new Subject();
     courses=this.courseSubject.asObservable();
     isLoading:boolean=false;

    constructor(private http:Http){}
    GetCourses()
    {
        return this.http.get(AppConfig.BASE_URL + "/registration/getcourses")
        .subscribe( res => {
            this.courseStore = res.json();
            this.courseSubject.next(this.courseStore);
        },
        err=>{
            console.error('cant get the course list.')
        });
    }
    
}