import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Joke } from '../i-jokes';

@Component({
  selector: 'app-jokes-edit',
  templateUrl: './jokes-edit.component.html',
  styleUrls: ['./jokes-edit.component.scss']
})

export class JokesEditComponent {

  title = 'Edit Joke';
  jokeDetails: Joke;

  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.data.subscribe(({ joke }) => this.jokeDetails = joke);
  }

}
