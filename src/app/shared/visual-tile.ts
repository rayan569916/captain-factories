import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IconName } from '../core/models';
import { Icon } from './icon';

/**
 * Placeholder visual used where product photography will go.
 * A Fog panel with a blueprint grid and a large line icon.
 */
@Component({
  selector: 'app-visual-tile',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  template: `
    <div
      class="relative flex items-center justify-center overflow-hidden rounded-card bg-fog text-steel"
      [style.aspect-ratio]="ratio()"
    >
      <div
        class="absolute inset-0 opacity-60"
        style="background-image: linear-gradient(to right, rgb(185 187 198 / .35) 1px, transparent 1px), linear-gradient(to bottom, rgb(185 187 198 / .35) 1px, transparent 1px); background-size: 24px 24px;"
      ></div>
      <app-icon class="relative" [name]="icon()" [size]="iconSize()" [stroke]="1" />
      @if (label()) {
        <span class="tag absolute bottom-3 left-3 bg-paper">{{ label() }}</span>
      }
    </div>
  `,
})
export class VisualTile {
  readonly icon = input.required<IconName>();
  readonly label = input<string>();
  readonly ratio = input('16 / 9');
  readonly iconSize = input(72);
}
