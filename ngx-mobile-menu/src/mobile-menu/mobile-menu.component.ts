import { Component, HostBinding, Inject, OnDestroy, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { MobileMenuRef } from './mobile-menu.ref';
import { MOBILE_MENU_DATA } from './mobile-menu.tokens';

@Component({
  selector: 'ngx-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss'],
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('800ms cubic-bezier(0.35, 0, 0.25, 1)', style({
          transform: 'translateX(0)'
        })),
      ]),
      transition('* => leave', [
        style({transform: 'translateX(0)'}),
        animate('800ms cubic-bezier(0.35, 0, 0.25, 1)', style({
          transform: 'translateX(-100%)'
        }))
      ])
    ])
  ]
})
export class MobileMenuComponent implements OnInit, OnDestroy {
  @HostBinding('@slideIn') animation = 'enter';
  sub;

  constructor(private mobileMenuRef: MobileMenuRef,
              @Inject(MOBILE_MENU_DATA) public data: any) { }

  ngOnInit() {
    this.sub = this.mobileMenuRef.isClosing.subscribe((isClosing) => {
      if (isClosing) {
        this.animation = 'leave';
      }
    });
  }

  ngOnDestroy() {

  }

}
