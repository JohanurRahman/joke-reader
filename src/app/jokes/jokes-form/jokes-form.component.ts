import {Component, Input, OnInit} from '@angular/core';
import {Categories, Flags, Types} from '../jokes-constants';
import {Joke} from '../i-jokes';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-jokes-form',
  templateUrl: './jokes-form.component.html',
  styleUrls: ['./jokes-form.component.scss']
})

export class JokesFormComponent implements OnInit {

  @Input() cardTitle: string;
  @Input() jokeDetails: Joke;
  @Input() formType: string;

  categories = Categories;
  types = Types;
  flags = Flags;
  jokes: Joke[];

  form: FormGroup;

  showPunchlineInput = false;

  constructor(private fb: FormBuilder,
              private router: Router,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.constructForm();
    this.watchTypeFormControl();
    this.getJokesFromStorage();
    if (this.jokeDetails && this.jokeDetails.punchline) {
      this.showPunchlineInput = true;
      this.form.addControl('punchline', new FormControl(this.jokeDetails.punchline, Validators.required));
    }
  }

  constructForm() {
    this.form = this.fb.group({
      category: new FormControl(this.jokeDetails ? this.jokeDetails.category : '', Validators.required),
      type: new FormControl(this.jokeDetails ? this.jokeDetails.type : '', Validators.required),
      flags: this.buildFlags(),
      content: new FormControl(this.jokeDetails ? this.jokeDetails.content : '', Validators.required)
    });
  }

  get flagsFormArray() {
    return this.form.get('flags') as FormArray;
  }

  buildFlags() {
    const flags = this.jokeDetails ? this.jokeDetails.flags : this.flags;
    const arr = flags.map(flag => {
      return this.fb.control(flag.selected);
    });
    return this.fb.array(arr);
  }

  watchTypeFormControl() {
    this.form.get('type').valueChanges.subscribe(value => {
      if (value === 'Two Part') {
        this.showPunchlineInput = true;
        this.form.addControl('punchline', new FormControl(this.jokeDetails ? this.jokeDetails.punchline : '', Validators.required));
      }
      if (value === 'Single') {
        this.showPunchlineInput = false;
        this.form.removeControl('punchline');
      }
    });
  }

  getJokesFromStorage() {
    this.jokes = JSON.parse(localStorage.getItem('jokes')) ? JSON.parse(localStorage.getItem('jokes')) : [];
  }

  submitForm() {
    if (this.form.invalid) {
      this.openSnackBar('Please fill all the forms');
      return;
    }
    const formValue = this.mapFlagsCheckboxValues();
    this.formType === 'edit' ? this.updateJokeDetails(formValue) : this.addNewJoke(formValue);
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Ok', { duration: 5000, horizontalPosition: 'center', verticalPosition: 'top'});
  }

  mapFlagsCheckboxValues() {
    return Object.assign({}, this.form.value, {
      flags: this.form.value.flags.map((selected, i) => {
        return { title: this.flags[i].title,  selected };
      })
    });
  }

  updateJokeDetails(formValue) {
    if (formValue.type === 'Single') { delete formValue.punchline; }
    const data = {
      ...formValue,
      id: this.jokeDetails.id
    };

    const index = this.jokes.findIndex((item) => item.id === this.jokeDetails.id);
    this.jokes[index] = data;
    localStorage.setItem('jokes', JSON.stringify(this.jokes));
    this.router.navigate(['/', 'jokes']).then(() => this.openSnackBar('Joke Updated Successfully'));
  }

  addNewJoke(formValue) {
    const data = {
      ...formValue,
      id: this.jokes.length + 1
    };

    localStorage.setItem('jokes', JSON.stringify([...this.jokes, data]));
    this.form.reset();
    this.showPunchlineInput = false;
    this.form.removeControl('punchline');
    this.openSnackBar('Joke Added Successfully');
  }


}
