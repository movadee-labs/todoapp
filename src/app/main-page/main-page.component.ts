import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { LanguageSelectorComponent } from '../language-selector/language-selector.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [RouterModule, TranslateModule, LanguageSelectorComponent],
  template: `
    <main class="main">
      <app-language-selector></app-language-selector>

      <div class="content">
        <h1>{{ 'title' | translate }}</h1>
        <h2>{{ 'testHeader' | translate }}</h2>

        <button routerLink="/todos">Go to Todo Page</button>
      </div>
    </main>
  `,
  styles: [
    `
      .main {
        padding: 2rem;
        text-align: center;
      }

      .content {
        max-width: 600px;
        margin: 0 auto;
      }

      button {
        padding: 10px 20px;
        font-size: 16px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        margin: 20px 0;
      }

      button:hover {
        background-color: #0056b3;
      }

      h1 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        color: #333;
      }

      p {
        font-size: 1.1rem;
        color: #666;
        margin-bottom: 0.5rem;
      }
    `,
  ],
})
export class MainPageComponent {}
