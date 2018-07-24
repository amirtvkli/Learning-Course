import {Component} from '@angular/core';
declare var require: any


@Component({
selector:'home',
templateUrl:'./home.page.html',
styleUrls: ['./home.page.scss']
})


export class HomePage{
    banner= require("assets/images/banner.jpg");
}