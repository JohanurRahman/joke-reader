import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokesEditComponent } from './jokes-edit.component';
import { JokesEditService } from './jokes-edit.service';

const routes: Routes = [
  {
    path: '',
    component: JokesEditComponent,
    resolve: { joke: JokesEditService }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JokesEditRoutingModule { }
