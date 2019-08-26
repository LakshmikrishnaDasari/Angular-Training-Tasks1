import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactfarrComponent } from './reactfarr.component';

describe('ReactfarrComponent', () => {
  let component: ReactfarrComponent;
  let fixture: ComponentFixture<ReactfarrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactfarrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactfarrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
