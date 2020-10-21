import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokesAddComponent } from './jokes-add.component';
import { JokesAddRoutingModule } from './jokes-add-routing.module';

@NgModule({
  declarations: [ JokesAddComponent ],
  imports: [
    CommonModule,
    JokesAddRoutingModule
  ]
})

export class JokesAddModule { }
