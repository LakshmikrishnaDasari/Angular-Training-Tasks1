import { Component, OnInit, ɵALLOW_MULTIPLE_PLATFORMS, ViewChild, ElementRef } from '@angular/core';

import {Message} from 'primeng/components/common/api';
import {MessageService} from 'primeng/components/common/messageservice';
import { Child1Component } from '../child1/child1.component';
import { ZipcodeDirective } from '../zipcode.directive';


@Component({
  selector: 'app-templatedriven',
  templateUrl: './templatedriven.component.html',
  styleUrls: ['./templatedriven.component.scss']
})
export class TemplatedrivenComponent implements OnInit {
  formname: string = "Application Form(Template Driven)"
  form1:string="Fill all the fields";
  stream: any[];
  streamList: any[];
  selectedstream: any[];
  places: any[];
  selectedplaces: any[];
  states: string[] = ['AndhraPradesh', 'TamilNadu', 'Telangana', 'Kerala', 'Bihar', 'Orissa'];
  filteredstates: any[];
  brand: string;
  add1: boolean;
  data: boolean = false;
  name: any[];
  table: any[] = [];
  scrollableCols: { field: string; header: string; }[];
  formname1: string='Click Check button After Filling The Form';
  pubPropText: string='Testing pubProp value';
  msgs1: any[] = [];
  toggleChildElement: boolean;
  msgs: Message[] = [];
  Salary: '';
  DateOfBirth:any;
  Interested:any;
  QA:any;
  Email:any;
  Password:any;
  cPassword:any;
  SelectState:any;
  Contact:any;
  Experience:any;
  Yearofpassedout:any;
  Gender:any;
  val1:any;
  Rating:any;
  Flexibletoworkin:any;
  City:any;
  Street:any;
  Door:any;
  Pincode:any;
  getSelectedplaces:any;


 @ViewChild(Child1Component,{static: false})view:Child1Component


  


  constructor() {
    this.streamList = [
      { label: 'C.S.E' },
      { label: 'E.C.E' },
      { label: 'MECH' },
      { label: 'CIVIL' },
      { label: 'E.E.E' },


    ]
    
    this.selectedplaces = [

      { label: 'Miracle Valley', value: { name: 'Miracle Valley', code: 'NY' } },
      { label: 'Miracle Heights', value: { name: 'Miracle Heights', code: 'RM' } },
      { value: { name: 'Miracle City', code: 'LDN' } }

    ];

  }
  filterstates(event) {
    this.filteredstates = [];
    for (let i = 0; i < this.states.length; i++) {
      let brand = this.states[i];
      if (brand.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
        this.filteredstates.push(brand);
      }
    }
    
  }


  ngOnInit() {

    this.scrollableCols = [
      { field: 'name', header: 'Name' },
      { field: 'DateOfBirth', header: 'Date Of Birth' },
      { field: 'Interested', header: 'Interested In' },
      { field: 'Email', header: 'Email Address' },
      { field: 'Password', header: 'password' },
      { field: 'Salary', header: 'Expected salary' },
      { field: 'stream', header: 'Stream' },
      { field: 'SelectState', header: 'SelectState' },
      { field: 'Contact', header: 'Contact Number' },
      { field: 'Experience', header: 'Any Prior Experience' },
      { field: 'Yearofpassedout', header: 'Year of passedout' },
      { field: 'gender', header: 'Gender' },
      { field: 'Rating', header: 'Rating in soft Skills' },
      { field: 'City', header: 'Address', },
      { field: 'Street', header: 'Street', },
      { field: 'Door', header: 'Door no', },
      { field: 'Pincode', header: 'Pincode' },


    ];
  }

  onSubmit(appform) {
    console.log(appform.value);
    // val:any=appform.value;
  }
  
  add() {
    this.data = true;
    // this.msgs.push({severity:'success', summary:'Success Message', detail:'Order submitted'});
    // this.view.add()

  }
  viewchild(){
  this.view.add1()
 }


  addtotable(appform) {
    console.log(appform.value, 'Values')
    this.table.push(appform.value);
  }
  changeMyTitle() {
    this.formname1 = 'Once Crosscheck all the fields or filled or not';
  }
  

}
