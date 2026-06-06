import { Component, inject } from '@angular/core';
import { Card } from './card';

@Component({
  selector: 'app-card-title',
  imports: [],
  standalone: true,
  template: `<h3 [id]="parent.titleId()" class="text-preset-3 text-slate-900">
    <ng-content></ng-content>
  </h3>`,
})
export class CardTitle {
  protected parent = inject(Card);
}
