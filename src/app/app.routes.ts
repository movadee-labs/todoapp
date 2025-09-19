import type { Routes } from '@angular/router';

import { MainPageComponent } from './main-page/main-page.component';
import { TodoPageComponent } from './todo-page/todo-page.component';

export const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'todos', component: TodoPageComponent },
];
