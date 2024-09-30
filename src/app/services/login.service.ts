import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  LoggedIn() {
    return true
  }

  Login(username: string, password: string) {
    return true;
  }
  
}
