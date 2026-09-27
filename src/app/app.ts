import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnnouncementBar } from './layout/announcement-bar';
import { Header } from './layout/header';
import { Footer } from './layout/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AnnouncementBar, Header, Footer],
  template: `
    <a
      href="#main"
      class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-card focus:bg-paper focus:px-4 focus:py-2"
      >Skip to content</a
    >
    <app-announcement-bar />
    <app-header />
    <main id="main">
      <router-outlet />
    </main>
    <app-footer />
  `,
})
export class App {}
