import { Component } from '@angular/core';

@Component({
  selector: 'app-card-number',
  imports: [],
  standalone: true,
  template: `<span class="text-slate-500 font-serif font-semibold text-preset-3"
    ><ng-content></ng-content
  ></span>`,
})
export class CardNumber {}
