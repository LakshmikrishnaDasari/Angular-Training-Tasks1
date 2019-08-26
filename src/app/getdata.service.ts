import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Employee, Usermodal2 } from './get-service/format';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/throw';
import { throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { observable } from 'rxjs';
import { Url } from './get-service/url';
@Injectable({
  providedIn: 'root'
})
export class GetdataService {

// baseUrl = 'http://dummy.restapiexample.com/api/v1/';

constructor(private http: HttpClient, private hp: Url) { }
baseUrl = this.hp.base;

addUsers(user: Usermodal2) {
console.log(user, 'UserData');
return this.http.post(this.baseUrl + 'create', user);
}
getusers() {
return this.http.get<Employee[]>(this.baseUrl + 'employees')
.pipe(
  catchError(err =>
    {
    console.log('Getuser method Error',err);
    console.log('Some Error',err.message);
    document.write(JSON.stringify(err));
    return of(err);

    // return (this.errorHandler);

  })
);
}
deleteuser(id: number) {
return this.http.delete(this.baseUrl + 'delete' + '/' + id);
}
getUserById(id: string) {
return this.http.get<Employee>(this.baseUrl + 'employee' + '/' + id);
}
updateuser(user: Usermodal2,id:number) {
return this.http.put(this.baseUrl + 'update' + '/' + id, user);
}

errorHandler(erroe: HttpErrorResponse){
  if (erroe.error instanceof ErrorEvent) {
    console.log('URL Error', erroe.error.message);
    } else {
    console.log('Some Other Error', erroe);
    }
}
}



//   constructor(private http:HttpClient) { }

//   get1(){
//    return this.http.get('http://dummy.restapiexample.com/api/v1/employees');
//    }
