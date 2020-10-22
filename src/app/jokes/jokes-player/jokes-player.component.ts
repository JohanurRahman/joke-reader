import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Joke} from '../i-jokes';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-jokes-player',
  templateUrl: './jokes-player.component.html',
  styleUrls: ['./jokes-player.component.scss']
})

export class JokesPlayerComponent implements OnDestroy {

  joke: Joke;
  jokesFromStorage: Joke[];
  showPunchline = false;
  timeout;
  nextJokeId: number;

  constructor(private activatedRoute: ActivatedRoute,
              private snackbar: MatSnackBar,
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
    this.jokesFromStorage = JSON.parse(localStorage.getItem('jokes'));
    const arr = this.jokesFromStorage.filter(item => item.id !== this.joke.id);
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

  onSelectFlag(value: { title: string; selected: boolean }) {
    const index =  this.joke.flags.findIndex((item) => item.title === value.title);
    this.joke.flags[index].selected = true;
    this.updateStorageData();
  }

  updateStorageData() {
    const index = this.jokesFromStorage.findIndex((item) => item.id === this.joke.id);
    this.jokesFromStorage[index] = this.joke;
    localStorage.setItem('jokes', JSON.stringify(this.jokesFromStorage));
    this.snackbar.open('Flag Added', 'Ok', { duration: 3000 });
  }

  ngOnDestroy() {
    this.clearSpeech();
  }
}
