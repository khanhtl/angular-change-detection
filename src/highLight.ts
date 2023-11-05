import { ElementRef } from '@angular/core';
export function highLight(el: ElementRef, className = 'checked', remove = true) {
    const a=el.nativeElement.querySelector('span');
    a.classList.remove('dirty');
    a.classList.add(className);
    if (remove) {
        setTimeout(() => {
            a.classList.remove(className);
        }, 500);
    }
}