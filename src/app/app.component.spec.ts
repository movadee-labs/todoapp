import type { Spectator } from '@ngneat/spectator/jest';
import { createComponentFactory } from '@ngneat/spectator/jest';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { MockComponent, MockPipe } from 'ng-mocks';

import { AppComponent } from './app.component';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';

describe('AppComponent (Spectator)', () => {
  let spectator: Spectator<AppComponent>;
  let component: AppComponent;

  const createComponent = createComponentFactory({
    component: AppComponent,
    declarations: [
      MockComponent(LanguageSelectorComponent),
      MockPipe(TranslatePipe, (key: string) => `Mocked: ${key}`),
    ],
    imports: [TranslateModule],
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
