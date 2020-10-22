import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokesListComponent } from './jokes-list.component';

const routes: Routes = [
  {
    path: '',
    component: JokesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class JokesListRoutingModule { }
