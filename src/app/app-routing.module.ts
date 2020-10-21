import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'jokes',
    loadChildren: './jokes/jokes.module#JokesModule',
  },
  {
    path: '**',
    redirectTo: 'jokes'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
