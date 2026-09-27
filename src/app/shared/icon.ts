import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { IconName } from '../core/models';

/** Line icons on a 24×24 grid, 1.5px stroke. */
const PATHS: Record<IconName, string[]> = {
  factory: ['M3 21V10l5 3V10l5 3V10l5 3V4h3v17H3Z', 'M7 17h2', 'M12 17h2', 'M17 17h1'],
  glass: ['M5 3h14v18H5Z', 'M9 7l-2 2', 'M13 7l-6 6', 'M17 11l-6 6'],
  steel: ['M4 5h16', 'M4 19h16', 'M12 5v14', 'M8 5v2', 'M16 5v2', 'M8 17v2', 'M16 17v2'],
  aluminium: ['M4 4h6v16H4Z', 'M14 4h6v6h-6Z', 'M14 14h6v6h-6Z'],
  concrete: ['M3 8h18v10H3Z', 'M7 13h.01', 'M12 13h.01', 'M17 13h.01', 'M3 8l3-3h12l3 3'],
  hardware: ['M12 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z', 'M12 11v10', 'M9 18h6'],
  shield: ['M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6l8-3Z', 'M8.5 12l2.5 2.5 4.5-5'],
  truck: ['M2 6h12v10H2Z', 'M14 10h4l3 3v3h-7', 'M6 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z', 'M17 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z'],
  ruler: ['M3 17 17 3l4 4L7 21l-4-4Z', 'M7 13l2 2', 'M10 10l2 2', 'M13 7l2 2'],
  flask: ['M9 3h6', 'M10 3v6l-5 10a1.5 1.5 0 0 0 1.3 2h11.4a1.5 1.5 0 0 0 1.3-2L14 9V3', 'M7 15h10'],
  leaf: ['M5 19c0-8 5-14 15-14 0 10-6 15-14 15', 'M5 19l7-7'],
  clock: ['M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18Z', 'M12 7v5l3 2'],
  globe: ['M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18Z', 'M3 12h18', 'M12 3c2.5 2.5 3.5 5.5 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-5.5-3.5-9s1-6.5 3.5-9Z'],
  'arrow-right': ['M5 12h14', 'M13 6l6 6-6 6'],
  'arrow-up-right': ['M7 17 17 7', 'M8 7h9v9'],
  play: ['M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18Z', 'M10 8.5v7l6-3.5-6-3.5Z'],
  menu: ['M4 7h16', 'M4 12h16', 'M4 17h16'],
  close: ['M6 6l12 12', 'M18 6 6 18'],
  'chevron-down': ['M6 9l6 6 6-6'],
  check: ['M5 12.5l4.5 4.5L19 7.5'],
  phone: ['M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z'],
  mail: ['M3 6h18v12H3Z', 'M3 7l9 6 9-6'],
  pin: ['M12 21s-7-6.2-7-12a7 7 0 1 1 14 0c0 5.8-7 12-7 12Z', 'M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z'],
  building: ['M4 21V4h10v17', 'M14 9h6v12', 'M2 21h20', 'M8 8h2', 'M8 12h2', 'M8 16h2'],
  box: ['M12 3 3 7.5v9L12 21l9-4.5v-9L12 3Z', 'M3 7.5 12 12l9-4.5', 'M12 12v9'],
};

@Component({
  selector: 'app-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'inline-flex shrink-0', 'aria-hidden': 'true' },
  template: `
    <svg
      [attr.width]="size()"
      [attr.height]="size()"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      [attr.stroke-width]="stroke()"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      @for (d of paths(); track $index) {
        <path [attr.d]="d" />
      }
    </svg>
  `,
})
export class Icon {
  readonly name = input.required<IconName>();
  readonly size = input(20);
  readonly stroke = input(1.5);
  protected readonly paths = computed(() => PATHS[this.name()]);
}
