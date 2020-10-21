import { Component } from '@angular/core';
import {Categories, Flags, Types} from '../jokes-constants';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Joke} from '../i-jokes';
import {MatSnackBar} from '@angular/material';
@Component({
  selector: 'app-jokes-add',
  templateUrl: './jokes-add.component.html',
  styleUrls: ['./jokes-add.component.scss']
})
export class JokesAddComponent  {

  categories = Categories;
  types = Types;
  flags = Flags;
  jokes: Joke[];

  form: FormGroup;

  showDelivery = false;

  constructor(private fb: FormBuilder,
              private snackBar: MatSnackBar) {
    this.constructForm();
    this.watchTypeFormControl();
    this.getJokesFromStorage();
  }

  constructForm() {
    this.form = this.fb.group({
      category: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      flags: this.buildFlags(),
      content: new FormControl('', Validators.required)
    });
  }

  get flagsFormArray() {
    return this.form.get('flags') as FormArray;
  }

  buildFlags() {
    const arr = this.flags.map(flag => {
      return this.fb.control(flag.selected);
    });
    return this.fb.array(arr);
  }

  watchTypeFormControl() {
    this.form.get('type').valueChanges.subscribe(value => {
      if (value === 'Two Part') {
        this.showDelivery = true;
        this.form.addControl('delivery', new FormControl('', Validators.required));
      }
      if (value === 'Single') {
        this.showDelivery = false;
        this.form.removeControl('delivery');
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
    const constructedData = this.constructFormData(formValue);
    this.storeJokeIntoLocalStorage(constructedData);
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

  constructFormData(formValue) {
    return  {
      id: this.jokes.length + 1,
      joke: {
        content: formValue.content,
        category: formValue.category,
        punchline: formValue.delivery ? formValue.delivery : ''
      },
      flags: formValue.flags
    };
  }

  storeJokeIntoLocalStorage(data) {
    const jokes = [...this.jokes, data];
    localStorage.setItem('jokes', JSON.stringify(jokes));
    this.form.reset();
    this.openSnackBar('Joke Added Successfully');
  }

}
