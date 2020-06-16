import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KumkumComponent } from './kumkum.component';

describe('KumkumComponent', () => {
  let component: KumkumComponent;
  let fixture: ComponentFixture<KumkumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KumkumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KumkumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
