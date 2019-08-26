import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-getjson',
  templateUrl: './getjson.component.html',
  styleUrls: ['./getjson.component.scss']
})
export class GetjsonComponent implements OnInit {
  getjson1: any;
  getjson: any [];

  constructor (private http: HttpClient) { }
  

  ngOnInit () {
    this.http.get('./assets/addressAndContacts.json').subscribe((data:any[])=>{
      this.getjson=data;
      this.getjson1=this.getjson[0].addressAndContacts;
       	

        //  console.log('-----',this.getjson1);
 
         console.log('Before pop',this.getjson);
         console.log("popped elem",this.getjson1.pop());
         console.log('after pop',this.getjson1);
        //  console.log("pushed elem",this.getjson1.push('lakshmi'));
        //  console.log('after PUSH',this.getjson1);
   
         //  this.forin()


      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
  // forin(){
  
  //   for(var index in this.getjson1)
  //   // console.log('----forin-----',this.getjson1[index]);
    
   
  // }
  // console.log('----forin-----',this.getjson);
}

