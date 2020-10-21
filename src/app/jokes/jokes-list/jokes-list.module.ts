import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokesListComponent } from './jokes-list.component';
import { JokesListRoutingModule } from './jokes-list-routing.module';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    JokesListComponent
  ],
  imports: [
    CommonModule,
    JokesListRoutingModule,
    MatTableModule
  ]
})

export class JokesListModule { }
