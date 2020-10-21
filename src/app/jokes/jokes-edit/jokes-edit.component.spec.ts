import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokesEditComponent } from './jokes-edit.component';

describe('JokesEditComponent', () => {
  let component: JokesEditComponent;
  let fixture: ComponentFixture<JokesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
