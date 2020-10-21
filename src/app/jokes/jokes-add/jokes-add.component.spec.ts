import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokesAddComponent } from './jokes-add.component';

describe('JokesAddComponent', () => {
  let component: JokesAddComponent;
  let fixture: ComponentFixture<JokesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
