import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { COMPANY, FACTORIES, PRODUCTS } from '../../core/data';
import { Icon } from '../../shared/icon';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="container-page grid gap-12 pb-20 pt-12 md:pt-20 lg:grid-cols-[1fr_1.3fr]">
      <div>
        <p class="eyebrow">Request a quote</p>
        <h1 class="display-face mt-3 text-[40px] md:text-[52px]">Tell us what you're building</h1>
        <p class="mt-5 text-subheading text-graphite">
          Share quantities and target dates. A sales engineer will come back with a fixed-price quotation within two
          working days.
        </p>

        <ul class="mt-10 space-y-5">
          <li class="flex items-start gap-4">
            <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-card bg-fog"><app-icon name="phone" [size]="18" /></span>
            <span><span class="block text-caption text-pewter">Sales line</span><span class="block text-body font-medium">{{ company.phone }}</span></span>
          </li>
          <li class="flex items-start gap-4">
            <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-card bg-fog"><app-icon name="mail" [size]="18" /></span>
            <span><span class="block text-caption text-pewter">Email</span><span class="block text-body font-medium">{{ company.email }}</span></span>
          </li>
          <li class="flex items-start gap-4">
            <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-card bg-fog"><app-icon name="pin" [size]="18" /></span>
            <span><span class="block text-caption text-pewter">Head office</span><span class="block text-body font-medium">{{ company.address }}</span></span>
          </li>
          <li class="flex items-start gap-4">
            <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-card bg-fog"><app-icon name="clock" [size]="18" /></span>
            <span><span class="block text-caption text-pewter">Hours</span><span class="block text-body font-medium">{{ company.hours }}</span></span>
          </li>
        </ul>
      </div>

      <div class="rounded-card bg-fog p-4 sm:p-6">
        @if (submitted()) {
          <div class="card flex min-h-[420px] flex-col items-start justify-center">
            <span class="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-paper"><app-icon name="check" [size]="22" /></span>
            <h2 class="mt-6 text-heading-sm font-semibold">Request received</h2>
            <p class="mt-2 max-w-md text-body text-graphite">
              Thanks, {{ form.value.name }}. Reference <span class="font-semibold text-ink">{{ reference() }}</span> —
              we'll reply to {{ form.value.email }} within two working days.
            </p>
            <button type="button" class="btn-outline mt-8" (click)="reset()">Send another request</button>
          </div>
        } @else {
          <form class="card space-y-5" [formGroup]="form" (ngSubmit)="submit()" novalidate>
            <div class="grid gap-5 sm:grid-cols-2">
              <div>
                <label for="name" class="mb-1.5 block text-body-sm font-medium">Full name</label>
                <input id="name" class="field" formControlName="name" autocomplete="name" />
                @if (invalid('name')) {
                  <p class="mt-1.5 text-caption text-ember">Please enter your name.</p>
                }
              </div>
              <div>
                <label for="company" class="mb-1.5 block text-body-sm font-medium">Company</label>
                <input id="company" class="field" formControlName="company" autocomplete="organization" />
              </div>
              <div>
                <label for="email" class="mb-1.5 block text-body-sm font-medium">Work email</label>
                <input id="email" type="email" class="field" formControlName="email" autocomplete="email" />
                @if (invalid('email')) {
                  <p class="mt-1.5 text-caption text-ember">Please enter a valid email.</p>
                }
              </div>
              <div>
                <label for="phone" class="mb-1.5 block text-body-sm font-medium">Phone <span class="font-normal text-pewter">(optional)</span></label>
                <input id="phone" type="tel" class="field" formControlName="phone" autocomplete="tel" />
              </div>
              <div>
                <label for="factory" class="mb-1.5 block text-body-sm font-medium">Factory</label>
                <select id="factory" class="field" formControlName="factory">
                  <option value="">Not sure yet</option>
                  @for (f of factories; track f.slug) {
                    <option [value]="f.slug">{{ f.name }}</option>
                  }
                </select>
              </div>
              <div>
                <label for="timeline" class="mb-1.5 block text-body-sm font-medium">Needed on site</label>
                <select id="timeline" class="field" formControlName="timeline">
                  <option>Within 1 month</option>
                  <option>1–3 months</option>
                  <option>3–6 months</option>
                  <option>6+ months</option>
                </select>
              </div>
            </div>

            <fieldset>
              <legend class="mb-2 block text-body-sm font-medium">Order type</legend>
              <div class="flex flex-wrap gap-2">
                @for (t of orderTypes; track t) {
                  <label class="cursor-pointer">
                    <input type="radio" class="peer sr-only" formControlName="orderType" [value]="t" />
                    <span class="inline-block rounded-card border border-mist px-4 py-2 text-body-sm font-medium peer-checked:border-ink peer-checked:bg-ink peer-checked:text-paper peer-focus-visible:outline-2 peer-focus-visible:outline-ember">{{ t }}</span>
                  </label>
                }
              </div>
            </fieldset>

            <div>
              <label for="message" class="mb-1.5 block text-body-sm font-medium">Project details</label>
              <textarea
                id="message"
                rows="5"
                class="field resize-y"
                formControlName="message"
                placeholder="Products, quantities, specifications, project location…"
              ></textarea>
              @if (invalid('message')) {
                <p class="mt-1.5 text-caption text-ember">Please add a few details (at least 10 characters).</p>
              }
            </div>

            <div class="flex flex-col-reverse items-start gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
              <p class="text-caption text-pewter">Demo form — nothing is sent.</p>
              <button type="submit" class="btn-primary-lg">Send request</button>
            </div>
          </form>
        }
      </div>
    </section>
  `,
})
export class Contact {
  private readonly fb = inject(FormBuilder);
  private readonly route = inject(ActivatedRoute);

  protected readonly company = COMPANY;
  protected readonly factories = FACTORIES;
  protected readonly orderTypes = ['Project supply', 'White label', 'Distribution', 'Sample request'];

  protected readonly form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    company: [''],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    factory: [''],
    timeline: ['1–3 months'],
    orderType: ['Project supply'],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  protected readonly submitted = signal(false);
  protected readonly reference = signal('');
  private readonly tried = signal(false);

  constructor() {
    // Prefill from query params: ?email=…, ?factory=…, ?product=…
    const q = this.route.snapshot.queryParamMap;
    const product = PRODUCTS.find((p) => p.id === q.get('product'));
    this.form.patchValue({
      email: q.get('email') ?? '',
      factory: q.get('factory') ?? product?.factorySlug ?? '',
      message: product ? `Quotation request for ${product.name} (${product.id}).\nQuantity: ` : '',
    });
  }

  protected invalid(name: 'name' | 'email' | 'message'): boolean {
    const c = this.form.controls[name];
    return c.invalid && (c.touched || this.tried());
  }

  protected submit(): void {
    this.tried.set(true);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.reference.set(`CF-${Math.floor(100000 + Math.random() * 900000)}`);
    this.submitted.set(true);
  }

  protected reset(): void {
    this.form.reset();
    this.tried.set(false);
    this.submitted.set(false);
  }
}
