import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticespecComponent } from './practicespec.component';
import { ExpectedConditions } from 'protractor';

describe('PracticespecComponent', () => {
  let component: PracticespecComponent;
  let fixture: ComponentFixture<PracticespecComponent>;
  let expected="";
   

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticespecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticespecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expected='Hii Welcome To Specs';
    component=new PracticespecComponent();
  });
  afterEach(() => {
    expected = '';
     component = null;
     localStorage.removeItem('token');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  xit('spec for welcome()', ()=>{
    expect(component.welcome()).toEqual(expected);
  });


  it('should return true from isAuthenticated when there is a token', () => { 
    localStorage.setItem('token','SRI'); 
    expect(component.isAuthenticated()).toBeTruthy(); 
  });

  it('should return false from isAuthenticated when there is no token', () => {
    expect(component.isAuthenticated()).toBeFalsy();
  });
});













// describe('welcome',()=>{
//   fit('spec for welcome()', ()=>{
//     expect(practicespec.welcome()).toEqual('Hii Welcome To Specs');
//   });
