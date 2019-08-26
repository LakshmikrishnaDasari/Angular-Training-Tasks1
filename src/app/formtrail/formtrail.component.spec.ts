import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormtrailComponent } from './formtrail.component';

describe('FormtrailComponent', () => {
  let component: FormtrailComponent;
  let fixture: ComponentFixture<FormtrailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormtrailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormtrailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
