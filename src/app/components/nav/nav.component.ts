import {Component} from '@angular/core';
import { AuthService } from '../../_services/auth.service';
declare var require: any

@Component({
selector:'nav',
templateUrl:'./nav.component.html',
styleUrls: ['./nav.component.scss']
})

export class NavComponent{
constructor(protected auth:AuthService){}
    logo= require("assets/images/logo-text.png");

    logOut(){
        this.auth.logout();
    }
}