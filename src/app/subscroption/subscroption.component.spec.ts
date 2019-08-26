import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscroptionComponent } from './subscroption.component';

describe('SubscroptionComponent', () => {
  let component: SubscroptionComponent;
  let fixture: ComponentFixture<SubscroptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscroptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscroptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
