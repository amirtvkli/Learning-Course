import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Subject, Observable } from 'rxjs'
import { AppConfig } from "../_config/app.config";
import { SnackbarService } from "ngx-snackbar";
import { of } from 'rxjs/observable/of';
import { Course,CourseList } from "../_model";

@Injectable()
export class CoursesService{
  //Logos List
  private courseStore=[];
  private courseSubject=new Subject();
  courses=this.courseSubject.asObservable();
  isLoading:boolean=false;
  COURSE_KEY="courseCache";
  courseCache
  constructor(private http:Http,private snackbar:SnackbarService){}
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
    this.snackbar.add({
      msg: 'لطفا منتظر بمانید',
      background: '#00a2ff',
      color: '#fff',
      timeout: 5000,
      action: {
        text: '',
        onClick: (snack) => {
        },
      },
      onAdd: (snack) => {
        console.log('added: ' + snack.id);
      },
      onRemove: (snack) => {
        console.log('removed: ' + snack.id);
      }
    });
    
    
    return this.http.get(AppConfig.BASE_URL + "/registration/getcourses")
    .subscribe( res => {
      this.courseStore = res.json();
      localStorage.setItem(this.COURSE_KEY,JSON.stringify(this.courseStore));
      this.courseSubject.next(this.courseStore);
      this.snackbar.clear();
    },
    err=>{
      console.error('cant get the course list.')
    });
  }
  
}