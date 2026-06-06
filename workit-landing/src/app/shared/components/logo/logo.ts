import { Component, computed, input } from '@angular/core';

export type LogoVariant = 'light' | 'dark';

@Component({
  selector: 'app-logo',
  imports: [],
  templateUrl: './logo.html',
  host: {
    class: 'inline-block h-8',
  },
})
export class Logo {
  variant = input<LogoVariant>('dark');
  alt = input<string>('');

  protected readonly logoSrc = computed(() => {
    return `/images/logo-${this.variant()}.svg`;
  });

  protected readonly altText = computed(() => {
    if (this.alt()) return this.alt();
    return `Workit Company Logo - ${this.variant()} version`;
  });
}
