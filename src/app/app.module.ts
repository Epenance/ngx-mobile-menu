import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MobileMenuModule } from '../../ngx-mobile-menu/src/mobile-menu.module';
import { OverlayModule } from '@angular/cdk/overlay';
import { MobileMenuService } from '../../ngx-mobile-menu/src/mobile-menu/mobile-menu.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    OverlayModule,
    MobileMenuModule
  ],
  providers: [
    MobileMenuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
