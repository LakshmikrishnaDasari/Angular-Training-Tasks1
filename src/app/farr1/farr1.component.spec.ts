import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Farr1Component } from './farr1.component';

describe('Farr1Component', () => {
  let component: Farr1Component;
  let fixture: ComponentFixture<Farr1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Farr1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Farr1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
