import { Component, ElementRef } from '@angular/core';
import { highLight } from 'src/highLight';

@Component({
  selector: 'app-profile',
  template: `
    {{ highLight() }}
    <span>Profile Component</span>
  `
})
export class ProfileComponent {
  constructor(private el: ElementRef) {}
  highLight() {
    highLight(this.el)
  }

}
