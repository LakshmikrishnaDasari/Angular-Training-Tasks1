import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactfarr',
  templateUrl: './reactfarr.component.html',
  styleUrls: ['./reactfarr.component.scss']
})
export class ReactfarrComponent implements OnInit {

  addform: FormGroup;
  data: boolean;
  index:any;

  constructor( private fb : FormBuilder) { }

  ngOnInit() {

    this.addform=this.fb.group({
      name:[],
      lname:[],
     address:this.fb.array([this.addAddressGroup()])
    });
  }
    addAddressGroup()
    {
      return this.fb.group({
        PrimaryAddress:[],
        Street:[],
        City:[],
        // state:[],
        Zipcode:[]
      });
    }
    get addressArray(){
      return <FormArray> this.addform.get("address");
    }
    addAddress(){
      this.addressArray.push(this.addAddressGroup());
    }
    removeAddress(index){
      this.addressArray.removeAt(index);
    }

    submit(){
      return console.log(this.addform.value);
    }

    add() {
      this.data = true;
    }
}
