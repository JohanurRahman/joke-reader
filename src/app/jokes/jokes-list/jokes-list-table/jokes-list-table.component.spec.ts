import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokesListTableComponent } from './jokes-list-table.component';

describe('JokesListTableComponent', () => {
  let component: JokesListTableComponent;
  let fixture: ComponentFixture<JokesListTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokesListTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokesListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
