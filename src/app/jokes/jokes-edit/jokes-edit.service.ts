import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Joke } from '../i-jokes';

@Injectable({
  providedIn: 'root'
})

export class JokesEditService implements Resolve<Joke> {

  constructor(private router: Router) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Joke> {
    return this.getJokeFromStorage(route.params.jokes_id);
  }

  getJokeFromStorage(jokeId) {
    const jokesList = JSON.parse(localStorage.getItem('jokes'));
    const filteredJoke = jokesList.find((item) => item.id === parseInt(jokeId, 10));
    return filteredJoke ? filteredJoke : this.redirectToJokesList();
  }

  redirectToJokesList() {
    this.router.navigate(['/', 'jokes']).then(() => console.error('No Joke Found'));
  }

}
