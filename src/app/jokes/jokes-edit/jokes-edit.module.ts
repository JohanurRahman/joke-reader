import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokesEditComponent } from './jokes-edit.component';
import { JokesEditRoutingModule } from './jokes-edit-routing.module';
import {JokesFormModule} from '../jokes-form/jokes-form.module';

@NgModule({
  declarations: [
    JokesEditComponent
  ],
  imports: [
    CommonModule,
    JokesEditRoutingModule,
    JokesFormModule
  ]
})

export class JokesEditModule { }
