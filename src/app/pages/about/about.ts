import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { COMPANY, HEADLINE_STATS, LEADERS, MILESTONES, VALUES } from '../../core/data';
import { SectionHeading } from '../../shared/section-heading';

@Component({
  selector: 'app-about',
  imports: [RouterLink, SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="container-page grid gap-12 pb-16 pt-12 md:pt-20 lg:grid-cols-[1.2fr_1fr] lg:items-end">
      <div>
        <p class="eyebrow">About us</p>
        <h1 class="display-face mt-3 text-[40px] md:text-[56px]">The manufacturing arm of {{ company.parent }}</h1>
      </div>
      <p class="text-subheading text-graphite">
        Since 2012 we've grown from a single steel shop in Jubail to five factories producing the materials that
        go into towers, villas, hospitals and warehouses across the region.
      </p>
    </section>

    <section class="container-page">
      <div class="grid gap-4 rounded-card bg-fog p-4 sm:grid-cols-2 sm:p-6 lg:grid-cols-4">
        @for (s of stats; track s.label) {
          <div class="rounded-card bg-paper p-6">
            <p class="text-heading font-semibold tabular-nums">{{ s.value }}</p>
            <p class="mt-1 text-body-sm text-pewter">{{ s.label }}</p>
          </div>
        }
      </div>
    </section>

    <section class="section container-page">
      <app-section-heading eyebrow="What we stand for" title="Three commitments on every order" />
      <div class="mt-10 grid gap-6 md:grid-cols-3">
        @for (v of values; track v.title; let i = $index) {
          <div class="border-t border-ink pt-6">
            <span class="text-body-sm font-semibold tabular-nums text-steel">0{{ i + 1 }}</span>
            <h3 class="mt-3 text-heading-sm font-semibold">{{ v.title }}</h3>
            <p class="mt-2 text-body text-graphite">{{ v.body }}</p>
          </div>
        }
      </div>
    </section>

    <section class="section bg-fog">
      <div class="container-page">
        <app-section-heading eyebrow="Our story" title="Milestones" />
        <ol class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          @for (m of milestones; track m.year) {
            <li class="card">
              <span class="text-heading font-semibold tabular-nums">{{ m.year }}</span>
              <h3 class="mt-4 text-subheading font-semibold">{{ m.title }}</h3>
              <p class="mt-2 text-body-sm text-graphite">{{ m.body }}</p>
            </li>
          }
        </ol>
      </div>
    </section>

    <section class="section container-page">
      <app-section-heading eyebrow="Leadership" title="The team behind the factories" />
      <ul class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        @for (l of leaders; track l.name) {
          <li>
            <div class="flex aspect-square items-center justify-center rounded-card bg-fog text-heading-lg font-semibold text-steel">
              {{ l.initials }}
            </div>
            <p class="mt-4 text-subheading font-semibold">{{ l.name }}</p>
            <p class="text-body-sm text-graphite">{{ l.role }}</p>
          </li>
        }
      </ul>
    </section>

    <section class="container-page pb-20">
      <div class="flex flex-col items-start justify-between gap-6 rounded-card bg-fog p-8 md:flex-row md:items-center md:p-12">
        <div>
          <h2 class="display-face text-[32px]">Visit a factory</h2>
          <p class="mt-2 text-body text-graphite">We host client and consultant tours every week in all five locations.</p>
        </div>
        <a routerLink="/contact" class="btn-primary-lg">Book a visit</a>
      </div>
    </section>
  `,
})
export class About {
  protected readonly company = COMPANY;
  protected readonly stats = HEADLINE_STATS;
  protected readonly values = VALUES;
  protected readonly milestones = MILESTONES;
  protected readonly leaders = LEADERS;
}
