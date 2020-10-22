import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokesListComponent } from './jokes-list.component';
import { JokesListRoutingModule } from './jokes-list-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { PaginationModule } from 'ngx-bootstrap';
import { LimitStringModule } from '../../pipes/limit-string/limit-string.module';
import { JokesListTableComponent } from './jokes-list-table/jokes-list-table.component';
import { JokesListHeaderComponent } from './jokes-list-header/jokes-list-header.component';
import { JokesListPaginationComponent } from './jokes-list-pagination/jokes-list-pagination.component';

@NgModule({
  declarations: [
    JokesListComponent,
    JokesListTableComponent,
    JokesListHeaderComponent,
    JokesListPaginationComponent
  ],
  imports: [
    CommonModule,
    JokesListRoutingModule,
    MatTableModule,
    MatButtonModule,
    PaginationModule.forRoot(),
    LimitStringModule
  ]
})

export class JokesListModule { }
