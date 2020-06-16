import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GandhamComponent } from './gandham.component';

describe('GandhamComponent', () => {
  let component: GandhamComponent;
  let fixture: ComponentFixture<GandhamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GandhamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GandhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
