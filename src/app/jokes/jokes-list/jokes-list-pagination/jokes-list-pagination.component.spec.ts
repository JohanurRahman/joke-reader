import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokesListPaginationComponent } from './jokes-list-pagination.component';

describe('JokesListPaginationComponent', () => {
  let component: JokesListPaginationComponent;
  let fixture: ComponentFixture<JokesListPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokesListPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokesListPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
