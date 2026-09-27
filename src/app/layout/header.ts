import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs';
import { FACTORIES } from '../core/data';
import { Icon } from '../shared/icon';
import { Logo } from '../shared/logo';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, Icon, Logo],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'sticky top-0 z-40 block border-b border-mist/50 bg-paper/95 backdrop-blur',
    '(document:keydown.escape)': 'closeAll()',
  },
  template: `
    <nav class="container-page flex h-16 items-center justify-between gap-6" aria-label="Main">
      <app-logo />

      <!-- Desktop nav -->
      <ul class="hidden items-center gap-1 lg:flex">
        <li class="relative" (mouseenter)="factoriesOpen.set(true)" (mouseleave)="factoriesOpen.set(false)">
          <button
            type="button"
            class="flex items-center gap-1 rounded-card px-3 py-2 text-body-sm font-medium hover:bg-fog"
            [attr.aria-expanded]="factoriesOpen()"
            aria-controls="factories-menu"
            (click)="factoriesOpen.set(!factoriesOpen())"
          >
            Factories
            <app-icon name="chevron-down" [size]="16" class="text-steel" />
          </button>
          @if (factoriesOpen()) {
            <div id="factories-menu" class="absolute left-0 top-full pt-2">
              <div class="w-[420px] rounded-card border border-mist/60 bg-paper p-2 shadow-[0_12px_32px_rgb(0_7_16/0.08)]">
                @for (f of factories; track f.slug) {
                  <a
                    [routerLink]="['/factories', f.slug]"
                    (click)="closeAll()"
                    class="flex items-start gap-3 rounded-card p-3 hover:bg-fog"
                  >
                    <span class="mt-0.5 flex h-9 w-9 items-center justify-center rounded-card bg-fog text-ink">
                      <app-icon [name]="f.icon" [size]="18" />
                    </span>
                    <span>
                      <span class="block text-body-sm font-semibold">{{ f.name }}</span>
                      <span class="block text-caption text-pewter">{{ f.city }} · {{ f.capacity }}</span>
                    </span>
                  </a>
                }
                <a routerLink="/factories" (click)="closeAll()" class="mt-1 block rounded-card p-3 text-body-sm font-medium hover:bg-fog">
                  All factories →
                </a>
              </div>
            </div>
          }
        </li>
        @for (item of nav; track item.path) {
          <li>
            <a
              [routerLink]="item.path"
              routerLinkActive="bg-fog"
              class="block rounded-card px-3 py-2 text-body-sm font-medium hover:bg-fog"
              >{{ item.label }}</a
            >
          </li>
        }
      </ul>

      <div class="hidden items-center gap-4 lg:flex">
        <a href="tel:+966110000000" class="btn-ghost">
          <app-icon name="phone" [size]="16" class="text-ember" /> Call sales
        </a>
        <a routerLink="/contact" class="btn-primary">Request a quote</a>
      </div>

      <!-- Mobile toggle -->
      <button
        type="button"
        class="flex h-10 w-10 items-center justify-center rounded-card hover:bg-fog lg:hidden"
        [attr.aria-expanded]="mobileOpen()"
        aria-controls="mobile-menu"
        [attr.aria-label]="mobileOpen() ? 'Close menu' : 'Open menu'"
        (click)="mobileOpen.set(!mobileOpen())"
      >
        <app-icon [name]="mobileOpen() ? 'close' : 'menu'" [size]="22" />
      </button>
    </nav>

    @if (mobileOpen()) {
      <div id="mobile-menu" class="border-t border-mist/50 bg-paper lg:hidden">
        <div class="container-page flex flex-col gap-1 py-4">
          <p class="eyebrow px-3 pb-1 pt-2">Factories</p>
          @for (f of factories; track f.slug) {
            <a [routerLink]="['/factories', f.slug]" class="flex items-center gap-3 rounded-card px-3 py-2 text-body-sm font-medium hover:bg-fog">
              <app-icon [name]="f.icon" [size]="18" class="text-steel" /> {{ f.name }}
            </a>
          }
          <div class="my-2 h-px bg-mist/50"></div>
          @for (item of nav; track item.path) {
            <a [routerLink]="item.path" class="rounded-card px-3 py-2 text-body-sm font-medium hover:bg-fog">{{ item.label }}</a>
          }
          <a routerLink="/contact" class="btn-primary-lg mt-3">Request a quote</a>
        </div>
      </div>
    }
  `,
})
export class Header {
  protected readonly factories = FACTORIES;
  protected readonly nav = [
    { label: 'Products', path: '/products' },
    { label: 'About', path: '/about' },
    { label: 'News', path: '/news' },
    { label: 'Contact', path: '/contact' },
  ];
  protected readonly factoriesOpen = signal(false);
  protected readonly mobileOpen = signal(false);

  constructor() {
    inject(Router)
      .events.pipe(
        filter((e) => e instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe(() => this.closeAll());
  }

  protected closeAll(): void {
    this.factoriesOpen.set(false);
    this.mobileOpen.set(false);
  }
}
