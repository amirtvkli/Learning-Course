import {Component} from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';

declare var require: any


@Component({
selector:'course',
templateUrl:'./course.page.html',
styleUrls: ['./course.page.scss']
})


export class CoursePage{
    courseId;
    //banner= require("assets/images/banner.jpg");

    constructor(private router:ActivatedRoute){

    }
    ngOnInit() {
        this.router.params.subscribe((params: Params) => { 
            this.courseId=params.courseId;
            console.log(this.courseId);
        })
    }
}