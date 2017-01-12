import {Component, HostListener} from '@angular/core';
import {Observable, Subject} from 'rxjs/Rx';
import {startWith} from 'rxjs/operator/startWith';

@Component({
  selector: 'playground',
  templateUrl: './playground.component.html'
})

export class PlaygroundComponent {
  title: 'Testing Reactive programming!'
  responseOne;
  responseTwo;
  clickObservableRes;
  obs;
  obs$;

  constructor() {
    this.obs = new Subject();
    this.obs$ = this.obs.asObservable();
  }

  onSelect() {
    const numObservable = Observable
      .interval(1000)
      .take(4);

    //higher order observables
    const stringObservable = numObservable
      .map(x => 'hello' + x)
      .startWith(null);

    const highOrderObservables = numObservable
      .map(x => Observable.of(1, 2));

    //response one
    stringObservable
      .subscribe(res => this.responseOne = res);

    //response two
    highOrderObservables
      .subscribe(res => {
        return res.subscribe(x => {
          this.responseTwo = x;
        })
      });
  };

  @HostListener('click', ['$event'])
  clickObservable(event) {
    const clockObservable = this.obs$
      .map(click => Observable
        .interval(1000)
        .take(10));

    clockObservable
      .subscribe(clock => {
        clock
          .subscribe(x => {
            return console.log(x)
          });
      });

    // flow diagram
    // -------c--------------c-----------c---------cc---
    // -------0--1--2--3--4--05--16--27--038-------
  }
}