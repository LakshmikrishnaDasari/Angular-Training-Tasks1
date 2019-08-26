import { Component, OnInit } from '@angular/core';
import { Sri } from './mod';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})

export class TypeComponent implements OnInit {

  x = 10;
  y = 20;
  nest: any;
  num = [7, 8, 9];
  name1 = 'krishna sri';
  name2 = 'Lakshmi';
  c = true;
  array: number[] = [10, 20, 30];
  obj: object = { x: 10, y: 20 };
  any: any = 100;

  id = 4429;
  name = 'Lakshmi Krishna Sri';


// -----------------concat
  str1: any = new String('Angular');
  str2: any = new String("training");
  str4 = this.str1.concat(this.str2);

  // -----------------multiline
  myString = `Miracle
  Software
  solutions`;
  // -----------------String interpolation
  name3: string = `lakshmi is Working in ${this.myString}`

  //__________Arrays___________//

  mark1 = [1, 2, 3];

  marki = this.mark1.indexOf(2);


  //+==========================filter
  data = [
    { taskname: 'chennai', id: 'maa', status: 'Submitted' },
    { taskname: 'mumbai', id: 'bom', status: 'Resolved' },
    { taskname: 'delhi', id: 'del', status: 'Submitted' },
    { taskname: 'salem', id: 'che', status: 'In Progress' },
    { taskname: 'bengaluru', id: 'blr', status: 'Resolved' },
    { taskname: 'chavvapet', id: 'chv', status: 'Submitted' }
  ];

  root: any[];
  // nest: Sri.Krishna;

  constructor() { }

  ngOnInit() {
    console.log('number datatype :', this.id);
    console.log('String datatype :', this.name);
    console.log('Boolean datatype :', this.c);
    console.log('Array datatype :', this.array);
    console.log('Any datatype :', this.any);
    console.log('Object datatype :', this.obj);
    console.log(this.name1);
    console.log("length is :" + this.name1.length);
    console.log("str.charAt(0) is:" + this.name1.charAt(0));
    console.log("str.charCodeAt(1) is:" + this.name1.charCodeAt(-1));
    console.log('-----------', this.str4);
    console.log(this.add(11, 20, 2));
    console.log(this.filterByString(this.data, "ch"));

    console.log("DefaultArguments:" + this.areaofEllipse(2));
    console.log("MultilineString:" + this.myString);
    console.log("String interpolation:" + this.name3);
    console.log("Value of index:" + this.mark1[0]);
    console.log("Array:" + this.mark1);
    console.log(this.filter2());
    console.log("total is : " + this.total);
    console.log('--------------', Sri.skills);
    console.log('--------', new Sri.Krishna(4429, 'sri'));




    this.for1();
    this.foreach();
    this.forin();
    this.arrmap();
    this.filter1();
    this.filter2();
    this.filter4();
    this.for();
    this.if1();
    this.switch();
  }
  add(a, b, c = 1): number {
    return a + b + c;
  }
  

  //==========================Default Arguments==================================//
  areaofEllipse(r1: number, r2: number = r1) {
    return Math.PI * r1 * r2;
  }


  //filter
  filterByString(data, s) {
    return data.filter(e => e.taskname.includes(s) || e.id.includes(s));
  }


  // data = [
  //   { taskname: 'chennai', id: 'maa', status: 'Submitted' },
  //   { taskname: 'mumbai', id: 'bom', status: 'Resolved' },
  //   { taskname: 'delhi', id: 'del', status: 'Submitted' },
  //   { taskname: 'salem', id: 'che', status: 'In Progress' },
  //   { taskname: 'bengaluru', id: 'blr', status: 'Resolved' },
  //   { taskname: 'chavvapet', id: 'chv', status: 'Submitted' }
  // ];

  filter1() {

    var filtered = this.mark1.filter(function (value) {
      return value > 1;

    });
    console.log('filter: ' + filtered)
  }
  filter2() {
    let route = this.mark1.filter(filter3);
    function filter3(element, index, arary) {
      return element > 1;
    }
    console.log('filter1', route);
  }

