import { Component, ElementRef, NgZone } from '@angular/core';
import { highLight } from 'src/highLight';

@Component({
  selector: 'app-address',
  template: `
    <span>Address Component</span>
  `
})
export class AddressComponent {
  constructor(private el: ElementRef, private ngZone: NgZone) {}
  ngDoCheck(): void {
    this.ngZone.runOutsideAngular(() => {
      highLight(this.el)
    });
  }

}
