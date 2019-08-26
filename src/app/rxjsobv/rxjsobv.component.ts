import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable, Subscriber, of, interval, fromEventPattern, range, concat, throwError, timer, iif, combineLatest, merge, race, zip, from, Subscription } from 'rxjs';
import { scan, throttleTime, map, first, take,  share, publish, delay, mapTo, buffer, bufferCount, bufferTime, concatMap, expand, mergeScan, pluck, switchMap, windowCount, skip, mergeAll, windowTime, filter, debounce, tap } from 'rxjs/operators';

import { mergeMap, groupBy, reduce } from 'rxjs/operators';
@Component({
  selector: 'app-rxjsobv',
  templateUrl: './rxjsobv.component.html',
  styleUrls: ['./rxjsobv.component.scss']
})
export class RxjsobvComponent implements OnInit{
  

  constructor() { }
  clientX;
  ngOnInit() {
    // document.addEventListener('click', () => console.log('Clicked!'));
    // let count = 0;
    // document.addEventListener('click', () => console.log(`Clicked ${++count} times`));

    // fromEvent(document, 'click').subscribe(() =>console.log('Clicked!'));
    // fromEvent(document, 'click')
    // .pipe(scan(count => count + 1, 0))
    // .subscribe(count => console.log(`Clicked ${count} times`));


    fromEvent(document, 'click')
      .pipe(
        throttleTime(1000),
        scan((count: any, x) => count + 1, 0)
      )
      .subscribe(count => console.log(`Clicked ${count} times`));

    //xaxis

    // fromEvent(document, 'click')
    //   .pipe(
    //     throttleTime(1000),
    //     map(event => event.clientX),
    //     scan((count, clientX) => count + clientX, 0)
    // )
    // .subscribe(count => console.log(count));
    /////

    const observable = new Observable(observer => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      setTimeout(() => {
        observer.next(4);
        observer.complete();
      }, 1000);
    });

    console.log('just before subscribe');
    observable.subscribe({
      next(x) { console.log('got value ' + x); },
      error(err) { console.error('something wrong occurred: ' + err); },
      complete() { console.log('done'); }
    });
    console.log('just after subscribe');


    const observable1 = new Observable(function subscribe(subscriber) {
      const id = setInterval(() => {
        subscriber.next('hi')
      }, 1000);

    });
    observable1.subscribe(x => console.log("observable:",x));



    ///push
    const foo = new Observable(observer => {
      console.log('Hello');
      observer.next(42);
      observer.next(12);
      setTimeout(() => {
        observer.next(300);
      }, 1000);
    })


    console.log('before');
    foo.subscribe(x => {
      console.log(x);
    });
    console.log('after');
    foo.subscribe(y => {
      console.log(y);
    });

    //map

    map((x: any) => x * x)(of(1, 2, 3)).subscribe((v) => console.log(`map value: ${v}`));

    //first

    first()(of(8, 2, 3)).subscribe((v) => console.log(`first value: ${v}`));


    //interval

    const numbers = interval(1000);

    const takeTenNumbers = numbers.pipe(take(3));

    takeTenNumbers.subscribe(x => console.log('Next: ', x));


    // of operator
    of(10, 20, 30)
      .subscribe(
        next => console.log('of operator:', next),
        // err => console.log('error:', err),
        // () => console.log('the end'),
      );
    // range operator
    const numbers1 = range(1, 10);
    numbers1.subscribe(x => console.log('range:', x));

    //throw error operator

    const result = concat(of(7), throwError(new Error('oops!')));
    result.subscribe(x => console.log(x), e => console.error(e));


    interval(1000).pipe(
      mergeMap(x => x === 3
        ? throwError('Twos are bad')
        : of('a', 'b', 'c')
      ),
    ).subscribe(x => console.log(x), e => console.error(e));

    //subscribe with an observer

    const sumObserver = {
      sum: 0,
      next(value) {
        console.log('Adding: ' + value);
        this.sum = this.sum + value;
      },
      error() {
        // We actually could just remove this method,
        // since we do not really care about errors right now.
      },
      complete() {
        console.log('Sum equals: ' + this.sum);
      }
    }; of(1, 2, 3) // Synchronously emits 1, 2, 3 and then completes.
      .subscribe(sumObserver);



    //cancel subscription

    const subscription = interval(10).subscribe(
      num => console.log('cancel:', num),
      undefined,
      () => {
        
        console.log('completed!');
      }
    );

    setTimeout(() => {
      subscription.unsubscribe();
      console.log('unsubscribed!');
    }, 250);

    //timer

    const numbers2 = timer(1000, 200);
    const numbers3 = numbers2.pipe(take(22));
    const number4 = numbers3.pipe(delay(2000));
    numbers3.subscribe(x => console.log('timer:', x));


