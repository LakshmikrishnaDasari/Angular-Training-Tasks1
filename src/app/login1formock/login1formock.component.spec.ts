import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Login1formockComponent } from './login1formock.component';
import { PracticespecComponent } from '../practicespec/practicespec.component';


class MockAuthService {
  authenticated = false;

  isAuthenticated() {
    return this.authenticated;
  }
}

fdescribe('Login1formockComponent', () => {
  let component: Login1formockComponent;
  let fixture: ComponentFixture<Login1formockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations : [Login1formockComponent],
      providers: [{ provide: PracticespecComponent, useClass: MockAuthService }]
    })
      .compileComponents();

      fixture = TestBed.createComponent(Login1formockComponent);
      component = fixture.componentInstance;
  }));
  afterEach(() => {
   
  });


  it('canLogin returns false when the user is not authenticated', () => {
    expect(component.needLogin()).toBeTruthy();
  });

  it('canLogin returns false when the user is not authenticated', () => {
    // component.authenticated 
    // expect(component.needLogin()).toBeFalsy();
  });
});
