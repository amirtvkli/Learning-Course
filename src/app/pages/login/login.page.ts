import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';

@Component({
    selector: 'login',
    templateUrl: './login.page.html',
    styleUrls:['./login.page.scss']
})

export class LoginPage implements OnInit {
    data={username:'',password:''};
    constructor(private auth:AuthService) { }

    ngOnInit() { }

    onSubmit(){
       this.auth.login(this.data);
      
    }
}