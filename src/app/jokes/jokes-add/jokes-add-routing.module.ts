import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokesAddComponent } from './jokes-add.component';

const routes: Routes = [
  {
    path: '',
    component: JokesAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class JokesAddRoutingModule { }
