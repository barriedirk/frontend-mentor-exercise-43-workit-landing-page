import { Component, computed, input, signal } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  standalone: true,
})
export class Card {
  classNames = input<string>('');

  private readonly uid = Math.random().toString(36).substring(2, 9);

  readonly titleId = signal(`workit-card-title-${this.uid}`);
  readonly descriptionId = signal(`workit-card-desc-${this.uid}`);

  readonly mergedClasses = computed(() => {
    const base =
      'w-full flex flex-col gap-8 justify-center items-center text-center';

    return [base, this.classNames()].filter(Boolean).join(' ');
  });
}
