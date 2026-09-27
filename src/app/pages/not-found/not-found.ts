import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="container-page py-24 text-center md:py-32">
      <p class="eyebrow">404</p>
      <h1 class="display-face mt-3 text-[40px] md:text-[56px]">This page isn't on the plan</h1>
      <p class="mx-auto mt-4 max-w-md text-body text-graphite">The link may be out of date. Try one of our factories or head back home.</p>
      <div class="mt-8 flex justify-center gap-4">
        <a routerLink="/" class="btn-primary-lg">Back to home</a>
        <a routerLink="/factories" class="btn-outline">Our factories</a>
      </div>
    </section>
  `,
})
export class NotFound {}
