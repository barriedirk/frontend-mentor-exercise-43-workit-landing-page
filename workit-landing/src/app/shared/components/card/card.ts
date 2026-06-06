import { Component, computed, input, signal } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
  host: {
    class: 'block flex-1',
  },
  standalone: true,
})
export class Card {
  classNames = input<string>('');

  private readonly uid = Math.random().toString(36).substring(2, 9);

  readonly titleId = signal(`workit-card-title-${this.uid}`);
  readonly descriptionId = signal(`workit-card-desc-${this.uid}`);

  readonly mergedClasses = computed(() => {
    const base = 'w-full flex flex-col justify-center items-center';

    return [base, this.classNames()].filter(Boolean).join(' ');
  });
}
