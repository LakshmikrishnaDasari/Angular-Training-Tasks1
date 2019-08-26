import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { SelectItem } from 'primeng/components/common/selectitem';
import { salaryvalidator } from './salaryvalidator/salaryvalidator';
import { zipcodevalidator, passwordvalidator } from './salaryvalidator/zipcode';

@Component({
  selector: 'app-formtrail',
  templateUrl: './formtrail.component.html',
  styleUrls: ['./formtrail.component.scss']
})
export class FormtrailComponent implements OnInit {
  Applicationform: FormGroup;
  addresForm: FormGroup;
  date1: Date;
  Qualification: any[];
  selectedState: String;
  stateSuggestions: any[];
  stream: any[];
  selectedstream: any;
  add1: boolean = false;
  frozenCols: any[];
  values: string[];
  checked: boolean;
  places: SelectItem[];
  selectedplaces: any[];
  selectedValue: string;
  val1: number;
  cars5: any[];
  applicationGrid: any[] = [];
  carService: any;
  frozen: {}[];
  scrollableCols: { field: string; header: string; }[];
  results: any;
  states: string[] = ['AndhraPradesh','TamilNadu','Telangana','Kerala','Bihar','Orissa'];
  filteredstates: any[];
  brand: string;
  vin: any[];
  searchState($event) {
    this.stateSuggestions = [
      { Id: 1, name: 'AndhraPradesh' },
      { Id: 2, name: 'TamilNadu' },
      { Id: 3, name: 'Telangana' },
      { Id: 4, name: 'Kerala' },
      { Id: 5, name: 'Bihar' },
      { Id: 6, name: 'Orissa' },
      
    ];
 
  }

  constructor(private fb: FormBuilder) {
    this.stream = [
      { label: 'SELECT STREAM', value: '' },
      { label: 'C.S.E', value: 'C.S.E' },
      { label: 'E.C.E', value: 'E.C.E' },
      { label: 'MECH', value: 'MECH' },
      { label: 'CIVIl', value: 'CIVIl' }

    ];

    this.places = [

      { label: 'Miracle Valley', value: { id: 1, name: 'Miracle Valley', code: 'NY' } },
      { label: 'Miracle Heights', value: { id: 2, name: 'Miracle Heights', code: 'RM' } },
      { label: 'Miracle City', value: { id: 3, name: 'Miracle City', code: 'LDN' } }

    ];
  }
  message:string;

  ChangeTitle1($event) {
    this.message = $event
  }
  filterstates(event) {
    this.filteredstates = [ ];
    for(let i = 0; i < this.states.length; i++) {
        let brand = this.states[i];
        if(brand.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
            this.filteredstates.push(brand);
        }
    }
}
  ngOnInit() {
    this.addresForm = this.fb.group({
      Address: [''],
      Address1: [''],
      Address2: [''],
      pincode: ['',Validators.compose([Validators.required, zipcodevalidator])],
    });
    console.log('-------',JSON.stringify(this.addresForm.value));
    this.Applicationform = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(25)])],
      lname: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(25)])],
      DateOfBirth: [''],
      Qualification: [''],
      EmailAddress: ['', Validators.compose([Validators.required,Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.com")])],
      password: ['',  Validators.compose([Validators.required,Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*?['''!#$%&()*+-./:=?@\\[\\]\\\\^_`{}~]).{8,64}$")])],
      Confirmpassword: ['',Validators.compose([Validators.required, passwordvalidator ])],
      SelectState: [''],
      Stream: [''],
      addresForm: this.fb.group({
        Address: [''],
        Address1: [''],
        Address2: [''],
        pincode: ['',Validators.compose([Validators.required, zipcodevalidator])],
      }),
      AnyPriorExperience: [''],
      Yearofpassedout: [''],
      Gender: [''],
      ContactNumber: [''],
      Flexibletoworkin: [''],
      Rating: [''],
      salary: ['', Validators.compose([Validators.required, Validators.min(5000), salaryvalidator])]
      

    });
    this.Applicationform.patchValue({ AnyPriorExperience: false })
    
    // this.frozenCols = [
    //   { field: 'name', header: 'Name' }
    // ];
    this.scrollableCols = [
      { field: 'name', header: 'Name' },
      { field: 'DateOfBirth', header: 'Date Of Birth' },
      { field: 'Qualification', header: 'Interested In:' },
      { field: 'EmailAddress', header: 'Email Address' },
      { field: 'password', header: 'password' },
      { field: 'Stream', header: 'Stream' },
      { field: 'addresForm', header: 'Address',  },
      // { field: 'pincode', header: 'Pincode' },
      { field: 'AnyPriorExperience', header: 'Any Prior Experience' },
      { field: 'Yearofpassedout', header: 'Year of passedout' },
      { field: 'Gender', header: 'Gender' },
      { field: 'Rating', header: 'Rating in soft Skills' },
      { field: 'ContactNumber', header: 'Contact Number' },
      { field: 'SelectState', header: 'SelectState' }
      
    ];
  }
  JsonVal(){
    this.vin = this.Applicationform.controls.addresForm.value;
   
  // 
    
    console.log("---------", this.Applicationform.controls.addresForm.value);
  }
  reset() {
    this.Applicationform.reset();
  }
  add() {
    this.add1 = true;

  }
  addToTable() {
    console.log('Values', this.Applicationform)
    this.applicationGrid.push(this.Applicationform.value);
    console.log(this.Applicationform.controls.SelectState.value);
  }
  getSelectedplaces() {
    this.selectedplaces = this.Applicationform.controls.Flexibletoworkin.value;
  }

  onblur(){
    
  }

  public submitForm() {
    if(this.Applicationform.valid){
        // submit form
    } else {
        let invalidFields = [].slice.call(document.getElementsByClassName('ng-invalid'));
        invalidFields[1].focus();
    }
}

}
