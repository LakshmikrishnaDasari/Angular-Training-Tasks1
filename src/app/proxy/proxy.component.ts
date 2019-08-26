import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-proxy',
  templateUrl: './proxy.component.html',
  styleUrls: ['./proxy.component.scss']
})
export class ProxyComponent implements OnInit {
data;
getdata;
getdata1;
getdata2;
  data2: Object;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/get').subscribe(data=>{
      this.getdata =data;
      console.log('using json url1',data);
    });
    
    this.http.get('/api').subscribe(getdata =>{
      console.log('using json url',getdata);
      this.getdata1 = getdata;
    });

  
   this.http.get('/localurl2').subscribe(data=>{
     this.data2 = data;
     console.log('backend data from local host', data);
   });
   
  }
  
  }

