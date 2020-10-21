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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class JokesRoutingModule { }
