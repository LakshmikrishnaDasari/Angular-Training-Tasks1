import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildForOutputComponent } from './child-for-output.component';

describe('ChildForOutputComponent', () => {
  let component: ChildForOutputComponent;
  let fixture: ComponentFixture<ChildForOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildForOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildForOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
