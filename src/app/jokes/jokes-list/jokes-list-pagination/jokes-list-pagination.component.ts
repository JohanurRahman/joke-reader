import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap';

@Component({
  selector: 'app-jokes-list-pagination',
  templateUrl: './jokes-list-pagination.component.html',
  styleUrls: ['./jokes-list-pagination.component.scss']
})

export class JokesListPaginationComponent  {

  @Input() totalItems: number;
  @Input() itemsPerPage: number;

  @Output() currentPage: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  pageChanged(event: PageChangedEvent) {
    this.currentPage.emit(event.page);
  }

}
