import { Injectable } from '@angular/core';
import { User } from './user';


@Injectable()
export class AuthService {

  user: User;

  constructor() { }

  setUser(user: User) {
    this.user = user;
  }


  getCurrentUser() {
    if (this.user === undefined) {
      console.log('No user');
    } else {
      return this.user;
    }
  }

  logOut () {
    this.user = undefined;
  }

}
