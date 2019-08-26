import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChainParameterpipesComponent } from './chain-parameterpipes.component';

describe('ChainParameterpipesComponent', () => {
  let component: ChainParameterpipesComponent;
  let fixture: ComponentFixture<ChainParameterpipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChainParameterpipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChainParameterpipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
