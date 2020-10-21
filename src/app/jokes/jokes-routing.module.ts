import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: './jokes-list/jokes-list.module#JokesListModule',
      },
      {
        path: 'add',
        loadChildren: './jokes-add/jokes-add.module#JokesAddModule'
      },
      {
        path: ':jokes_id/edit',
        loadChildren: './jokes-edit/jokes-edit.module#JokesEditModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class JokesRoutingModule { }
