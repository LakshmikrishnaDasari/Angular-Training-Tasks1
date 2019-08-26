import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import * as Rx from 'rxjs/Rx';

import { observeOn } from 'rxjs/operators';

@Component({
  selector: 'app-subscroption',
  templateUrl: './subscroption.component.html',
  styleUrls: ['./subscroption.component.scss']
})
export class SubscroptionComponent implements OnInit {
  subscription: Subscription;
  constructor() { }



  ngOnInit() {



    console.log('---------disposing observable for unsubscribe example');
    const dis = interval(1000);
    const subsc = dis.subscribe(val => console.log("value", val));
    subsc.unsubscribe();

    console.log('---------disposing observable for subscribe example');

    const numbers = interval(1000);

    const takeTenNumbers = numbers.pipe(take(3));

    const tt = takeTenNumbers.subscribe(x => console.log('Next: ', x));

    //  tt.unsubscribe();


    //schedulers

    console.log('-----------------script start');

    setTimeout(function () {
      console.log('setTimeout');
    }, 0);

    Promise.resolve().then(function () {
      console.log('-----------promise1');
    }).then(function () {
      console.log('---------promise2');
    });

    console.log('================script end');

    //scheduler
    const asyncScheduler = Rx.Observable.of('')
      .startWith('async', Rx.Scheduler.async);

    const asapScheduler = Rx.Observable.of('')
      .startWith('asap', Rx.Scheduler.asap);

    const queueScheduler = Rx.Observable.of('')
      .startWith('queue', Rx.Scheduler.queue);
      
    Rx.Observable.merge(
      asyncScheduler,
      asapScheduler,
      queueScheduler
    )
      .filter(x => !!x)
      .subscribe(console.log);

    console.log('after subscription')
    //====

    function random() {
      return Math.floor(Math.random() * 100);
    }

    const source = Observable.concat(
      Observable.defer(() => Observable.of(random())),
      Observable.defer(() => Observable.of(random())).delay(1)
    );

    function observer(name: string) {
      return {
        next: (value: number) => console.log(`observer ${name}: ${value}`),
        complete: () => console.log(`observer ${name}: complete`)
      };
    }

    const p = source.publishReplay(1);
    p.subscribe(observer("a"));
    p.connect();
    p.subscribe(observer("b"));
    setTimeout(() => p.subscribe(observer("c")), 10);

  }
}








