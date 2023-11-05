import { Component, ElementRef } from '@angular/core';
import { highLight } from 'src/highLight';

@Component({
  selector: 'app-avatar',
  template: `
    {{ highLight() }}
    <span>Avatar Component</span>
  `
})
export class AvatarComponent {
  constructor(private el: ElementRef) {}
  highLight() {
    highLight(this.el)
  }

}
