import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CompileTemplateMetadata } from '@angular/compiler';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const sub = new Subject();
    sub.subscribe(console.log);
    sub.next('lakshmi');
    sub.subscribe(console.log);
    sub.next('krishna');
    sub.complete();
    sub.subscribe(console.log);
    sub.next('sri');  
    sub.next(123);
    sub.subscribe({
    complete() {
      console.log('done');
    }
  });
  sub.error('add1');
  
  }

}
