import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-proxy-crud',
  templateUrl: './proxy-crud.component.html',
  styleUrls: ['./proxy-crud.component.scss']
})
export class ProxyCrudComponent implements OnInit {
  getdata1: Object;
  getdata2: Object;
  proxyform: FormGroup;
  display = false;
  constructor(private http: HttpClient, private fb: FormBuilder) { }

  ngOnInit() {
    this.proxyform = this.fb.group({
      id: [''],
      name: [''],
      gender: ['']

    });
    this.get();


  }
  deleteuser(id: number) {
    this.http.delete('/deletedata' + '/' + id, { responseType: "text" }).subscribe(data => {
      console.log('-----', data);
      this.get();
    });


  }
  get() {
    this.http.get('/getalldata').subscribe(getdata => {
      console.log('-----', getdata);
      this.getdata1 = getdata;
    });
  }
  updateuser(record) {
    this.display = true;
    this.proxyform.patchValue(record);
  }

  updateRow(user) {
    this.http.put('/updatedata' + '/' + user.id, user, { responseType: "text" }).subscribe(getdata => {
      console.log('-----', getdata);
      this.display = false;
      this.get();

    });
    this.proxyform.reset();
  }
  addUser(proxyform) {
    console.log('---', proxyform.value)
    this.http.post('/adddata', proxyform.value , { responseType: "text" }).subscribe(data => {
      console.log('----', data);
      this.display = false;
      this.get();
    })
  }
  getform() {
    this.display = true;
    this.proxyform.reset();
  }
}
