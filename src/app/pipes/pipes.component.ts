import { Component, OnInit } from '@angular/core';
import {  of } from 'rxjs/'
import { delay }  from 'rxjs/operators'

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
testPrice:any;
  name="lakshmi krishna sri"
  public employee={
    "Name":"Lakshmi Krishna Sri Dasari",
    "ID":"4429",

  }
  object: {[key: number]: string} = {2: 'foo', 1: 'bar'};
  map = new Map([[2, 'foo'], [1, 'bar']]);

  public date=new Date();
  text: any;
 
  
  constructor() { }

  ngOnInit() {
    this.text = of('Learning Async Pipe').pipe(delay(3000))
  }
 

}
