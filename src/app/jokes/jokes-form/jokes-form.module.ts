import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokesFormComponent } from './jokes-form.component';
import {MatCardModule} from '@angular/material/card';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatSnackBarModule
} from '@angular/material';
import { ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [JokesFormComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [ JokesFormComponent ]
})
export class JokesFormModule { }
