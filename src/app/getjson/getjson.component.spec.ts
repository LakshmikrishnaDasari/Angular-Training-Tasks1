import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetjsonComponent } from './getjson.component';

describe('GetjsonComponent', () => {
  let component: GetjsonComponent;
  let fixture: ComponentFixture<GetjsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetjsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetjsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
