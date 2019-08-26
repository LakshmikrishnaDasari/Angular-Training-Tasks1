import { Component, OnInit } from '@angular/core';
import { Userservice } from '../users/userservice';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.scss']
})
export class UserformComponent implements OnInit {
  user: object;
  constructor(private userserr: Userservice) { }

  ngOnInit() {
    this.getUser();
  }
  getUser() {
    this.userserr.user$.subscribe(response => {
this.user =response;
      console.log(response);
    });

  }
}
