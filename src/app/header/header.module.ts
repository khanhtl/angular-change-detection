import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { QuickSearchComponent } from './quick-search/quick-search.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    HeaderComponent,
    QuickSearchComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeaderModule { }
