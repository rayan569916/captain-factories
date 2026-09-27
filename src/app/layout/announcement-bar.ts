import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ANNOUNCEMENT } from '../core/data';

@Component({
  selector: 'app-announcement-bar',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="bg-carbon px-4 py-2 text-center text-caption font-medium text-paper">
      {{ a.text }}
      <a [routerLink]="a.link" class="ml-1 whitespace-nowrap text-ember hover:underline">{{ a.linkText }} →</a>
    </div>
  `,
})
export class AnnouncementBar {
  protected readonly a = ANNOUNCEMENT;
}
