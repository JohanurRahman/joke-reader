import { Component, OnInit } from '@angular/core';
import { Jokes } from '../i-jokes';

const ELEMENT_DATA: Jokes[] = [
  {
    joke: {
      content: 'I went to buy some camo pants but couldn’t find any',
      category: 'Test 1'
    },
    flags: ['http']
  },
  {
    joke: {
      content: 'My wife told me to stop impersonating a flamingo. I had to put my foot down',
      category: 'Test 2'
    },
    flags: ['http']
  },
  {
    joke: {
      content: 'Why does Waldo wear stripes?',
      category: 'Test 2',
      punchline: 'Because he doesnt want to be spotted'
    },
    flags: ['http']
  }
];

@Component({
  selector: 'app-jokes-list',
  templateUrl: './jokes-list.component.html',
  styleUrls: ['./jokes-list.component.scss']
})
export class JokesListComponent implements OnInit {


  displayedColumns: string[] = ['joke', 'flags', 'actions'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
