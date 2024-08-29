import { Component, ElementRef, NgZone } from '@angular/core';
import { highLight } from 'src/highLight';

@Component({
  selector: 'app-logo',
  template: `
    <span>Logo Component</span>
  `
})
export class LogoComponent {
  constructor(private el: ElementRef, private ngZone: NgZone) {}
  ngDoCheck(): void {
    this.ngZone.runOutsideAngular(() => {
      highLight(this.el)
    });
  }

}
