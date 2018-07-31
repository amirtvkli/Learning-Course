import {Component} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector : 'course',
    templateUrl:'./course.page.html',
    styleUrls:['course.page.scss']
    
})
export class CoursePage{
    courseId;
    constructor(private router:ActivatedRoute){
        
    }
    ngOnInit() {
        this.router.params.subscribe((params: Params) => { 
            this.courseId=params.courseId;
        })
    }
}