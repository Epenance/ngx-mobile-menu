import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { MobileMenuService } from './mobile-menu/mobile-menu.service';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MobileMenuComponent
  ],
  providers: [
    MobileMenuService,
    OverlayModule,
    PortalModule
  ],
  exports: [
    MobileMenuComponent,
    OverlayModule,
    PortalModule
  ],
  entryComponents: [
    MobileMenuComponent
  ]
})
export class MobileMenuModule {

}
