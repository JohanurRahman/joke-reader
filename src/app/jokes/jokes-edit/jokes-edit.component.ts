import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Joke} from '../i-jokes';

@Component({
  selector: 'app-jokes-edit',
  templateUrl: './jokes-edit.component.html',
  styleUrls: ['./jokes-edit.component.scss']
})
export class JokesEditComponent implements OnInit {

  title = 'Edit Joke';
  details: Joke;

  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.data.subscribe(({ joke }) => this.details = joke);
  }

  ngOnInit() {
  }

}
