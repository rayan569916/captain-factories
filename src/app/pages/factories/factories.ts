import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FACTORIES, HEADLINE_STATS } from '../../core/data';
import { Icon } from '../../shared/icon';
import { VisualTile } from '../../shared/visual-tile';

@Component({
  selector: 'app-factories',
  imports: [RouterLink, DecimalPipe, Icon, VisualTile],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="container-page pb-12 pt-12 md:pt-20">
      <p class="eyebrow">Our factories</p>
      <h1 class="display-face mt-3 max-w-3xl text-[40px] md:text-[56px]">Five plants across the Kingdom</h1>
      <p class="mt-6 max-w-2xl text-subheading text-graphite">
        Each factory specialises in one material family, and all of them run on a shared quality system, ERP and
        delivery schedule — so a mixed order behaves like a single one.
      </p>
      <dl class="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        @for (s of stats; track s.label) {
          <div class="rounded-card bg-fog p-5">
            <dt class="text-caption text-pewter">{{ s.label }}</dt>
            <dd class="mt-1 text-heading-sm font-semibold tabular-nums">{{ s.value }}</dd>
          </div>
        }
      </dl>
    </section>

    <section class="container-page space-y-6 pb-20">
      @for (f of factories; track f.slug; let i = $index) {
        <article class="grid gap-6 rounded-card border border-mist/60 p-4 sm:p-6 lg:grid-cols-[1fr_1.2fr] lg:gap-10">
          <div [class]="i % 2 === 1 ? 'lg:order-2' : ''">
            <app-visual-tile [icon]="f.icon" [label]="f.city" ratio="4 / 3" [iconSize]="88" />
          </div>
          <div class="flex flex-col py-2">
            <div class="flex flex-wrap gap-2">
              <span class="tag">{{ f.division }}</span>
              <span class="tag">Est. {{ f.established }}</span>
            </div>
            <h2 class="mt-4 text-heading-sm font-semibold md:text-heading">{{ f.name }}</h2>
            <p class="mt-3 text-body text-graphite">{{ f.summary }}</p>
            <dl class="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-mist/50 pt-6 sm:grid-cols-4">
              <div><dt class="text-caption text-pewter">Location</dt><dd class="mt-1 text-body-sm font-semibold">{{ f.city }}</dd></div>
              <div><dt class="text-caption text-pewter">Floor area</dt><dd class="mt-1 text-body-sm font-semibold">{{ f.area }}</dd></div>
              <div><dt class="text-caption text-pewter">Capacity</dt><dd class="mt-1 text-body-sm font-semibold">{{ f.capacity }}</dd></div>
              <div><dt class="text-caption text-pewter">Team</dt><dd class="mt-1 text-body-sm font-semibold">{{ f.headcount | number }}</dd></div>
            </dl>
            <div class="mt-auto flex flex-wrap items-center gap-4 pt-8">
              <a [routerLink]="['/factories', f.slug]" class="btn-primary">View factory</a>
              <a routerLink="/contact" [queryParams]="{ factory: f.slug }" class="btn-ghost">
                Request a quote <app-icon name="arrow-right" [size]="16" />
              </a>
            </div>
          </div>
        </article>
      }
    </section>
  `,
})
export class Factories {
  protected readonly factories = FACTORIES;
  protected readonly stats = HEADLINE_STATS;
}
