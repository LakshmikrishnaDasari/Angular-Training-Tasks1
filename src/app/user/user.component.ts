import { Component, OnInit, Input } from '@angular/core';
import { Userservice } from '../users/userservice';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() user: any;
  constructor(private userser:Userservice) { }

  ngOnInit() {
  }
  onEdituser(user){
    this.userser.sendUser(user);
  }

}
