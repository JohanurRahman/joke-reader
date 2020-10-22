import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokesPlayerComponent } from './jokes-player.component';
import {JokesEditService} from '../jokes-edit/jokes-edit.service';

const routes: Routes = [
  {
    path: '',
    component: JokesPlayerComponent,
    resolve: { joke: JokesEditService }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class JokesPlayerRoutingModule { }
