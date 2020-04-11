import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeleeService {

  constructor(public net:HttpClient) { }

	getMelees() {
  	return this.net.get('https://ragnarokheralds.herokuapp.com/rhapi/v1/melees/list')
  }

  save(data) {
    let headers = new HttpHeaders().set('Authorization', localStorage.getItem('rhusr'))
  	return this.net.post('https://ragnarokheralds.herokuapp.com/rhapi/v1/melees/save', {data:data}, {headers:headers})
  }

  getSaved() {
    let headers = new HttpHeaders().set('Authorization', localStorage.getItem('rhusr'))
  	return this.net.get('https://ragnarokheralds.herokuapp.com/rhapi/v1/melees/getmine', {headers:headers})
  }
}
