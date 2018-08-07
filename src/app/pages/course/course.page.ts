import {Component} from '@angular/core';
import { ActivatedRoute, Params, Router, NavigationEnd } from '@angular/router';

@Component({
    selector : 'course',
    templateUrl:'./course.page.html',
    styleUrls:['course.page.scss']
    
})
export class CoursePage{
    courseId;
    constructor(private route:ActivatedRoute,private router:Router){
        
    }
    ngOnInit() {
        this.route.params.subscribe((params: Params) => { 
            this.courseId=params.courseId;
        })
    }
}