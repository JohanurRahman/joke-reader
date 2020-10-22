import { Component } from '@angular/core';
import { Joke } from '../i-jokes';

@Component({
  selector: 'app-jokes-list',
  templateUrl: './jokes-list.component.html',
  styleUrls: ['./jokes-list.component.scss']
})

export class JokesListComponent  {

  dataSource: Joke[];
  jokesList: Joke[];

  itemsPerPage = 5;

  constructor() {
    this.getJokesFromStorage();
  }

  getJokesFromStorage() {
    this.jokesList = JSON.parse(localStorage.getItem('jokes')) ? JSON.parse(localStorage.getItem('jokes').slice()) : [];
    this.dataSource = this.jokesList.slice(0, 5);
  }

  handleCurrentPage(pageNumber: number) {
    this.dataSource = this.jokesList.slice(pageNumber * this.itemsPerPage - this.itemsPerPage, pageNumber * this.itemsPerPage);
  }
}
