import { Component, Input } from '@angular/core';
import { Joke } from '../../i-jokes';

@Component({
  selector: 'app-jokes-list-table',
  templateUrl: './jokes-list-table.component.html',
  styleUrls: ['./jokes-list-table.component.scss']
})

export class JokesListTableComponent  {

  @Input() dataSource: Joke[];

  displayedColumns: string[] = ['joke', 'flags', 'actions'];

  constructor() { }

}
