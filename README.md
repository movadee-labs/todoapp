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

What it does: runs the full test suite with concise output; blocks the commit on failures. We use Husky to run Jest before each commit.


```bash
git commit --no-verify
```

- Re-install hooks (if hooks stop running locally):

```bash
npm run prepare
```

### Notifications (cross‑platform)

- We use `node-notifier` to show a system notification only when tests fail.
- Why: consistent, lightweight popups on macOS/Windows/Linux so devs notice failures even from GUI commits.
- How to use: no action needed—on failure you’ll see a notification like “Some unit tests failed…”. On success it stays silent.

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
