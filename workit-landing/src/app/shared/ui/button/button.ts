import { Component, computed, input } from '@angular/core';
import { twMerge } from 'tailwind-merge';

import {
  buttonLinkVariants,
  type ButtonLinkVariantProps,
} from '@shared/ui/cva/variantButtonLink';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.html',
})
export class Button {
  variant = input<ButtonLinkVariantProps['variant']>('primary');
  size = input<ButtonLinkVariantProps['size']>('md');
  customClass = input<string>('', { alias: 'class' });

  type = input<'button' | 'submit' | 'reset'>('button');
  disabled = input<boolean>(false);
  ariaLabel = input<string | null>(null, { alias: 'aria-label' });

  derivedSize = computed(() =>
    this.variant() === 'link' ? 'link' : this.size(),
  );

  classes = computed(() =>
    twMerge(
      buttonLinkVariants({
        variant: this.variant(),
        size: this.derivedSize(),
        class: this.customClass(),
      }),
    ),
  );
}
