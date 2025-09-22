# Todoapp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.15.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Testing

This project uses **Jest** with **ng-mocks** for unit testing Angular components.

### Tech Stack

- **Jest**: Test runner and assertion library.
  - Benefits: fast execution, clear failures, great watch mode, rich ecosystem. Replaces Karma for a simpler, faster DX.
- **jest-preset-angular**: Angular-specific Jest preset.
  - Benefits: configures Zone.js test environment and Angular transforms so components, templates, and DI just work.
- **ng-mocks**: Mocks for Angular directives, components, and services.
  - Benefits: easy, type-safe mocks without boilerplate; speeds up tests by replacing heavy dependencies.
- **Spectator**: Ergonomic helpers for Angular tests (optional but supported).
  - Benefits: less boilerplate via `createComponentFactory`, convenient DOM/query helpers, cleaner input/output testing.

### Quick Start

```bash
# Run tests once
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run tests for CI
npm run test:ci
```

### Quick Start

```bash
# Run tests once
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run tests for CI
npm run test:ci
```

### Coverage

Coverage reports are generated in the `coverage/` directory with 80% threshold for statements, branches, functions, and lines.


### Writing Tests (Jest + Spectator + ng-mocks)

```typescript
// Example: Combine Jest + Spectator + ng-mocks in one spec
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockDirective, MockService } from 'ng-mocks';
import { RouterOutlet } from '@angular/router';

import { MyService } from '../services/my.service';
import { MyWidgetComponent } from './my-widget.component';

describe('MyWidgetComponent', () => {
  let component: Spectator<MyWidgetComponent>;

  const createComponent = createComponentFactory({
    component: MyWidgetComponent,
    declarations: [MockDirective(RouterOutlet)], // mock a directive
    providers: [
      { provide: MyService, useValue: MockService(MyService) } // mock a service
    ],
    animations: false // keep tests deterministic
  });

  beforeEach(() => (component = createComponent()));

  it('creates the component', () => {
    expect(component.component).toBeTruthy();
  });

  it('renders a dynamic title', () => {
    component.setInput('title', 'Hello');
    expect(component.query('h1')?.textContent).toContain('Hello');
  });

  it('has a mocked router-outlet', () => {
    expect(component.query('router-outlet')).toBeTruthy();
  });

  it('interacts with the DOM', () => {
    component.click('button.save');
    const items = component.queryAll('.list-item');
    expect(items.length).toBeGreaterThan(0);
  });
});
```

### Documentation

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [ng-mocks Documentation](https://ng-mocks.sudo.eu/)
- [Angular Testing Guide](https://angular.dev/guide/testing)
- [Spectator Documentation](https://ngneat.github.io/spectator/)

## Pre-commit hook

What it does (in this order):
- Lints the project (ESLint) and auto-fixes safe issues.
- Re-runs lint to verify no errors remain; blocks commit if errors persist.
- Runs the full Jest suite; blocks commit if any tests fail.

Behavior:
- Output in VSCode GUI commits is concise. For details open: View → Output → select "Git".
- Logs are saved locally for inspection:
  - Lint log: `.git/.precommit-lint.log`
  - Test log: `.git/.precommit-tests.log`


Bypass (emergencies only): `git commit --no-verify`

- Re-install hooks (if hooks stop running locally):

```bash
npm run prepare
```

### Notifications (cross‑platform)

- We use `node-notifier` to show a system notification only when lint or tests fail.
- Why: consistent, lightweight popups on macOS/Windows/Linux so devs notice failures even from GUI commits.
- Usage: no action needed—on failure you’ll see a notification like “Some unit tests failed…” or “Lint errors found…”. On success it stays silent.

## Linting, Formatting, and Editor Setup

### ESLint
- Stack: Angular ESLint + TypeScript ESLint (balanced “recommended” rules).
- Coverage: app code and tests (`src/**/*.{ts,html}`).
- Extras: import ordering and `consistent-type-imports` enabled.
- Warnings vs errors: errors fail the command; warnings do not. Not wired to pre-commit yet.

Commands:
```bash
# Check
npm run lint

# Auto-fix safe issues
npm run lint:fix
```

### Prettier
- Purpose: consistent formatting; integrated with ESLint via `eslint-plugin-prettier` and `eslint-config-prettier`.
- Runs on save in VSCode (see settings below). Use `lint:fix` for bulk fixes.

### VSCode configuration
- Workspace settings (`.vscode/settings.json`) enable:
  - format on save
  - ESLint and Prettier fixes on save
- Recommended extensions (`.vscode/extensions.json`):
  - `dbaeumer.vscode-eslint`
  - `esbenp.prettier-vscode`
  - `angular.ng-template`

Notes:
- If you don’t see ESLint diagnostics, ensure the ESLint extension is enabled for the workspace.
- We may add a lint hook later (pre-commit/pre-push) once the codebase is clean.

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


## Internationalization (NGX Translate) — Quick Reference

This app uses NGX Translate for runtime i18n with simple JSON files.

- **Config**: `src/app/app.config.ts` sets fallback language to `en` and loads JSON from `public/assets/i18n/`.
- **Files**: Add/update keys in `public/assets/i18n/en.json`, `public/assets/i18n/fr.json`, etc.

Example JSON (`en.json`):
```json
{ "title": "Welcome to My App", "greeting": "Hello, {{name}}!" }
```

### Use in templates
```html
<h1>{{ 'title' | translate }}</h1>
<p>{{ 'greeting' | translate: { name: userName } }}</p>
```

### Use in TypeScript
```ts
import { TranslateService } from '@ngx-translate/core';

constructor(private t: TranslateService) {
  this.t.use('en'); // optional; fallback is already "en"
  const txt = this.t.instant('greeting', { name: 'Alla' });
  this.t.get('greeting', { name: 'Alla' }).subscribe(v => console.log(v));
}
```

### Switch language
```ts
this.t.use('fr');
```

### Add a new key
1) Add the same key to all language files.
```json
// en.json
{ "logout": "Log out" }
// fr.json
{ "logout": "Se déconnecter" }
```

### Add a new language
1) Create `public/assets/i18n/es.json` with the same keys.
2) Switch via `this.t.use('es')`.

### Tips
- Keep keys consistent across all languages.
- Prefer placeholders (`{{name}}`) over string concatenation.
- Missing keys fall back to English.
- Ensure valid JSON (no trailing commas).
