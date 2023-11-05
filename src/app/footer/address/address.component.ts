import { Component, ElementRef } from '@angular/core';
import { highLight } from 'src/highLight';

@Component({
  selector: 'app-address',
  template: `
    {{ highLight() }}
    <span>Address Component</span>
  `
})
export class AddressComponent {
  constructor(private el: ElementRef) {}
  highLight() {
    highLight(this.el)
  }

}
