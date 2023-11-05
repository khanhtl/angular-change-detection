import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { QuickSearchComponent } from './quick-search/quick-search.component';
import { ProfileComponent } from './profile/profile.component';
import { AvatarComponent } from './profile/avatar/avatar.component';



@NgModule({
  declarations: [
    HeaderComponent,
    QuickSearchComponent,
    ProfileComponent,
    AvatarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    QuickSearchComponent,
    ProfileComponent,
    AvatarComponent
  ]
})
export class HeaderModule { }
