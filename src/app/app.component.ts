import { Component } from '@angular/core';

import { CanadaPostComponent } from './canadapost/canadapost.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CanadaPostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'todoapp';
}
