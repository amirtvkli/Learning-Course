import {Component} from '@angular/core';
import {Course} from '../../_model';
import { CoursesService } from '../../_services/courses.service';
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