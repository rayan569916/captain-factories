import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ARTICLES } from '../../core/data';
import { VisualTile } from '../../shared/visual-tile';

@Component({
  selector: 'app-news',
  imports: [DatePipe, VisualTile],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="container-page pb-10 pt-12 md:pt-20">
      <p class="eyebrow">Newsroom</p>
      <h1 class="display-face mt-3 text-[40px] md:text-[56px]">News and insights</h1>
      <p class="mt-5 max-w-2xl text-subheading text-graphite">Company updates, technical guides and notes from our engineering teams.</p>

      <div class="mt-8 flex gap-2 overflow-x-auto pb-1" role="group" aria-label="Filter by category">
        @for (c of categories; track c) {
          <button
            type="button"
            (click)="category.set(c)"
            [attr.aria-pressed]="category() === c"
            class="shrink-0 rounded-tag px-3 py-1.5 text-body-sm font-medium transition-colors"
            [class.bg-ink]="category() === c"
            [class.text-paper]="category() === c"
            [class.bg-fog]="category() !== c"
            [class.text-graphite]="category() !== c"
          >
            {{ c }}
          </button>
        }
      </div>
    </section>

    <section class="container-page pb-20">
      @if (featured(); as f) {
        <article class="grid gap-6 rounded-card border border-mist/60 p-4 sm:p-6 lg:grid-cols-2 lg:items-center lg:gap-10">
          <app-visual-tile [icon]="f.icon" [label]="f.category" [iconSize]="96" />
          <div>
            <p class="text-caption text-pewter">{{ f.date | date: 'MMMM d, y' }} · {{ f.readMinutes }} min read</p>
            <h2 class="mt-3 text-heading-sm font-semibold md:text-heading">{{ f.title }}</h2>
            <p class="mt-3 text-body text-graphite">{{ f.excerpt }}</p>
          </div>
        </article>
      }

      <div class="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        @for (a of rest(); track a.slug) {
          <article>
            <app-visual-tile [icon]="a.icon" [label]="a.category" />
            <p class="mt-4 text-caption text-pewter">{{ a.date | date: 'MMM d, y' }} · {{ a.readMinutes }} min read</p>
            <h2 class="mt-2 text-subheading font-semibold">{{ a.title }}</h2>
            <p class="mt-2 line-clamp-2 text-body-sm text-graphite">{{ a.excerpt }}</p>
          </article>
        }
      </div>
    </section>
  `,
})
export class News {
  protected readonly categories = ['All', ...new Set(ARTICLES.map((a) => a.category))];
  protected readonly category = signal('All');

  private readonly visible = computed(() =>
    this.category() === 'All' ? ARTICLES : ARTICLES.filter((a) => a.category === this.category()),
  );
  protected readonly featured = computed(() => this.visible()[0]);
  protected readonly rest = computed(() => this.visible().slice(1));
}
