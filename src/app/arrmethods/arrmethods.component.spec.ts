import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrmethodsComponent } from './arrmethods.component';

describe('ArrmethodsComponent', () => {
  let component: ArrmethodsComponent;
  let fixture: ComponentFixture<ArrmethodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrmethodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrmethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
