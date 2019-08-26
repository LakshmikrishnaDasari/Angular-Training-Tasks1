import { Component, OnInit, wtfLeave } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: any = [{
    name: 'lea' , age:2
  },
   { name:'mishika' , age:1
  }
  ];
  constructor() { }

  ngOnInit() {
  }

}
