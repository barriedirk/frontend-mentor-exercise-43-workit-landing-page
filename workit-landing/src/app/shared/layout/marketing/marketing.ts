import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './footer';
import { Header } from './header';

@Component({
  selector: 'app-marketing',
  imports: [RouterOutlet, Header, Footer],
  template: `
    <div class="flex flex-col min-h-screen text-white antialiased">
      <app-header />
      <main class="flex-grow">
        <router-outlet />
      </main>
      <app-footer />
    </div>
  `,
})
export class Marketing {}
