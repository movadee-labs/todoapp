import { RouterOutlet } from '@angular/router';
import type { Spectator } from '@ngneat/spectator/jest';
import { createComponentFactory } from '@ngneat/spectator/jest';
import { MockDirective } from 'ng-mocks';

import { AppComponent } from './app.component';

describe('AppComponent (Spectator)', () => {
  let spectator: Spectator<AppComponent>;
  let component: AppComponent;

  const createComponent = createComponentFactory({
    component: AppComponent,
    declarations: [MockDirective(RouterOutlet)],
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
