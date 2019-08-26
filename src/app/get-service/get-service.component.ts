import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';
import { Employee } from './format';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';


@Component({
  selector: 'app-get-service',
  templateUrl: './get-service.component.html',
  styleUrls: ['./get-service.component.scss']
})
export class GetServiceComponent implements OnInit {

  data1: Employee[];
  userId: any = localStorage.getItem('userId');
  display: boolean = false;
  postdata: FormGroup;

  constructor(private userserices: GetdataService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.postdata = this.fb.group({
      name: new FormControl(),
      age: new FormControl(),
      salary: new FormControl()
    })
    this.getUsers();
    this.userserices.getUserById(this.userId).subscribe((data) => {
      this.postdata.patchValue({ name: data.employee_name, salary: data.employee_salary, age: data.employee_age });
    });
    console.log(this.data1);
  }

  getUsers() {
    this.userserices.getusers().subscribe(data => {
      this.data1 = data;
      console.log(JSON.stringify(this.data1));
    });
  }

  deleteUser(id: any) {
    let index;
    index = this.data1.findIndex(x => x.id === id);
    this.data1 = this.data1.filter((val, i) => i != index);
    this.userserices.deleteuser(id).subscribe(data => {
      console.log('deleted Id is: ', id);
    });
  }

  updateUser(id: any) {
    this.display = true;
    localStorage.removeItem('userId');
    localStorage.setItem('userId', id);
    console.log('--------');
  }

  updateRow(postdata) {
    this.userserices.updateuser(this.postdata.value, this.userId)
      .subscribe(data => {
        console.log('UpdateUser', data);
      });
  }

}
