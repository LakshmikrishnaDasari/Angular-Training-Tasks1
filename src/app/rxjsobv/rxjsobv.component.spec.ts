import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsobvComponent } from './rxjsobv.component';

describe('RxjsobvComponent', () => {
  let component: RxjsobvComponent;
  let fixture: ComponentFixture<RxjsobvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsobvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsobvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
