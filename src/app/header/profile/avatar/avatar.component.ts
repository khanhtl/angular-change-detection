import { Component, ElementRef, Output, EventEmitter, Input, NgZone, ChangeDetectionStrategy } from '@angular/core';
import { highLight } from 'src/highLight';

@Component({
  selector: 'app-avatar',
  template: `
     <span>
      Avatar Component(OnPush)<br />
      Random value: {{ data?.random || 0 }}<br />
      <button (click)="emitEvent()">Emit event</button>
    </span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarComponent {
  @Output() onClick = new EventEmitter<unknown>();
  clicked: boolean = false;
  constructor(private el: ElementRef, private ngZone: NgZone) {}
  ngDoCheck(): void {
    this.ngZone.runOutsideAngular(() => {
      if(this.prevData !== this.data) {
        this.prevData = this.data;
        highLight(this.el);
      }
    });
  }
  @Input() data:any;
  prevData: any;
  emitEvent() {
    this.onClick.emit();
    this.ngZone.runOutsideAngular(() => {
      highLight(this.el);
    });
  }
}
