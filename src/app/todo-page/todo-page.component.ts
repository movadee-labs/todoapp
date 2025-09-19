import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-todo-page',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div>
      <h1>Todo Page</h1>
      <p>This is the new page!</p>
      <button routerLink="/">← Back to Main Page</button>
    </div>
  `,
  styles: [
    `
      div {
        padding: 40px;
        text-align: center;
        min-height: 100vh;
        background-color: #f8f9fa;
      }
      h1 {
        color: #333;
        margin-bottom: 20px;
      }
      p {
        color: #666;
        font-size: 18px;
        margin-bottom: 30px;
      }
      button {
        padding: 12px 24px;
        font-size: 16px;
        background-color: #6c757d;
        color: white;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        margin: 20px 0;
        transition: background-color 0.3s;
      }
      button:hover {
        background-color: #5a6268;
      }
    `,
  ],
})
export class TodoPageComponent {}
