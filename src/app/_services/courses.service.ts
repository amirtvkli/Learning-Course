import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Subject, Observable } from 'rxjs'
import { AppConfig } from "../_config/app.config";
import { SnackbarService } from "ngx-snackbar";
import { of } from 'rxjs/observable/of';
import { Course,CourseList } from "../_model";
import { NgxSpinnerService } from "../../../node_modules/ngx-spinner";

@Injectable()
export class CoursesService{
  //Logos List
  private courseStore=[];
  private courseSubject=new Subject();
  courses=this.courseSubject.asObservable();
  isLoading:boolean=false;
  COURSE_KEY="courseCache";
  courseCache
  constructor(private http:Http,private snackbar:SnackbarService,private spinner: NgxSpinnerService){}
  CourseCache():Observable<CourseList[]>
  {
    this.courseCache=localStorage.getItem(this.COURSE_KEY);
    if(!!this.courseCache)
    {
      this.courseStore=JSON.parse(this.courseCache);
      this.courseSubject.next(this.courseStore);
    }
    return of(this.courseStore);
  }
  GetCourses()
  {   
    this.spinner.show();
    return this.http.get(AppConfig.BASE_URL + "/registration/getcourses")
    .subscribe( res => {
      this.courseStore = res.json();
      localStorage.setItem(this.COURSE_KEY,JSON.stringify(this.courseStore));
      this.courseSubject.next(this.courseStore);
      this.spinner.hide();
    },
    err=>{
      console.error('cant get the course list.')
      this.spinner.hide();
    });
  }
  
}