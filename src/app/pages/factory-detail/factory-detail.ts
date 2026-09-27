import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FACTORIES, PRODUCTS } from '../../core/data';
import { Icon } from '../../shared/icon';
import { VisualTile } from '../../shared/visual-tile';

@Component({
  selector: 'app-factory-detail',
  imports: [RouterLink, DecimalPipe, Icon, VisualTile],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (factory(); as f) {
      <section class="container-page pt-8 md:pt-12">
        <nav class="text-body-sm text-pewter" aria-label="Breadcrumb">
          <a routerLink="/factories" class="hover:text-ink">Factories</a>
          <span class="mx-2">/</span>
          <span class="text-ink">{{ f.short }}</span>
        </nav>

        <div class="mt-8 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <div class="flex flex-wrap gap-2">
              <span class="tag">{{ f.division }}</span>
              <span class="tag">{{ f.city }}</span>
              <span class="tag">Est. {{ f.established }}</span>
            </div>
            <h1 class="display-face mt-5 text-[40px] md:text-[52px]">{{ f.name }}</h1>
            <p class="mt-5 text-subheading text-graphite">{{ f.summary }}</p>
            <div class="mt-8 flex flex-wrap items-center gap-4">
              <a routerLink="/contact" [queryParams]="{ factory: f.slug }" class="btn-primary-lg">Request a quote</a>
              <a routerLink="/contact" class="btn-ghost"><app-icon name="building" [size]="18" class="text-ember" /> Book a site visit</a>
            </div>
          </div>
          <app-visual-tile [icon]="f.icon" [label]="f.area + ' · ' + f.city" ratio="4 / 3" [iconSize]="120" />
        </div>
      </section>

      <section class="container-page mt-12 border-y border-mist/50">
        <dl class="grid grid-cols-2 md:grid-cols-5">
          @for (s of f.stats; track s.label) {
            <div class="py-6 pr-4"><dt class="text-caption text-pewter">{{ s.label }}</dt><dd class="mt-1 text-heading-sm font-semibold tabular-nums">{{ s.value }}</dd></div>
          }
          <div class="py-6 pr-4"><dt class="text-caption text-pewter">Floor area</dt><dd class="mt-1 text-heading-sm font-semibold">{{ f.area }}</dd></div>
          <div class="py-6 pr-4"><dt class="text-caption text-pewter">Team</dt><dd class="mt-1 text-heading-sm font-semibold tabular-nums">{{ f.headcount | number }}</dd></div>
        </dl>
      </section>

      <section class="section container-page grid gap-12 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <h2 class="text-heading-sm font-semibold md:text-heading">About this factory</h2>
          <p class="mt-4 max-w-2xl text-body text-graphite">{{ f.description }}</p>

          <h3 class="mt-12 text-subheading font-semibold">Production lines</h3>
          <ul class="mt-4 grid gap-3 sm:grid-cols-2">
            @for (line of f.lines; track line) {
              <li class="flex items-start gap-3 rounded-card bg-fog p-4 text-body-sm">
                <app-icon name="check" [size]="18" class="mt-px" />{{ line }}
              </li>
            }
          </ul>
        </div>
        <aside class="space-y-6">
          <div class="card-bordered">
            <h3 class="text-subheading font-semibold">Certifications</h3>
            <ul class="mt-4 flex flex-wrap gap-2">
              @for (c of f.certifications; track c) {
                <li class="tag gap-1.5"><app-icon name="shield" [size]="14" />{{ c }}</li>
              }
            </ul>
          </div>
          <div class="card-bordered">
            <h3 class="text-subheading font-semibold">Talk to this plant</h3>
            <p class="mt-2 text-body-sm text-graphite">Our {{ f.city }} sales engineer replies within one working day.</p>
            <ul class="mt-4 space-y-2 text-body-sm">
              <li class="flex items-center gap-3"><app-icon name="phone" [size]="16" class="text-steel" />+966 11 000 00{{ f.established % 100 }}</li>
              <li class="flex items-center gap-3"><app-icon name="mail" [size]="16" class="text-steel" />{{ f.slug }}&#64;captain-alliance.example</li>
            </ul>
          </div>
        </aside>
      </section>

      <section class="bg-fog py-16 md:py-20">
        <div class="container-page">
          <div class="flex items-end justify-between gap-6">
            <h2 class="text-heading-sm font-semibold md:text-heading">Products from this factory</h2>
            <a routerLink="/products" class="btn-ghost shrink-0">Full catalogue <app-icon name="arrow-right" [size]="16" /></a>
          </div>
          <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            @for (p of products(); track p.id) {
              <div class="card">
                <div class="flex items-center justify-between">
                  <span class="text-caption font-medium text-pewter">{{ p.id }}</span>
                  @if (p.whiteLabel) {
                    <span class="tag">White label</span>
                  }
                </div>
                <h3 class="mt-4 text-subheading font-semibold">{{ p.name }}</h3>
                <p class="mt-1 text-body-sm text-graphite">{{ p.spec }}</p>
                <dl class="mt-6 grid grid-cols-2 gap-4 border-t border-mist/50 pt-4 text-body-sm">
                  <div><dt class="text-caption text-pewter">Lead time</dt><dd class="mt-0.5 font-medium">{{ p.leadTime }}</dd></div>
                  <div><dt class="text-caption text-pewter">MOQ</dt><dd class="mt-0.5 font-medium">{{ p.moq }}</dd></div>
                </dl>
              </div>
            }
          </div>
        </div>
      </section>

      <section class="container-page py-16">
        <p class="eyebrow">Other factories</p>
        <div class="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          @for (o of others(); track o.slug) {
            <a [routerLink]="['/factories', o.slug]" class="flex items-center gap-3 rounded-card border border-mist/60 p-4 transition-colors hover:border-ink">
              <span class="flex h-10 w-10 items-center justify-center rounded-card bg-fog"><app-icon [name]="o.icon" [size]="18" /></span>
              <span><span class="block text-body-sm font-semibold">{{ o.short }}</span><span class="block text-caption text-pewter">{{ o.city }}</span></span>
            </a>
          }
        </div>
      </section>
    } @else {
      <section class="container-page py-24 text-center">
        <h1 class="text-heading font-semibold">Factory not found</h1>
        <p class="mt-3 text-graphite">That factory doesn't exist — it may have been renamed.</p>
        <a routerLink="/factories" class="btn-primary mt-8">See all factories</a>
      </section>
    }
  `,
})
export class FactoryDetail {
  /** Bound from the :slug route param via withComponentInputBinding(). */
  readonly slug = input<string>('');

  protected readonly factory = computed(() => FACTORIES.find((f) => f.slug === this.slug()));
  protected readonly products = computed(() => PRODUCTS.filter((p) => p.factorySlug === this.slug()));
  protected readonly others = computed(() => FACTORIES.filter((f) => f.slug !== this.slug()));
}
