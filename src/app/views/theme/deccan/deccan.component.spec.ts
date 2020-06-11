import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeccanComponent } from './deccan.component';

describe('DeccanComponent', () => {
  let component: DeccanComponent;
  let fixture: ComponentFixture<DeccanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeccanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeccanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
