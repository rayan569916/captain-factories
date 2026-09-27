import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-logo',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a routerLink="/" class="flex items-center gap-3" aria-label="Captain Factories home">
      <img src="logo.png" alt="" width="36" height="41" class="h-10 w-auto" />
      <span class="flex flex-col leading-none">
        <span
          class="display-face text-[17px] tracking-[-0.02em]"
          [class.text-ink]="tone() === 'dark'"
          [class.text-paper]="tone() === 'light'"
          >Captain Factories</span
        >
        <span
          class="mt-1 text-[10px] font-medium uppercase tracking-[0.12em]"
          [class.text-pewter]="tone() === 'dark'"
          [class.text-mist]="tone() === 'light'"
          >Captain International Alliance</span
        >
      </span>
    </a>
  `,
})
export class Logo {
  /** 'dark' text for light surfaces, 'light' text for the dark footer. */
  readonly tone = input<'dark' | 'light'>('dark');
}
