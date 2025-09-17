import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';

import { environment } from '../../environments/environment';

type FindResponse = {
  Items: Array<{
    Id?: string;
    Text?: string;
    Description?: string;
    Error?: string;
    Description2?: string;
  }>;
};

type RetrieveResponse = {
  Items: Array<{
    Label?: string;
    Line1?: string;
    Line2?: string;
    Line3?: string;
    City?: string;
    ProvinceName?: string;
    PostalCode?: string;
    CountryName?: string;
  }>;
};

@Component({
  selector: 'app-canadapost',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './canadapost.component.html',
  styleUrl: './canadapost.component.scss',
})
export class CanadaPostComponent {
  private readonly http = inject(HttpClient);
  private readonly searchSubject = new Subject<string>();

  query = signal('');
  suggestions = signal<
    Array<{ Id: string; Text: string; Description?: string }>
  >([]);
  error = signal<string | null>(null);
  selectedAddress = signal<RetrieveResponse['Items'][number] | null>(null);

  private readonly baseFind =
    'https://ws1.postescanada-canadapost.ca/AddressComplete/Interactive/Find/v2.10/json3.ws';
  private readonly baseRetrieve =
    'https://ws1.postescanada-canadapost.ca/AddressComplete/Interactive/RetrieveFormatted/v2.10/json3ex.ws';

  constructor() {
    // Set up debounced search
    this.searchSubject
      .pipe(
        debounceTime(300), // Wait 300ms after user stops typing
        distinctUntilChanged(), // Only search if the term actually changed
      )
      .subscribe((term) => this.performSearch(term));
  }

  onInput(): void {
    const term = this.query().trim();
    this.selectedAddress.set(null);
    this.error.set(null);

    if (term.length < 3) {
      this.suggestions.set([]);
      return;
    }

    // Emit the search term to the debounced subject
    this.searchSubject.next(term);
  }

  private performSearch(term: string): void {
    const params = new HttpParams()
      .set('Key', environment.addressCompleteKey)
      .set('SearchTerm', term);
    this.http.get<FindResponse>(this.baseFind, { params }).subscribe({
      next: (res) => {
        const first = res.Items?.[0];
        if (first?.Error) {
          this.error.set(
            `${first.Description || 'Error'}${first.Error ? ` (code ${first.Error})` : ''}`,
          );
          this.suggestions.set([]);
          return;
        }
        const items = (res.Items || [])
          .filter(
            (i): i is { Id: string; Text: string; Description?: string } =>
              !!i.Id && !!i.Text,
          )
          .slice(0, 10);
        this.suggestions.set(items);
      },
      error: () => this.error.set('Network error while searching addresses.'),
    });
  }

  select(id?: string): void {
    if (!id) return;
    const params = new HttpParams()
      .set('Key', environment.addressCompleteKey)
      .set('Id', id);
    this.http.get<RetrieveResponse>(this.baseRetrieve, { params }).subscribe({
      next: (res) => {
        const addr = res.Items?.[0];
        if (!addr) {
          this.error.set('No address found.');
          return;
        }
        this.selectedAddress.set(addr);
      },
      error: () => this.error.set('Network error while retrieving address.'),
    });
  }
}
