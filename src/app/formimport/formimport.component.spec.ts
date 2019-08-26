import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormimportComponent } from './formimport.component';

describe('FormimportComponent', () => {
  let component: FormimportComponent;
  let fixture: ComponentFixture<FormimportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormimportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormimportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
