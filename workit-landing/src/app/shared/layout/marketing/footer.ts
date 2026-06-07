import { Component } from '@angular/core';
import { Link } from '@shared/ui/link/link';
import { Logo } from '@shared/components/logo/logo';
import { SocialIcon } from '@shared/ui/social-icon/social-icon';

@Component({
  selector: 'app-footer',
  imports: [Logo, SocialIcon, Link],
  template: `
    <footer class="w-full">
      <div
        class="w-full max-w-[116px] mx-auto flex flex-col gap-6 justify-center text-center"
      >
        <app-logo variante="dark" />
        <div class="flex flex-row justify-between">
          <a app-link variant="transparent" routerLink="/features">
            <app-social-icon name="facebook" />
          </a>
          <a app-link variant="transparent" routerLink="/about"
            ><app-social-icon name="twitter" />
          </a>
          <a app-link variant="transparent" routerLink="/contact">
            <app-social-icon name="instagram" />
          </a>
        </div>
      </div>
    </footer>
  `,
})
export class Footer {}
