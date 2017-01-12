import {Component} from '@angular/core'
import {Observable} from 'rxjs/Rx';
import * as jquery from 'jquery';
import 'rxjs';

@Component({
  selector: 'my-user',
  templateUrl: './user.component.html'
})

export class UserComponent {
  responses;
  groupAs;
  groupBs;

  createGroupA(responseStream) {
    return responseStream
      .map(response => {
        return response
          .filter(x => x > 2)
      })
  };

  createGroupB(responseStream) {
    return responseStream
      .map(response => {
        return response
          .filter(x => x > 4)
      })
  }

  /**
   * click and get user
   */

  getUsers() {
    let requestStream = Observable.of('http://localhost:3000/api/v1/heroes');
    let responseStream = requestStream
      .startWith(null)
      .flatMap(requestUrl => {
        return Observable.fromPromise(Promise.resolve(jquery.getJSON(requestUrl)));
      });

    this.createGroupA(responseStream)
      .subscribe(groupas => {
        this.groupAs = groupas;
      });

    this.createGroupB(responseStream)
      .subscribe(groupbs => {
        this.groupBs = groupbs;
      });

    responseStream
      .subscribe(response => {
        this.responses = response;
      })
  }
}
