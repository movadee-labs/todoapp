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

- **Jest**: JavaScript testing framework - faster than Karma, better debugging, modern tooling
- **ng-mocks**: Mocking library for Angular components, directives, and services
- **jest-preset-angular**: Jest preset for Angular applications with Zone.js integration

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

### Writing Tests

#### Basic Component Test
```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockDirective } from 'ng-mocks';
import { RouterOutlet } from '@angular/router';
import { MyComponent } from './my.component';

describe('MyComponent', () => {
  let component: MyComponent;
  let fixture: ComponentFixture<MyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyComponent],
      declarations: [MockDirective(RouterOutlet)]
    }).compileComponents();

    fixture = TestBed.createComponent(MyComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```

#### Mocking Directives
```typescript
// Mock RouterOutlet
declarations: [MockDirective(RouterOutlet)]

// Mock multiple directives
declarations: [
  MockDirective(RouterOutlet),
  MockDirective(SomeOtherDirective)
]
```

#### Mocking Services
```typescript
import { MockService } from 'ng-mocks';

// In TestBed configuration
providers: [
  { provide: MyService, useValue: MockService(MyService) }
]
```

### Coverage

Coverage reports are generated in the `coverage/` directory with 80% threshold for statements, branches, functions, and lines.

### Documentation

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [ng-mocks Documentation](https://ng-mocks.sudo.eu/)
- [Angular Testing Guide](https://angular.dev/guide/testing)

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
