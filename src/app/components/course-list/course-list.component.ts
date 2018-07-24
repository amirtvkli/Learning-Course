import {Component} from '@angular/core';
import {Course} from '../../_model/index';
@Component({
    selector:'course-list',
    templateUrl:'./course-list.component.html',
    styleUrls:['./course-list.component.scss']
})

export class CourseListComponent{
    courseList;
    constructor(private course:Course){
        this.courseList=this.course.courseList;
    }
   
}