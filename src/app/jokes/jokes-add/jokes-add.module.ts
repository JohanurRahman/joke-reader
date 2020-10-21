import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokesAddComponent } from './jokes-add.component';
import { JokesAddRoutingModule } from './jokes-add-routing.module';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatSelectModule} from '@angular/material';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [ JokesAddComponent ],
  imports: [
    CommonModule,
    JokesAddRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatCheckboxModule
  ]
})

export class JokesAddModule { }
