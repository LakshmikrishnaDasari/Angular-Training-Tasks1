import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProxyCrudComponent } from './proxy-crud.component';

describe('ProxyCrudComponent', () => {
  let component: ProxyCrudComponent;
  let fixture: ComponentFixture<ProxyCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProxyCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProxyCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
