import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokesListComponent } from './jokes-list.component';
import { JokesListRoutingModule } from './jokes-list-routing.module';

@NgModule({
  declarations: [
    JokesListComponent
  ],
  imports: [
    CommonModule,
    JokesListRoutingModule
  ]
})

export class JokesListModule { }
