import { Component, ElementRef, NgZone } from '@angular/core';
import { highLight } from 'src/highLight';

@Component({
  selector: 'app-footer',
  template: `
    <span> Footer Component </span>

    <ul>
      <li><app-logo></app-logo></li>
      <li><app-address></app-address></li>
    </ul>
  `,
})
export class FooterComponent {
  constructor(private el: ElementRef, private ngZone: NgZone) {}
  ngDoCheck(): void {
    this.ngZone.runOutsideAngular(() => {
      highLight(this.el)
    });
  }
}
