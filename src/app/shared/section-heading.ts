import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div [class.text-center]="center()" [class.mx-auto]="center()" class="max-w-2xl">
      @if (eyebrow()) {
        <p class="eyebrow mb-3">{{ eyebrow() }}</p>
      }
      <h2 class="text-heading font-semibold md:text-heading-lg">{{ title() }}</h2>
      @if (lead()) {
        <p class="mt-4 text-body text-graphite md:text-subheading" [class.mx-auto]="center()">
          {{ lead() }}
        </p>
      }
    </div>
  `,
})
export class SectionHeading {
  readonly eyebrow = input<string>();
  readonly title = input.required<string>();
  readonly lead = input<string>();
  readonly center = input(false);
}
