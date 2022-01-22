import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  id = '';
  firstName = '';
  lastName = '';
  email = '';

  constructor() {}

  setUser(id: string, firstName: string, lastName: string, email: string) {
    localStorage.setItem('userLogged',id)
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }


  getUserId(){
    return localStorage.getItem('userLogged') || 'not logged in';
  }
}
