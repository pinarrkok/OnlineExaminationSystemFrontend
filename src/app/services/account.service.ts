import { Injectable } from '@angular/core';
import { User } from 'src/models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
// apiye bağlanıp token göndermek
  constructor() { }

  loggedIn = false;

  login(user: User): boolean {
    if(user.email == "abc" && user.password == "abc"){
      this.loggedIn = true;
      localStorage.setItem("isLogged", user.email);
      return true;
    }
    return false;
  }

  logout(){
    localStorage.removeItem("isLogged");
    this.loggedIn = false;
  }
}
