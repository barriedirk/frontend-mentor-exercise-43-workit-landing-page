import { Component } from '@angular/core';
import { Logo } from '@shared/components/logo/logo';

@Component({
  selector: 'app-header',
  imports: [Logo],
  template: `
    <header class="bg-black w-full p-10">
      <app-logo variant="light" />
    </header>
  `,
})
export class Header {}
