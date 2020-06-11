import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiaQueenComponent } from './india-queen.component';

describe('IndiaQueenComponent', () => {
  let component: IndiaQueenComponent;
  let fixture: ComponentFixture<IndiaQueenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndiaQueenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiaQueenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
