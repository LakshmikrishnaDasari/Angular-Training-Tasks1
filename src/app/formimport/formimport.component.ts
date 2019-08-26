import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formimport',
  templateUrl: './formimport.component.html',
  styleUrls: ['./formimport.component.scss']
})
export class FormimportComponent implements OnInit {

  @Input() Applicationform: FormGroup
  constructor() { }

  ngOnInit() {
  }

}
