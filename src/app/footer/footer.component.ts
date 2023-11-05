import { Component, ElementRef } from '@angular/core';
import { highLight } from 'src/highLight';

@Component({
  selector: 'app-footer',
  template: `
    {{ highLight() }}
    <span> Footer Component </span>

    <ul>
      <li><app-logo></app-logo></li>
      <li><app-address></app-address></li>
    </ul>
  `,
})
export class FooterComponent {
  constructor(private el: ElementRef) {}
  highLight() {
    highLight(this.el);
  }
}
