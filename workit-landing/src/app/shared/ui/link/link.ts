import { Component, computed, input } from '@angular/core';

export type LinkVariant = 'primary' | 'secondary' | 'underline' | 'transparent';

@Component({
  selector: 'a[app-link]',
  imports: [],
  template: ` <ng-content></ng-content> `,
  host: {
    '[class]': 'mergedClasses()',
  },
})
export class Link {
  variant = input<LinkVariant>('primary');

  classNames = input<string>('');

  private readonly variantStyles: Record<LinkVariant, string> = {
    primary:
      'bg-green text-slate-900 hover:bg-transparent hover:text-green border border-green font-sans font-bold rounded-full transition-colors duration-300 text-center inline-block',

    secondary:
      'bg-slate-900 text-white hover:bg-green hover:text-slate-900 font-sans font-bold rounded-full transition-colors duration-300 text-center inline-block',
    underline:
      'text-green font-sans font-bold underline decoration-2 underline-offset-4 hover:text-slate-900 transition-colors duration-300',
    transparent:
      'bg-transparent text-slate-900 hover:text-green border border-transparent hover:border-green font-sans font-bold rounded-full transition-colors duration-300 text-center inline-block',
  };

  protected readonly mergedClasses = computed(() => {
    const base =
      'cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900';
    const variantClass = this.variantStyles[this.variant()];

    return [base, variantClass, this.classNames()].filter(Boolean).join(' ');
  });
}