    //delay
    const clicks1 = fromEvent(document, 'click');
    const delayed = clicks1.pipe(delay(1000));
    delayed.subscribe(x => console.log('delay time:', x));


    //iif
    let subscribeToFirst;
    const firstOrSecond = iif(
      () => subscribeToFirst,
      of('first'),
      of('second'),
    );

    subscribeToFirst = false;
    firstOrSecond.subscribe(value => console.log('iif operator', value));


    subscribeToFirst = false;
    firstOrSecond.subscribe(value => console.log('iif operator', value));




    //combine latestconst 
    const firstTimer = timer(1000, 1000); // emit 0, 1, 2... after every second, starting from now
    const number6 = firstTimer.pipe(take(10));
    const secondTimer = timer(100, 1000); // emit 0, 1, 2... after every second, starting 0,5s from now
    const number7 = secondTimer.pipe(take(15));
    const combinedTimers = combineLatest(number6, number7);
    combinedTimers.subscribe(value => console.log('combine latest:', value));


    //concat
    const timer1 = interval(1000).pipe(take(4));
    const sequence = range(11, 20);
    const result1 = concat(timer1, sequence);
    result1.subscribe(x => console.log("concat", x));


    //concat same observables
    const timer4 = interval(1000).pipe(take(10));
    const timer2 = interval(2000).pipe(take(6));
    const timer3 = interval(500).pipe(take(10));

    const result2 = concat(timer4, timer2, timer3);
    result2.subscribe(x => console.log("concat same observables", x));

    //cocat repeat observables
    const timer5 = interval(7000).pipe(take(4));
    concat(timer5, timer5).subscribe(val => console.log("concat  repeat observable", val));



    //merge
    const clicks = fromEvent(document, 'click');
    const timer8 = interval(1000);
    const ta = timer8.pipe(take(5));
    const clicksOrTimer = merge(clicks, ta);
    clicksOrTimer.subscribe(x => console.log("merge", x));




    //merge using concurrent
    const timer9 = interval(500).pipe(take(10));
    const timer10 = interval(500).pipe(take(6));
    const timer11 = interval(500).pipe(take(10));
    const concurrent = 3; // the argument
    const merged = merge(timer9, timer10, timer11, concurrent);
    merged.subscribe(x => console.log("concurrent merge:", x));


    //race

    const obs1 = interval(1000).pipe(mapTo('fast one'));
    const obs2 = interval(500).pipe(mapTo('medium one')).pipe(take(5));
    const obs3 = interval(5000).pipe(mapTo('slow one'));

    race(obs3, obs1, obs2)
      .subscribe(
        winner => console.log("race operator:", winner)
      );

    //zip & map
    let age$ = of<number>(27, 25, 29);
    let name$ = of<string>('Foo', 'Bar', 'Beer');
    let isDev$ = of<boolean>(true, true, false);

    zip(age$, name$, isDev$).pipe(
      map(([age, name, isDev]) => ({ age, name, isDev })),
    )
      .subscribe(x => console.log("zip and map", x));

    //buffer

    const clicksp = fromEvent(document, 'click');
    const intervalEvents = interval(1000);
    const buffered = intervalEvents.pipe(buffer(clicksp));
    buffered.subscribe(x => console.log("buffer", x));

    //buffer count
    const clicks3 = fromEvent(document, 'click');
    const buffered1 = clicks3.pipe(bufferCount(3));
    buffered1.subscribe(x => console.log("buffered count", x));

    //buffer time
    const clicksi = fromEvent(document, 'click');
    const buffered2 = clicks1.pipe(bufferTime(1000));
    const p = buffered2.pipe(take(5));
    p.subscribe(x => console.log("buffered time", x));

    //concatmap
    const clicksl = fromEvent(document, 'click');
    const resultl = clicksl.pipe(
      concatMap(ev => interval(1000).pipe(take(4)))
    );
    resultl.subscribe(x => console.log("concat map", x));

    //expand operator
    const clickse = fromEvent(document, 'click');
    const powersOfTwo = clickse.pipe(
      mapTo(1),
      expand(x => of(2 * x).pipe(delay(1000))),
      take(10),
    );
    powersOfTwo.subscribe(x => console.log("expand:", x));

    //mergemap
    const letters = of('a', 'b', 'c');
    const resultm = letters.pipe(
      mergeMap(x => interval(1000).pipe(map(i => x + i))), take(30),
    );
    resultm.subscribe(x => console.log("merge map", x));


