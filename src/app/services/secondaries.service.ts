import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SecondariesService {

  constructor(public net:HttpClient) { }

  getSecondaries() {
  	return this.net.get('https://ragnarokheralds.herokuapp.com/rhapi/v1/secondaries/list')
  }

  save(data) {
    let headers = new HttpHeaders().set('Authorization', localStorage.getItem('rhusr'))
  	return this.net.post('https://ragnarokheralds.herokuapp.com/rhapi/v1/secondaries/save', {data:data}, {headers:headers})
  }

  getSaved() {
    let headers = new HttpHeaders().set('Authorization', localStorage.getItem('rhusr'))
  	return this.net.get('https://ragnarokheralds.herokuapp.com/rhapi/v1/secondaries/getmine', {headers:headers})
  }
}