  filter4() {
    var route1 = this.mark1.filter(n => n > 1);
    console.log('filterinline', route1)
  }


  //==========================forof==================================//
  for1() {
    for (var index of this.mark1)
      console.log('-forof--------', index);

  }

  //==========================forin==================================//
  forin() {

    for (var index in this.mark1)
      console.log('----forin-----', this.mark1[index]);

  }
  //==========================foreach==================================//
  foreach() {
    this.mark1.forEach(arrayfun);
    function arrayfun(element, index, array) {
      console.log("forach-arr[" + index + "]=" + element);
    }


  }
  //==========================for loop==================================//
  cities: string[] = ["New Jersy", "New Delhi", "New Mumbai", "New York"];
  for() {
    for (let i = 0; i < this.cities.length; i++) {
      console.log(this.cities[i]);
    }
  }

  //==========================map==================================//
  arrmap() {
    this.root = this.mark1.map(Math.sqrt)
    {
      console.log('map', this.root)
    }

  }
  //---------------reduce

  total = [1, 2, 3].reduce(function (a, b) { return a * b; });

  if1() {

    if (this.x >this.y) 
    {
        console.log('x is greater than y.');
    } 
    else if (this.x < this.y)
    {
        console.log('x is less than y.'); //This will be executed
    }
    else  
    {
        console.log('x is equal to y');
    }
  

  }


   switch(){

  day  = 4;
switch (day) {
    case 0:
        console.log("It is a Sunday.");
        break;
    case 1:
        console.log("It is a Monday.");
        break;
    case 2:
        console.log("It is a Tuesday.");
        break;
    case 3:
        console.log("It is a Wednesday.");
        break;
    case 4:
        console.log("It is a Thursday.");
        break;
    case 5:
        console.log("It is a Friday.");
        break;
    case 6:
        console.log("It is a Saturday.");
        break;
    default:
        console.log("No such day exists!");
        break;
}
   }

}

 //===================enums==============//

enum DaysOfTheWeek {
  Sun = 150, mon, tue, wed, thu, fri, sat

}
let day: DaysOfTheWeek;
day = DaysOfTheWeek.mon;
if (day === DaysOfTheWeek.mon) {
  console.log("Week Days Started");
}

//===================namespace==============//

namespace College {
  export class Student {

    studentid: number;
    studentname: string;

    constructor(a: number, b: string) { this.studentid = a; this.studentname = b; }
  }

  export var courseslist:
    string[] = [".NET", "Java", "Blockchain", "Angular", "AWS"];
}

console.log(College.courseslist);
console.log(new College.Student(101, "Scott")); 





//+++++++++++++++++++++class++++++++++++//
class My{
   firstname:string;
   lastname:string;
   myName(){
     console.log("My Fav is Sandwich");
   }
}
var obj =new My();
obj.firstname="Lea"
obj.lastname="enamareddy";
console.log("firstname is:",obj.firstname);
console.log("lasttname is:",obj.lastname);

var n : number = 10; 
n = 20; //error document.write("<br>n is: " + n);  
 document.write("n is: " + n); 

const m  = 10; 
//  m = 40; //error document.write("<br>n is: " + n); 
console.log("myhjukl; is: " + m); 

function jyo(){
  var j=10;
console.log(j)
}
console.log(jyo());

class You extends My{
 
  // myName(){
    
  //   console.log("grilled")
  // }

  myname1(){
    super.myName();
  }
}
var amy=new You();
amy.myName();


interface IStudent {
       firstName: string;
       lastName: string;     
       getFullName(): string;
       } 
 
class Student implements IStudent {
       firstName: string;
       lastName: string; 
 
    getFullName() : string     { 
              
      return this.firstName + " " + this.lastName;    
     } 
    } var s = new Student(); s.firstName = "Adam"; s.lastName = "Smith"; console.log(s.getFullName()); 

    var strsplit = "apples are round, and apples are juicy.";
    var splitted=strsplit.split(" " ,4);
    console.log(splitted)