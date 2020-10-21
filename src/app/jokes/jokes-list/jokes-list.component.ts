import { Component } from '@angular/core';
import { Joke } from '../i-jokes';
import {PageChangedEvent} from 'ngx-bootstrap';

@Component({
  selector: 'app-jokes-list',
  templateUrl: './jokes-list.component.html',
  styleUrls: ['./jokes-list.component.scss']
})

export class JokesListComponent  {

  displayedColumns: string[] = ['joke', 'flags', 'actions'];
  dataSource: Joke[];

  itemsPerPage = 5;
  jokesList: Joke[];

  constructor() {
    this.getJokesFromStorage();
  }

  getJokesFromStorage() {
    this.jokesList = JSON.parse(localStorage.getItem('jokes')) ? JSON.parse(localStorage.getItem('jokes').slice()) : [];
    this.dataSource = this.jokesList.slice(0, 5);
  }

  // playRandomJokes() {
  //   for (const item of this.dataSource) {
  //     if (item.joke.punchline) {
  //       const content = new SpeechSynthesisUtterance(item.joke.content);
  //       const punchline = new SpeechSynthesisUtterance(item.joke.punchline);
  //       (window as any).speechSynthesis.speak(content);
  //       (window as any).speechSynthesis.speak(punchline);
  //     } else {
  //       const content = new SpeechSynthesisUtterance(item.joke.content);
  //       (window as any).speechSynthesis.speak(content);
  //     }
  //   }
  // }

  pageChanged($event: PageChangedEvent) {
    this.dataSource = this.jokesList.slice($event.page * this.itemsPerPage - this.itemsPerPage, $event.page * this.itemsPerPage);
  }
}
