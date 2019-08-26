import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { PracticespecComponent } from '../practicespec/practicespec.component';


describe('LoginComponent', () => {
  let component: LoginComponent;
 // let fixture: ComponentFixture<LoginComponent>;
  let service: PracticespecComponent;
 

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ LoginComponent ]
  //   })
  //   .compileComponents();
  // }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(LoginComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  beforeEach(() => { 
    service = new PracticespecComponent();
    component = new LoginComponent(service);
  });
  afterEach(() => { 
    localStorage.removeItem('token');
    service = null;
    component = null;
  });
 

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('canLogin returns false when the user is not authenticated', () => {
    expect(component.needLogin()).toBeTruthy();
  });

  it('canLogin returns false when the user is not authenticated', () => {
    localStorage.setItem('token', '12345'); 
    expect(component.needLogin()).toBeFalsy();
  });


  
  
});
