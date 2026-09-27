import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FACTORIES, PRODUCTS } from '../../core/data';
import { Icon } from '../../shared/icon';

@Component({
  selector: 'app-products',
  imports: [RouterLink, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="container-page pb-10 pt-12 md:pt-20">
      <p class="eyebrow">Product catalogue</p>
      <h1 class="display-face mt-3 text-[40px] md:text-[56px]">Products</h1>
      <p class="mt-5 max-w-2xl text-subheading text-graphite">
        A selection of our standard range. Everything marked <span class="font-medium text-ink">White label</span> can be
        produced, marked and packed under your own brand.
      </p>
    </section>

    <section class="container-page pb-20">
      <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div class="flex gap-2 overflow-x-auto pb-1" role="group" aria-label="Filter by category">
          @for (c of categories; track c) {
            <button
              type="button"
              (click)="category.set(c)"
              [attr.aria-pressed]="category() === c"
              class="shrink-0 rounded-card border px-4 py-2 text-body-sm font-medium transition-colors hover:border-ink"
              [class.bg-ink]="category() === c"
              [class.text-paper]="category() === c"
              [class.border-ink]="category() === c"
              [class.border-mist]="category() !== c"
            >
              {{ c }}
            </button>
          }
        </div>
        <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
          <label class="flex items-center gap-2 text-body-sm text-graphite">
            <input type="checkbox" class="h-4 w-4 accent-ink" [checked]="whiteLabelOnly()" (change)="whiteLabelOnly.set(!whiteLabelOnly())" />
            White label only
          </label>
          <label class="sr-only" for="product-search">Search products</label>
          <input
            id="product-search"
            type="search"
            class="field sm:w-64"
            placeholder="Search by name or spec"
            [value]="query()"
            (input)="query.set($any($event.target).value)"
          />
        </div>
      </div>

      <p class="mt-6 text-body-sm text-pewter">{{ filtered().length }} of {{ total }} products</p>

      <!-- Table on desktop -->
      <div class="mt-4 hidden overflow-hidden rounded-card border border-mist/60 md:block">
        <table class="w-full text-left text-body-sm">
          <thead class="bg-fog text-caption text-pewter">
            <tr>
              <th class="px-5 py-3 font-medium">Product</th>
              <th class="px-5 py-3 font-medium">Factory</th>
              <th class="px-5 py-3 font-medium">Specification</th>
              <th class="px-5 py-3 font-medium">Lead time</th>
              <th class="px-5 py-3 font-medium">MOQ</th>
              <th class="px-5 py-3"><span class="sr-only">Actions</span></th>
            </tr>
          </thead>
          <tbody class="divide-y divide-mist/50">
            @for (p of filtered(); track p.id) {
              <tr class="hover:bg-fog/60">
                <td class="px-5 py-4">
                  <span class="block font-semibold">{{ p.name }}</span>
                  <span class="mt-0.5 flex items-center gap-2 text-caption text-pewter">
                    {{ p.id }}
                    @if (p.whiteLabel) {
                      <span class="tag py-0.5">White label</span>
                    }
                  </span>
                </td>
                <td class="px-5 py-4">
                  <a [routerLink]="['/factories', p.factorySlug]" class="underline decoration-mist underline-offset-4 hover:decoration-ink">{{ factoryName(p.factorySlug) }}</a>
                </td>
                <td class="px-5 py-4 text-graphite">{{ p.spec }}</td>
                <td class="px-5 py-4 text-graphite">{{ p.leadTime }}</td>
                <td class="px-5 py-4 text-graphite">{{ p.moq }}</td>
                <td class="px-5 py-4 text-right">
                  <a routerLink="/contact" [queryParams]="{ product: p.id }" class="btn-outline py-1.5">Quote</a>
                </td>
              </tr>
            } @empty {
              <tr><td colspan="6" class="px-5 py-12 text-center text-graphite">No products match those filters.</td></tr>
            }
          </tbody>
        </table>
      </div>

      <!-- Cards on mobile -->
      <div class="mt-4 grid gap-3 md:hidden">
        @for (p of filtered(); track p.id) {
          <div class="card-bordered p-5">
            <div class="flex items-center justify-between text-caption text-pewter">
              <span>{{ p.id }} · {{ p.category }}</span>
              @if (p.whiteLabel) {
                <span class="tag">White label</span>
              }
            </div>
            <h2 class="mt-3 text-body font-semibold">{{ p.name }}</h2>
            <p class="mt-1 text-body-sm text-graphite">{{ p.spec }}</p>
            <div class="mt-4 flex items-center justify-between text-body-sm">
              <span class="text-graphite">{{ p.leadTime }} · MOQ {{ p.moq }}</span>
              <a routerLink="/contact" [queryParams]="{ product: p.id }" class="font-medium">Quote <app-icon name="arrow-right" [size]="14" /></a>
            </div>
          </div>
        } @empty {
          <p class="rounded-card bg-fog p-8 text-center text-graphite">No products match those filters.</p>
        }
      </div>
    </section>
  `,
})
export class Products {
  protected readonly categories = ['All', ...new Set(PRODUCTS.map((p) => p.category))];
  protected readonly total = PRODUCTS.length;

  protected readonly category = signal('All');
  protected readonly query = signal('');
  protected readonly whiteLabelOnly = signal(false);

  protected readonly filtered = computed(() => {
    const cat = this.category();
    const q = this.query().trim().toLowerCase();
    const wl = this.whiteLabelOnly();
    return PRODUCTS.filter(
      (p) =>
        (cat === 'All' || p.category === cat) &&
        (!wl || p.whiteLabel) &&
        (!q || `${p.name} ${p.spec} ${p.id}`.toLowerCase().includes(q)),
    );
  });

  private readonly names = new Map(FACTORIES.map((f) => [f.slug, f.short]));
  protected factoryName(slug: string): string {
    return this.names.get(slug) ?? slug;
  }
}
