import { Component } from '@angular/core';

@Component({
  selector: 'app-card-description',
  imports: [],
  standalone: true,
  template: `<p class="text-preset-4 text-slate-900">
    <ng-content></ng-content>
  </p>`,
})
export class CardDescription {}
