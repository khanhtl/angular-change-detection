import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
} from '@angular/core';
import { highLight } from 'src/highLight';

@Component({
  selector: 'app-header',
  template: `
    {{ highLight() }}
    <span>
      Header Component<br />
      <button (click)="cdr.detectChanges()">Call detect change</button> <br>
      <button (click)="cdr.markForCheck()">Call mark for check</button>
    </span>
    <ul>
      <li><app-quick-search></app-quick-search></li>
      <li><app-profile></app-profile></li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  constructor(private el: ElementRef, public cdr: ChangeDetectorRef) { }
  highLight() {
    highLight(this.el);
  }
}
