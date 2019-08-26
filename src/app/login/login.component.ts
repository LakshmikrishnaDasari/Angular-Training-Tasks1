import { Component, OnInit } from '@angular/core';
import { PracticespecComponent } from '../practicespec/practicespec.component';

@Component({
  selector: 'app-login',
   templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  //template: `<a [hidden]="needsLogin()">Login</a>`
})
export class LoginComponent implements OnInit {

  constructor(private auth: PracticespecComponent) { }

  ngOnInit() {
  }

  needLogin(){
    return !this.auth.isAuthenticated();
  }

}
