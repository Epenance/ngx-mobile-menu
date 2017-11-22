import { ComponentRef, Injectable, Injector } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { MobileMenuComponent } from './mobile-menu.component';
import { MobileMenuRef } from './mobile-menu.ref';
import { MOBILE_MENU_DATA } from './mobile-menu.tokens';

@Injectable()
export class MobileMenuService {
  constructor(private overlay: Overlay, private injector: Injector) {}

  open(config: MobileMenuOverlayConfig = {}) {
    const overlayConfig = {...DEFAULT_CONFIG, ...config};

    const overlayRef = this.createOverlay(overlayConfig);

    const mobileMenuRef = new MobileMenuRef(overlayRef);

    const overlayComponent = this.attachMobileMenuOverlay(overlayRef, overlayConfig, mobileMenuRef);

    overlayRef.backdropClick().subscribe(e => mobileMenuRef.close());
    return mobileMenuRef;
  }

  private getOverlayConfig(config: MobileMenuOverlayConfig): OverlayConfig {
    const positionStrategy = this.overlay.position()
      .global()
      .left()
      .height('100%');

    return new OverlayConfig({
      hasBackdrop: config.hasBackdrop,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy
    });
  }

  private createOverlay(config: MobileMenuOverlayConfig) {
    const overlayConfig = this.getOverlayConfig(config);

    return this.overlay.create(overlayConfig);
  }

  private attachMobileMenuOverlay(overlayRef: OverlayRef, config: MobileMenuOverlayConfig, mobileMenuRef: MobileMenuRef) {
    const injector = this.createInjector(config, mobileMenuRef);

    const containerPortal = new ComponentPortal(MobileMenuComponent, null, injector);
    const containerRef: ComponentRef<MobileMenuComponent> = overlayRef.attach(containerPortal);

    return containerRef.instance;
  }

  private createInjector(config: MobileMenuOverlayConfig, mobileMenuRef: MobileMenuRef) {
    const injectionTokens = new WeakMap();

    injectionTokens.set(mobileMenuRef, mobileMenuRef);
    injectionTokens.set(MOBILE_MENU_DATA, config.data);

    return new PortalInjector(this.injector, injectionTokens);
  }
}

export interface MobileMenuOverlayConfig {
  hasBackdrop?: boolean;
  data?: any;
}

const DEFAULT_CONFIG: MobileMenuOverlayConfig = {
  hasBackdrop: true,
  data: null
};
