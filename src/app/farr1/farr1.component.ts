import { Component, OnInit, NgModule } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';


@Component({
  selector: 'app-farr1',
  templateUrl: './farr1.component.html',
  styleUrls: ['./farr1.component.scss']
})
export class Farr1Component implements OnInit {


  nestedforms: FormGroup;
  data: boolean;

  constructor( private fb : FormBuilder) { }

  ngOnInit() {

    this.nestedforms=this.fb.group({
      FirstName:[],
      LastName:[],
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
      return <FormArray> this.nestedforms.get("address");
    }
    addAddress(){
      this.addressArray.push(this.addAddressGroup());
    }
    removeAddress(index){
      this.addressArray.removeAt(index);
    }

    submit(){
      return console.log(this.nestedforms.value);
    }

    add() {
      this.data = true;
    }
}
