import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    MobileMenuComponent
  ],
  providers: [
  ],
  exports: [
    MobileMenuComponent,
  ],
  entryComponents: [
    MobileMenuComponent
  ]
})
export class MobileMenuModule {

}
