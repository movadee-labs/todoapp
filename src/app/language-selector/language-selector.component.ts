import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

/**
 * Language Selector Component - Testing Only
 *
 * This component is for testing purposes only. In production, language selection
 * will be handled by Customer Connect. Use this component to test the application
 * and demonstrate language switching when not connected to Customer Connect.
 */
@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.scss',
})
export class LanguageSelectorComponent {
  private translate = inject(TranslateService);
  private _selectedLanguage = 'en';

  languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' },
  ];

  get selectedLanguage(): string {
    return this._selectedLanguage;
  }

  set selectedLanguage(value: string) {
    this._selectedLanguage = value;
    this.translate.use(value);
  }
}
