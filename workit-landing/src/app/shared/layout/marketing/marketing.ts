import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-marketing',
  imports: [RouterOutlet],
  template: `
    <div class="flex flex-col min-h-screen text-white antialiased">
      <main class="flex-grow">
        <router-outlet />
      </main>
    </div>
  `,
})
export class Marketing {}
