import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public net:HttpClient) { }

  login(user, pwd) {
  	return this.net.post('https://ragnarokheralds.herokuapp.com/rhapi/v1/users/login', {user:user, password:pwd})
  }

  register(user, pwd) {
  	return this.net.post('https://ragnarokheralds.herokuapp.com/rhapi/v1/users/register', {user:user, password:pwd})
  }
}
