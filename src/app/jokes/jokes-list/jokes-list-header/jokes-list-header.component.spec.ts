import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokesListHeaderComponent } from './jokes-list-header.component';

describe('JokesListHeaderComponent', () => {
  let component: JokesListHeaderComponent;
  let fixture: ComponentFixture<JokesListHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokesListHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokesListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
