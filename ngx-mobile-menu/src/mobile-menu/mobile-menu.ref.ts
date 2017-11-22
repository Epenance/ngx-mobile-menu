import { OverlayRef } from '@angular/cdk/overlay';
import { Subject } from 'rxjs/Subject';

export class MobileMenuRef {
  constructor(private overlayRef: OverlayRef) {}
  isClosing = new Subject();

  close(): void {
    this.isClosing.next(true);

    setTimeout(() => {
      this.overlayRef.dispose();
    }, 800);
  }
}
