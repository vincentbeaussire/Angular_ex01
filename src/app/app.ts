import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Counter} from './components/counter/counter';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Counter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_exercice01');
}
