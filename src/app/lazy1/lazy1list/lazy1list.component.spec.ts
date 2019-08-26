import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lazy1listComponent } from './lazy1list.component';

describe('Lazy1listComponent', () => {
  let component: Lazy1listComponent;
  let fixture: ComponentFixture<Lazy1listComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lazy1listComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lazy1listComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
