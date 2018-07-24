import {Component} from '@angular/core';
declare var require: any

@Component({
selector:'nav',
templateUrl:'./nav.component.html',
styleUrls: ['./nav.component.scss']
})

export class NavComponent{
    logo= require("assets/images/logo-text.png");
}