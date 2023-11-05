import { ElementRef } from '@angular/core';
export function highLight(el: ElementRef, className = 'checked') {
    const a = el.nativeElement.querySelector('span');
    a.classList.add(className);
    setTimeout(() => {
        a.classList.remove(className);
    }, 500);
}