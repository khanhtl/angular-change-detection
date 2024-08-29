import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, NgZone, Output } from '@angular/core';
import { highLight } from 'src/highLight';

@Component({
  selector: 'app-profile',
  template: `
    <span>Profile Component(OnPush)<br />
    <button (click)="changeObjectNoChangeReference()">Change input no change reference(random)</button> <br />
    <button (click)="changeObjectWithChangeReference()">Change input change reference</button> <br />
    </span>
    <ul>
      <li><app-avatar [data]="data" (onClick)="handleClick()"></app-avatar></li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent {
  constructor(private el: ElementRef, private ngZone: NgZone) {}
  ngDoCheck(): void {
    this.ngZone.runOutsideAngular(() => {
      highLight(this.el)
    });
  }
  data:any = {};

  handleClick() {
    console.log('clicked');
  }

  changeObjectNoChangeReference() {
    this.data.random = Math.random()
  }

  changeObjectWithChangeReference() {
    this.data = {random: Math.random()}
  }
}
