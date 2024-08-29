import { Component, ElementRef, ChangeDetectionStrategy, NgZone } from '@angular/core';
import { highLight } from 'src/highLight';

@Component({
  selector: 'app-quick-search',
  template: `
    <span>Quick Search Component</span>
  `
})
export class QuickSearchComponent {
  constructor(private el: ElementRef, private ngZone: NgZone) {}
  ngDoCheck() {
    this.ngZone.runOutsideAngular(() => {
      highLight(this.el)
    });
  }

}
