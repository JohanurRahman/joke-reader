import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokesPlayerComponent } from './jokes-player.component';
import { JokesPlayerRoutingModule } from './jokes-player-routing.module';
import {MatButtonModule, MatCardModule} from '@angular/material';

@NgModule({
  declarations: [
    JokesPlayerComponent
  ],
  imports: [
    CommonModule,
    JokesPlayerRoutingModule,
    MatCardModule,
    MatButtonModule
  ]
})

export class JokesPlayerModule { }
