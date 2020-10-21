import { Component } from '@angular/core';
import { Categories, Flags, Types } from '../jokes-constants';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-jokes-add',
  templateUrl: './jokes-add.component.html',
  styleUrls: ['./jokes-add.component.scss']
})
export class JokesAddComponent  {

  categories = Categories;
  types = Types;
  flags = Flags;

  form: FormGroup;

  showDelivery = false;

  constructor(private fb: FormBuilder) {
    this.constructForm();
    this.watchTypeFormControl();
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

  submitForm() {
    const formValue = this.mapFlagsCheckboxValues();
    console.log(formValue);
  }

  mapFlagsCheckboxValues() {
    return Object.assign({}, this.form.value, {
      flags: this.form.value.flags.map((selected, i) => {
        return { title: this.flags[i].title,  selected };
      })
    });
  }

}
