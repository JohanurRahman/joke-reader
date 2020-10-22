import { Component } from '@angular/core';
import { Joke } from '../i-jokes';
import {PageChangedEvent} from 'ngx-bootstrap';
import {Router} from '@angular/router';

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

  constructor(private router: Router) {
    this.getJokesFromStorage();
  }

  getJokesFromStorage() {
    this.jokesList = JSON.parse(localStorage.getItem('jokes')) ? JSON.parse(localStorage.getItem('jokes').slice()) : [];
    this.dataSource = this.jokesList.slice(0, 5);
  }

  pageChanged($event: PageChangedEvent) {
    this.dataSource = this.jokesList.slice($event.page * this.itemsPerPage - this.itemsPerPage, $event.page * this.itemsPerPage);
  }

  navigateToRandomJoke() {
    const jokes = JSON.parse(localStorage.getItem('jokes'));
    const random = Math.floor(Math.random() * jokes.length);
    this.router.navigate(['/', 'jokes', jokes[random].id, 'play']);
  }
}
