import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-postdata',
  templateUrl: './postdata.component.html',
  styleUrls: ['./postdata.component.scss']
})
export class PostdataComponent implements OnInit {

 postdata:FormGroup;
  constructor(private fb:FormBuilder, private userserices: GetdataService, private router: Router) { }

  ngOnInit() {

    this.postdata=this.fb.group({
      name:['',Validators.required],
      age:[''],
      salary:['']
    });
  }

  addUser(postdata) {
    this.userserices.addUsers(postdata.value)
    .subscribe(data => {
    console.log(data);
    this.router.navigate(['service']);
    });
    }
   
  }
