import { Component } from '@angular/core';
import { Logo } from '@shared/components/logo/logo';

@Component({
  selector: 'app-footer',
  imports: [Logo],
  template: `
    <footer>
      <app-logo variante="dark" />
    </footer>
  `,
})
export class Footer {}
