import {Component} from '@angular/core';
import {Course} from '../../_model/index';
import { CoursesService } from '../../_services';
@Component({
    selector:'course-list',
    templateUrl:'./course-list.component.html',
    styleUrls:['./course-list.component.scss']
})

export class CourseListComponent{
    courseList;
    constructor(private courses:CoursesService){
        courses.GetCourses().subscribe(allCourses=>this.courseList=allCourses);
    }
   
}