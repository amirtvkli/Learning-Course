import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Subject } from 'rxjs'
import { AppConfig } from "../_config/app.config";
import { SnackbarService } from "ngx-snackbar";

@Injectable()
export class CoursesService{
     //Logos List
     private courseStore=[];
     private courseSubject=new Subject();
     courses=this.courseSubject.asObservable();
     isLoading:boolean=false;

    constructor(private http:Http,private snackbar:SnackbarService){}
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
            this.courseSubject.next(this.courseStore);
            this.snackbar.clear();
        },
        err=>{
            console.error('cant get the course list.')
        });
    }
    
}