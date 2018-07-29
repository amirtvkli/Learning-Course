import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import {Subject} from 'rxjs/Rx'

@Injectable()
export class CoursesService{
    url : string="http://neshanekhane.ir:2029/registration"


     //Logos List
     private courseStore=[];
     private courseSubject=new Subject();
     courses=this.courseSubject.asObservable();
     isLoading:boolean=false;

    constructor(private http:Http){}
    GetCourses()
    {
        return this.http.get(this.url + "/getcourses")
        .subscribe( res => {
            this.courseStore = res.json();
            this.courseSubject.next(this.courseStore);
        },
        err=>{
            console.error('cant get the course list.')
        });
    }
    
}