import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  public teachermessageSource=new Subject<any>();
  teachermsg$=this.teachermessageSource.asObservable();

  constructor() { }

  sendmessage(message :string){
    this.teachermessageSource.next(message);

  }
}


