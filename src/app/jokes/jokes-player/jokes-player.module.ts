import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokesPlayerComponent } from './jokes-player.component';
import { JokesPlayerRoutingModule } from './jokes-player-routing.module';

@NgModule({
  declarations: [
    JokesPlayerComponent
  ],
  imports: [
    CommonModule,
    JokesPlayerRoutingModule
  ]
})

export class JokesPlayerModule { }
