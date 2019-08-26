import { Component, OnInit } from '@angular/core';
import { PracticespecComponent } from '../practicespec/practicespec.component';
@Component({
  selector: 'app-login1formock',
  templateUrl: './login1formock.component.html',
  styleUrls: ['./login1formock.component.scss']
})
export class Login1formockComponent implements OnInit {

  constructor(private auth: PracticespecComponent) { }

  ngOnInit() {
  }
  needLogin(){
    return !this.auth.isAuthenticated();
  }

}
