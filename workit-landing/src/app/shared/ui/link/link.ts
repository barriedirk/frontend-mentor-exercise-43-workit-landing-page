import { Component, computed, input } from '@angular/core';
import { twMerge } from 'tailwind-merge';

import {
  ButtonLinkVariantProps,
  buttonLinkVariants,
} from '../cva/variantButtonLink';

@Component({
  selector: 'a[app-link]',
  imports: [],
  template: ` <ng-content></ng-content> `,
  host: {
    '[class]': 'classes()',
  },
})
export class Link {
  variant = input<ButtonLinkVariantProps['variant']>('transparent');
  size = input<ButtonLinkVariantProps['size']>('md');
  customClass = input<string>('', { alias: 'class' });

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
