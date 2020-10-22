import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jokes-list-header',
  templateUrl: './jokes-list-header.component.html',
  styleUrls: ['./jokes-list-header.component.scss']
})

export class JokesListHeaderComponent {

  constructor(private router: Router) { }

  navigateToRandomJoke() {
    const jokes = JSON.parse(localStorage.getItem('jokes'));
    const random = Math.floor(Math.random() * jokes.length);
    this.router.navigate(['/', 'jokes', jokes[random].id, 'play']).then();
  }

}
