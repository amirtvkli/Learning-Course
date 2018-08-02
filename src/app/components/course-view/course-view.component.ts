import {Component,Input} from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
// Course Model
import {Course, CourseList} from '../../_model';

// Price Pipe
import {PricePipe,CapacityPipe} from '../../_pipes';
import { CoursesService } from '../../_services/courses.service';

declare var require: any


@Component({
selector:'course-view',
templateUrl:'./course-view.component.html',
styleUrls: ['./course-view.component.scss']
})


export class CourseViewComponent{
    currentCourse;
    material;
    banner;
    @Input() courseId:number;
    constructor(private router:ActivatedRoute,private course:Course,private courseService:CoursesService){
        //this.courseList=this.course.courseList;

     
    }
    ngOnInit() {
        let courseCache=JSON.parse(localStorage.getItem("courseCache"));
        if(courseCache==null)
        {
            this.courseService.GetCourses();
            courseCache=this.courseService.courses;
        }
        this.currentCourse=courseCache[this.courseId-1];
        this.material= this.currentCourse.chapters.split('*');

        this.banner= require(`assets/images/course${this.courseId}.jpg`);
    }
}