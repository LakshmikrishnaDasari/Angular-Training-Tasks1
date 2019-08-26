import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practicespec',
  templateUrl: './practicespec.component.html',
  styleUrls: ['./practicespec.component.scss']
})
export class PracticespecComponent implements OnInit {
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  constructor() { }

  welcome()
  {
    return 'Hii Welcome To Specs';
  }
  ngOnInit() {

  }

}
