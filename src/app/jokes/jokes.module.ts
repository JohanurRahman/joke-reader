import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { JokesRoutingModule } from './jokes-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    JokesRoutingModule
  ]
})

export class JokesModule { }
