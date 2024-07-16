import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppCounter } from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppCounter],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '01-introduccion';
}
