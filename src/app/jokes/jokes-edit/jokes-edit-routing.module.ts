import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokesEditComponent } from './jokes-edit.component';

const routes: Routes = [
  {
    path: '',
    component: JokesEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JokesEditRoutingModule { }