    //merge scan
    const click$ = fromEvent(document, 'click');
    const one$ = click$.pipe(mapTo(1));
    const seed = 10;
    const count$ = one$.pipe(
      mergeScan((acc, one) => of(acc + one), seed),
    );
    count$.subscribe(x => console.log("merge scan", x));

    //groupby

    of(
      { id: 1, name: 'JavaScript' },
      { id: 2, name: 'Parcel' },
      { id: 2, name: 'webpack' },
      { id: 1, name: 'TypeScript' },
      { id: 3, name: 'TSLint' }
    ).pipe(
      groupBy(p => p.id),
      mergeMap((group$) => group$.pipe(reduce((acc: number, cur: any) => [acc, cur], []))),
    ).subscribe(p => console.log("groupby:", JSON.stringify(p)));


    //pluck for fromevent

    const clickspl = fromEvent(document, 'click');
    const tagNames = clickspl.pipe(pluck('target', 'tagName'));
    tagNames.subscribe(x => console.log("-----------------------pluck:", x));

    //pluck for from
    const source = from([
      { name: 'Joe', age: 30, job: { title: 'Developer', language: 'JavaScript' } },
   
      { name: 'Sarah', age: 35, job: { title: 'Developer', language: 'JavaScript' } }
    ]);
   
    const example = source.pipe(pluck('job', 'title'));
  
    const subscribe = example.subscribe(val => console.log("pluck for from-----:", val));

    //switchmap
    const switched = of(1, 2, 3).pipe(switchMap((x: number) => of(x, x ** 2, x ** 3)));
    switched.subscribe(x => console.log("switch map:", x));

    //window count
    const clicksw = fromEvent(document, 'click');
    const resultw = clicksw.pipe(
      windowCount(4),
      map(win => win.pipe(skip(2))), // skip first of every 3 clicks
      mergeAll()                     // flatten the Observable-of-Observables
    );
    resultw.subscribe(x => console.log("**********************Window count:", x));

    // window time
    const clickswt = fromEvent(document, 'click');
    const resultwt = clickswt.pipe(
      windowTime(100),
      map(win => win.pipe(take(2))), // each window has at most 2 emissions
      mergeAll(),                    // flatten the Observable-of-Observables
    );
    resultwt.subscribe(x => console.log("Window time", x));


    //reduce
    const source1 = of(1, 2, 3, 4);
    const example1 = source1.pipe(reduce((acc, val) => acc + val));
    //output: Sum: 10'
    const subscribe1 = example1.subscribe(val => console.log('Sum:', val));


    //skip
    const source2 = interval(1000);
const example2 = source2.pipe(skip(5),take(2));

const subscribe2 = example2.subscribe(val => console.log("skip :",val));

//filter
const sourcef = from([1, 2, 3, 4, 5]);
const examplef = sourcef.pipe(filter(num => num % 2 === 1));
const subscribef = examplef.subscribe(val => console.log(`Odd numbers: ${val}`));

//filter
const sf=from([{name:'giridhardup', age:38 },{name:'giridharoriginal', age:24}])
const rs=sf.pipe(filter(age1=>age1.age>30));
const sff=rs.subscribe(val => console.log(`name :${val.name}`));


//debounce
const dbdata=of('lea','mishika', 'lekhana');
const debounced=dbdata.pipe(debounce(()=>timer(1000)));
const dd=debounced.subscribe(val=>console.log('debounced value is',val));


//share
const src= timer(500);
const ex=src.pipe(tap(()=>console.log('tap 123')),
mapTo('456')
);

const sub= ex.subscribe(val=>console.log("before share",val));

const sub1= ex.subscribe(val=>console.log("before share1",val));

const share1=ex.pipe(share());
const sub2=share1.subscribe(val=>console.log("After share", val));
const sub3=share1.subscribe(val=>console.log("After share1", val));

//publish
const src1= timer(500);
const ex1=src.pipe(tap(()=>console.log('tap 123')),
mapTo('456')
);

const subb= ex1.subscribe(val=>console.log("before publish",val));

const subb1= ex1.subscribe(val=>console.log("before publish1",val));

const sharee1=ex1.pipe(publish());
const subb2=sharee1.subscribe(val=>console.log("After publish", val));
const subb3=sharee1.subscribe(val=>console.log("After publish", val));

// setTimeout(() => {
//   sharee1.connect();
// }, 5000);
    }





  // const clicks = fromEvent(document, 'click');
  // clicks.subscribe(x => console.log('MouseClick--: ', x));



}

function addClickHandler(handler) {

  document.addEventListener('click', handler);
}

function removeClickHandler(handler) {
  document.removeEventListener('click', handler);
}

const clicks = fromEventPattern(
  addClickHandler,
  removeClickHandler
);
clicks.subscribe(x => console.log(x));

//concat



