import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lazy2listComponent } from './lazy2list.component';

describe('Lazy2listComponent', () => {
  let component: Lazy2listComponent;
  let fixture: ComponentFixture<Lazy2listComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lazy2listComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lazy2listComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
