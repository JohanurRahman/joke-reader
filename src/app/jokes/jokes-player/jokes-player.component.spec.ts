import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokesPlayerComponent } from './jokes-player.component';

describe('JokesPlayerComponent', () => {
  let component: JokesPlayerComponent;
  let fixture: ComponentFixture<JokesPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokesPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokesPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
