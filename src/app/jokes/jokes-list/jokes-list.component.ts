import { Component } from '@angular/core';
import { Joke } from '../i-jokes';

@Component({
  selector: 'app-jokes-list',
  templateUrl: './jokes-list.component.html',
  styleUrls: ['./jokes-list.component.scss']
})

export class JokesListComponent  {

  displayedColumns: string[] = ['joke', 'flags', 'actions'];
  dataSource: Joke[];

  constructor() {
    this.getJokesFromStorage();
  }

  getJokesFromStorage() {
    this.dataSource = JSON.parse(localStorage.getItem('jokes')) ? JSON.parse(localStorage.getItem('jokes')) : [];
  }

  playRandomJokes() {
    for (const item of this.dataSource) {
      if (item.joke.punchline) {
        const content = new SpeechSynthesisUtterance(item.joke.content);
        const punchline = new SpeechSynthesisUtterance(item.joke.punchline);
        (window as any).speechSynthesis.speak(content);
        (window as any).speechSynthesis.speak(punchline);
      } else {
        const content = new SpeechSynthesisUtterance(item.joke.content);
        (window as any).speechSynthesis.speak(content);
      }
    }
  }
}
