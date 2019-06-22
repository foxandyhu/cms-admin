import {of as observableOf, Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class UserService {

  private users = {
    nick: {name: 'Nick Jones', picture: 'assets/images/nick.png'},
  };

  getUsers(): Observable<any> {
    return observableOf(this.users);
  }

}
