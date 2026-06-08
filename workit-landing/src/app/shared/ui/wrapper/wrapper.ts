import { Component, input, computed } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  standalone: true,
  imports: [],
  template: `<div [class]="mergedClasses()">
    <ng-content></ng-content>
  </div>`,
})
export class Wrapper {
  classNames = input<string>('');

  readonly mergedClasses = computed<string>(() => {
    const bases = 'max-w-6xl mx-auto p-6';

    return [bases, this.classNames()].filter(Boolean).join(' ');
  });
}
