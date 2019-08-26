import { Injectable} from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class Userservice{

    usersubject = new Subject<object>();
     user$=this.usersubject.asObservable();
     
     constructor()
     {}

     sendUser(user){
        this.usersubject.next(user);
     }

}
