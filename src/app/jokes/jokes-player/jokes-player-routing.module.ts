import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokesPlayerComponent } from './jokes-player.component';

const routes: Routes = [
  {
    path: '',
    component: JokesPlayerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class JokesPlayerRoutingModule { }
