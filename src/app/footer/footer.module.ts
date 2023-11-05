import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { LogoComponent } from './logo/logo.component';
import { AddressComponent } from './address/address.component';

@NgModule({
  declarations: [FooterComponent, LogoComponent, AddressComponent],
  imports: [CommonModule],
  exports: [FooterComponent, LogoComponent, AddressComponent],
})
export class FooterModule {}
