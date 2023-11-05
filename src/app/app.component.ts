import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ul class="tree">
      <li>
        <span>App Component</span>
        <ul>
          <li><app-footer></app-footer></li>
          <li>
            <span>HeaderComponent</span>
            <ul>
              <li><span>QuickSearchComponent</span></li>
              <li><span>ProfileComponent</span></li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  `,
})
export class AppComponent {}
