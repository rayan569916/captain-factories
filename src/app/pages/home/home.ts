import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import {
  ARTICLES,
  CAPABILITIES,
  CLIENTS,
  FACTORIES,
  HEADLINE_STATS,
  INDUSTRIES,
  PROCESS_STEPS,
} from '../../core/data';
import { Icon } from '../../shared/icon';
import { SectionHeading } from '../../shared/section-heading';
import { VisualTile } from '../../shared/visual-tile';

@Component({
  selector: 'app-home',
  imports: [RouterLink, DatePipe, Icon, SectionHeading, VisualTile],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.html',
})
export class Home {
  private readonly router = inject(Router);

  protected readonly stats = HEADLINE_STATS;
  protected readonly factories = FACTORIES;
  protected readonly capabilities = CAPABILITIES;
  protected readonly steps = PROCESS_STEPS;
  protected readonly clients = CLIENTS;
  protected readonly industries = INDUSTRIES;
  protected readonly articles = ARTICLES.slice(0, 3);

  /** Dummy utilisation figures for the hero panel. */
  protected readonly utilisation = FACTORIES.map((f, i) => ({
    name: f.short,
    city: f.city,
    icon: f.icon,
    value: [82, 74, 91, 68, 77][i] ?? 70,
  }));

  protected readonly activeSlug = signal(FACTORIES[0].slug);
  protected readonly active = computed(
    () => this.factories.find((f) => f.slug === this.activeSlug()) ?? this.factories[0],
  );

  protected readonly email = signal('');

  protected startQuote(event: Event): void {
    event.preventDefault();
    this.router.navigate(['/contact'], {
      queryParams: this.email() ? { email: this.email() } : {},
    });
  }
}
