import { ChangeDetectionStrategy, Component, ElementRef } from '@angular/core';
import { highLight } from 'src/highLight';

@Component({
  selector: 'app-profile',
  template: `
    {{ highLight() }}
    <span>Profile Component(OnPush)</span>
    <ul>
      <li><app-avatar></app-avatar></li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent {
  constructor(private el: ElementRef) {}
  highLight() {
    highLight(this.el)
  }

}
