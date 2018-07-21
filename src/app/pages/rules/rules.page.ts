import {Component} from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector:'rules',
    templateUrl:'./rules.page.html',
    styleUrls:['./rules.page.scss']
})

export class RulesPage{
    constructor( private location: Location ) { 
    }
    goBack() {
        // window.history.back();
        this.location.back();
    }
}