import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Joke} from '../i-jokes';

@Component({
  selector: 'app-jokes-player',
  templateUrl: './jokes-player.component.html',
  styleUrls: ['./jokes-player.component.scss']
})

export class JokesPlayerComponent implements OnDestroy {

  joke: Joke;
  showPunchline = false;
  timeout;
  nextJokeId: number;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.data.subscribe(({ joke }) => {
      this.joke = joke;
      this.playJoke(joke);
    });
    this.mapJokesArrayForRandomJoke();
  }

  playJoke(joke) {
    if (joke.punchline) {
      const content = new SpeechSynthesisUtterance(joke.content);
      const punchline = new SpeechSynthesisUtterance(joke.punchline);
      (window as any).speechSynthesis.speak(content);
      this.timeout = setTimeout(() => {
        (window as any).speechSynthesis.speak(punchline);
        this.showPunchline = true;
      }, 3000);
    } else {
      const content = new SpeechSynthesisUtterance(joke.content);
      (window as any).speechSynthesis.speak(content);
    }
  }

  mapJokesArrayForRandomJoke() {
    const jokes = JSON.parse(localStorage.getItem('jokes'));
    const arr = jokes.filter(item => item.id !== this.joke.id);
    const random = Math.floor(Math.random() * arr.length);
    this.nextJokeId = arr[random].id;
  }

  clearSpeech() {
    speechSynthesis.cancel();
    clearTimeout(this.timeout);
  }

  navigateToRandomJoke() {
    this.clearSpeech();
    this.router.navigate(['/', 'jokes', this.nextJokeId, 'play']).then(() => this.mapJokesArrayForRandomJoke());
  }

  ngOnDestroy() {
    this.clearSpeech();
  }

}
