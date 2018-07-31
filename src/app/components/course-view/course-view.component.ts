import {Component} from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
// Course Model
import {Course} from '../../_model';

// Price Pipe
import {PricePipe,CapacityPipe} from '../../_pipes';

declare var require: any


@Component({
selector:'course-view',
templateUrl:'./course-view.component.html',
styleUrls: ['./course-view.component.scss']
})


export class CourseViewComponent{
    courseId;
    courseList;
    currentCourse;
    banner;

    constructor(private router:ActivatedRoute,private course:Course){
        this.courseList=this.course.courseList;
     
    }
    ngOnInit() {
        this.router.params.subscribe((params: Params) => { 
            this.courseId=params.courseId;
            this.currentCourse=this.courseList[this.courseId-1];
            this.banner= require(`assets/images/course${this.courseId}.jpg`);
        })
    }
}