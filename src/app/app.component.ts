import { ApplicationRef, Component, ElementRef } from '@angular/core';
import { highLight } from 'src/highLight';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="app.tick()">Trigger change detection</button>
    <ul class="tree">
      <li>
        {{ highLight() }}
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
  constructor(public app: ApplicationRef, private el: ElementRef) { }
  highLight() {
    highLight(this.el);
  }
}
