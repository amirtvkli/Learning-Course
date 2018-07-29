import {Component} from '@angular/core';
import {Course} from '../../_model/index';
import { CoursesService } from '../../_services';
@Component({
    selector:'course-list',
    templateUrl:'./course-list.component.html',
    styleUrls:['./course-list.component.scss']
})

export class CourseListComponent{
    constructor(protected courses:CoursesService){
        courses.GetCourses();
    }
   
}