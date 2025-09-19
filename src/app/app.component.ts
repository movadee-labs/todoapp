import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { LanguageSelectorComponent } from './language-selector/language-selector.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TranslateModule, LanguageSelectorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'todoapp';
}
