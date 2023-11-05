import { Component, ElementRef } from '@angular/core';
import { highLight } from 'src/highLight';

@Component({
  selector: 'app-logo',
  template: `
    {{ highLight() }}
    <span>Logo Component</span>
  `
})
export class LogoComponent {
  constructor(private el: ElementRef) {}
  highLight() {
    highLight(this.el)
  }

}
