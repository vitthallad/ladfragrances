import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LadaboutusComponent } from './ladaboutus.component';

describe('LadaboutusComponent', () => {
  let component: LadaboutusComponent;
  let fixture: ComponentFixture<LadaboutusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LadaboutusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LadaboutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
