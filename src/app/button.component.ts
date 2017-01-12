import {Component} from '@angular/core'
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'my-button',
  templateUrl: './button.component.html'
})

export class ButtonComponent {
  value = 0;

  onSelect() {
    //dynamic behavior on declaration
    const streamA = Observable.of(3, 4, 5);
    const streamB = streamA.map(a => 10 * a);

    streamB.subscribe(b => {
      setTimeout(5000);
      this.value = b
    });
  }
}