import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  public cone=true;
  public ctwo=true;
  public style='italic';
  public col='pink';
  public size='20px';
  cities2: any[];
  public On= false;
  public values1 = ["Selenium", "Eclipse", "Visual Studio", "PyCharm"];
  value: Date;
  color2: string = '#1976D2';
  content_copy 
  color: string;
  values:any;
  con:any;
      
     
  // @Input('appHighlight') highlightColor: string;


    

  constructor() {
    this.cities2 = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];
   }

  ngOnInit() {
  }

  toggle(){
    this.cone=!this.cone;
    this.ctwo=!this.ctwo;
  }

  toggle1() {
    this.On = !this.On;

  }

}
