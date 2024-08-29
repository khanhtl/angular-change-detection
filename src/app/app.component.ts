import { ApplicationRef, Component, ElementRef, NgZone } from '@angular/core';
import { highLight } from 'src/highLight';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="app.tick()">Trigger change detection</button>
    <ul class="tree">
      <li>
        <span>App Component</span>
        <ul>
          <li><app-header></app-header></li>
          <li><app-footer></app-footer></li>
        </ul>
      </li>
    </ul>
  `,
})
export class AppComponent {
  constructor(public app: ApplicationRef, private el: ElementRef, private ngZone: NgZone) { }
  ngDoCheck() {
    this.ngZone.runOutsideAngular(() => {
      highLight(this.el)
    });
  }
}
