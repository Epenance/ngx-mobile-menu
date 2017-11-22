import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MobileMenuModule } from '../../ngx-mobile-menu/src/mobile-menu.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MobileMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
