import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  public On:boolean = false;
  public buttonName:any = 'On';


  private _values1 = ["1", "2", "3"];
  private _values2 = [];
  enableSubDropDown : boolean = false;
  checked: boolean = false;
  constructor() {
    
  }

  toggle() {
    this.On = !this.On;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.On)  
      this.buttonName = "Off";
    else
      this.buttonName = "On";
  }


  firstDropDownChanged(val: any) {
    console.log(val);
    this.enableSubDropDown = true;
    if (val == "1") {
      this._values2 = ["1.1", "1.2", "1.3"];
    }
    else if (val == "2") {
      this._values2 = ["2.1", "2.2", "2.3"];
    }
    else if (val == "3") {
      this._values2 = ["3.1", "3.2", "3.3"];
    }
    else {
      this._values2 = [];
    }
  }
 
}
  