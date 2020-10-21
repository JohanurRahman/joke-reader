import { Component } from '@angular/core';
import { Jokes } from './jokes/jokes-constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor() {
    this.setDefaultJokesInLocalStorage();
  }

  setDefaultJokesInLocalStorage() {
    if (!JSON.parse(localStorage.getItem('jokes'))) {
      localStorage.setItem('jokes', JSON.stringify(Jokes));
    }
  }
}
