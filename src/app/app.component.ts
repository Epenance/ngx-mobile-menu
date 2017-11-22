import { Component, OnInit } from '@angular/core';
import { MobileMenuService } from '../../ngx-mobile-menu/src/mobile-menu/mobile-menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor(private mobileMenu: MobileMenuService) {}

  ngOnInit() {

  }

  openMenu() {
    this.mobileMenu.open();
  }
}
