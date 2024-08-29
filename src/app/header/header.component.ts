import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  NgZone,
  OnInit,
} from '@angular/core';
import { highLight } from 'src/highLight';

@Component({
  selector: 'app-header',
  template: `
    <span>
      Header Component(OnPush)<br />
      <button (click)="cdr.detectChanges()">Call detect change</button> <br>
      <button (click)="markForCheck()">Call mark for check</button> <br>
    </span>
    <ul>
      <li><app-quick-search></app-quick-search></li>
      <li><app-profile ></app-profile></li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  constructor(private el: ElementRef, public cdr: ChangeDetectorRef, private ngZone: NgZone) { }
  ngDoCheck(): void {
    this.ngZone.runOutsideAngular(() => {
      highLight(this.el)
    });
  }
  markForCheck() {
    // this.ngZone.runOutsideAngular(() => {
    //   highLight(this.el, 'dirty', false);
    // });
    this.cdr.markForCheck()
  }
}
