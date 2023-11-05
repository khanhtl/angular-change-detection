import { Component, ElementRef } from '@angular/core';
import { highLight } from 'src/highLight';

@Component({
  selector: 'app-quick-search',
  template: `
    {{ highLight() }}
    <span>Quick Search Component</span>
  `
})
export class QuickSearchComponent {
  constructor(private el: ElementRef) {}
  highLight() {
    highLight(this.el)
  }

}
