import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/components/common/selectitem';
import { FormGroup, FormBuilder, FormControlName, FormControl, ReactiveFormsModule, RequiredValidator, Validators } from '@angular/forms';
import { TouchSequence } from 'selenium-webdriver';


@Component({
  selector: 'app-formgroup',
  templateUrl: './formgroup.component.html',
  styleUrls: ['./formgroup.component.scss']
})
export class FormgroupComponent implements OnInit {

  Applicationform: FormGroup;
  date1: Date;
  // selectedCategories: String[] = ['UG'];
  Qualification: any[];
  selectedState: String;
  stateSuggestions: any[];
  stream: any[];
  selectedstream: any;
  add1: boolean = false;
  
  values: string[];
  checked: boolean;
  places: SelectItem[];
  selectedplaces: any[];
  selectedValue: string;
  val1: number;

  applicationGrid: any[] = [];
  frozenCols: { field: string; header: string; }[];
  scrollableCols: { field: string; header: string; }[];

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

  ngOnInit() {
    this.Applicationform = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      DateOfBirth: [''],
      Qualification: [''],
      EmailAddress: ['', Validators.compose([Validators.required,Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.com")])],
      password: [''],
      Confirmpassword: [''],
      SelectState: [''],
      Stream: [''],
      Address: [''],
      AnyPriorExperience: [''],
      Yearofpassedout: [''],
      Gender: [''],
      ContactNumber: [''],
      RateYourselfInCommunicationSkills: [''],
      Flexibletoworkin: ['']
     
    });
    this.Applicationform.patchValue({AnyPriorExperience : false})

    
  }
  reset() {
    this.Applicationform.reset();
  }
  add() {
    this.add1 = true;

  }
  addToTable() {
    console.log(this.Applicationform.value, 'Values')
    this.applicationGrid.push(this.Applicationform.value);
    console.log(this.Applicationform.controls.SelectState.value);
  }
  getSelectedplaces() {
    this.selectedplaces = this.Applicationform.controls.Flexibletoworkin.value;
  }
  
}
