import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { COMPANY, FOOTER_LINKS } from '../core/data';
import { Icon } from '../shared/icon';
import { Logo } from '../shared/logo';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, Icon, Logo],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="bg-abyss text-paper">
      <div class="container-page py-16">
        <div class="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div class="max-w-sm">
            <app-logo tone="light" />
            <p class="mt-6 text-body-sm text-mist">
              The manufacturing arm of {{ company.parent }} — aluminium, glass, steel, precast and hardware,
              produced in Saudi Arabia for projects across the GCC.
            </p>
            <ul class="mt-6 space-y-3 text-body-sm text-mist">
              <li class="flex items-start gap-3"><app-icon name="pin" [size]="16" class="mt-0.5 text-steel" />{{ company.address }}</li>
              <li class="flex items-center gap-3"><app-icon name="phone" [size]="16" class="text-steel" />{{ company.phone }}</li>
              <li class="flex items-center gap-3"><app-icon name="mail" [size]="16" class="text-steel" />{{ company.email }}</li>
            </ul>
          </div>

          @for (col of columns; track col.title) {
            <div>
              <h3 class="text-body-sm font-semibold">{{ col.title }}</h3>
              <ul class="mt-4 space-y-3">
                @for (l of col.links; track l.label) {
                  <li>
                    <a [routerLink]="l.path" class="text-body-sm text-mist transition-colors hover:text-paper">{{ l.label }}</a>
                  </li>
                }
              </ul>
            </div>
          }
        </div>

        <div class="mt-16 flex flex-col gap-4 border-t border-paper/10 pt-8 text-caption text-steel md:flex-row md:items-center md:justify-between">
          <p>© {{ year }} {{ company.name }}, a {{ company.parent }} company. All rights reserved.</p>
          <p>Placeholder content — for demonstration only.</p>
        </div>
      </div>
    </footer>
  `,
})
export class Footer {
  protected readonly company = COMPANY;
  protected readonly columns = FOOTER_LINKS;
  protected readonly year = new Date().getFullYear();
}
