import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chain-parameterpipes',
  templateUrl: './chain-parameterpipes.component.html',
  styleUrls: ['./chain-parameterpipes.component.scss']
})
export class ChainParameterpipesComponent implements OnInit {
  public today = new Date();
  num= 2000;
  public employee = {
    "Name": "Lakshmi Krishna Sri Dasari",
    "ID": "4429",

  }

  birthday = new Date(1997, 3, 11); // April 15, 1988
  toggle = true; // start with true == shortDate
  toggle1 = true; 

  get format() {
    return this.toggle ? 'shortDate' : 'fullDate';
  }

  get format1() {
    return this.toggle1 ? '2.2-3' : '2.4-5';
  }
  dateFormat() {
    this.toggle = !this.toggle;
  }
  numberFormat() {
    this.toggle1 = !this.toggle1;
  }
  constructor() { }

  ngOnInit() {
  }

}
