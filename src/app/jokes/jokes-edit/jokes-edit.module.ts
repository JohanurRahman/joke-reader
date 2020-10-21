import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokesEditComponent } from './jokes-edit.component';
import { JokesEditRoutingModule } from './jokes-edit-routing.module';

@NgModule({
  declarations: [
    JokesEditComponent
  ],
  imports: [
    CommonModule,
    JokesEditRoutingModule
  ]
})

export class JokesEditModule { }
