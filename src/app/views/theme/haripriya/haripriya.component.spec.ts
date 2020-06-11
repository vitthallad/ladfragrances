import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HaripriyaComponent } from './haripriya.component';

describe('HaripriyaComponent', () => {
  let component: HaripriyaComponent;
  let fixture: ComponentFixture<HaripriyaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaripriyaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaripriyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
