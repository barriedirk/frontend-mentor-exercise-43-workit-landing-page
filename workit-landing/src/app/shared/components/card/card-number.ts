import { Component } from '@angular/core';

@Component({
  selector: 'app-card-number',
  imports: [],
  standalone: true,
  template: `<span
    class="text-slate-500 w-14 h-14 flex items-center justify-center font-serif font-semibold text-2xl border-2 border-slate-500 rounded-full"
    ><ng-content></ng-content
  ></span>`,
})
export class CardNumber {}
