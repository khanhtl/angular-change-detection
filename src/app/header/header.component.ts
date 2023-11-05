import { ChangeDetectionStrategy, Component, ElementRef, OnInit } from '@angular/core';
import { highLight } from 'src/highLight';

@Component({
  selector: 'app-header',
  template: `
    {{ highLight() }}
    <span> Header Component </span>
    <ul>
      <li><app-quick-search></app-quick-search></li>
      <li><app-profile></app-profile></li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  constructor(private el: ElementRef) {}
  highLight() {
    highLight(this.el);
  }
}
