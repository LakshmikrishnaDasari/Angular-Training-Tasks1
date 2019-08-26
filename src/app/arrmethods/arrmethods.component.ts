import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-arrmethods',
  templateUrl: './arrmethods.component.html',
  styleUrls: ['./arrmethods.component.scss']
})
export class ArrmethodsComponent implements OnInit {

  jsondata1: any;
  jsondata: any [];
  jsondata2: any ;
  jsondata3: any;
  jsondata4: any;
  jsondata5: any;

  constructor (private http: HttpClient) { }
  // filterByString(jsondata1, s) {
  //   jsondata1.filter(e => e.jsondata1.includes(s) || e.strength.includes(s));
  // }



  for2(){
//  const gg =   this.jsondata.forEach(function (value) {
//      console.log("foreach values", value);
  //  }); 
  this.jsondata.forEach(each);
  function each(element, index, array){
    console.log("foreach values", JSON.stringify(element));
  }
}



forin1(){
 for(var json in this.jsondata){
   console.log("forin:",JSON.stringify(this.jsondata[json]));
 }
}

forof1(){
  for(let json1 of this.jsondata){
    console.log("forof-----:",JSON.stringify(json1));
  }
 }

  ngOnInit () {
    this.http.get('./assets/addressAndContacts copy.json').subscribe((data:any)=>{
      this.jsondata=data[0].problems;
      this.jsondata1=data[0].problems[0].Diabetes[0].medications[0].medicationsClasses[0].className[0].associatedDrug[0].strength;

      // obj.problems[0].Diabetes[0].medications[0].medicationsClasses[0].className[0].associatedDrug[0].name
    //  this.jsondata1=this.jsondata.batter;
      // this.jsondata2=this.jsondata1[0].deliveryAddresses;
      this.jsondata3=this.jsondata.push('lakshmi:2513');
      this.jsondata3=this.jsondata.push('lea:4429');
      this.jsondata3=this.jsondata.push('sri:4423');
      console.log('hhhhhhh',this.jsondata1);

   
      // this.jsondata5=this.jsondata1.indexof(8);
      this.jsondata4=(this.jsondata).concat(this.jsondata1);
      this.jsondata5=this.jsondata.reverse();
      
      // // console.log(this.filterByString('Filter JSON'+this.jsondata, "500"));
      // console.log(this.filterByString(this.jsondata1, "500"));
  
      // console.log('Filter--: ',this.filterByString(this.jsondata, '500'));
   this.for2();
   this.forin1();
   this.forof1();

         console.log('-----',JSON.stringify(this.jsondata));
 
         console.log('After Concat',JSON.stringify(this.jsondata4));
         console.log('reverse',this.jsondata5);
         console.log('shift:',this.jsondata5.shift());
         console.log('unshift:',this.jsondata5.unshift("lakshmi"));
         console.log('slice:',this.jsondata5.slice(1,2));
         console.log('sort:',this.jsondata5.sort());
         console.log('splice:',this.jsondata5.splice(2,0 , "mishika"));

        this.jsondata2=JSON.stringify(this.jsondata.join("+"));

        console.log('JOin:',this.jsondata2);
        // console.log('FindIndex', this.jsondata.indexOf(2513));   
        //  console.log('-----',this.jsondata2.push('lakshmi'));
        //  console.log("popped elem",this.jsondata1.pop());
          console.log('after pop',this.jsondata3);
        //  console.log("pushed elem",this.jsondata.push('lakshmi'));
        //  console.log('after PUSH',this.jsondata1);
         //  this.forin()


      },
      
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
}