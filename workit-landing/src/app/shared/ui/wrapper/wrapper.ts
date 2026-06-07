import { Component } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  standalone: true,
  imports: [],
  template: `<div class="max-w-6xl mx-auto p-6">
    <ng-content></ng-content>
  </div>`,
})
export class Wrapper {}
