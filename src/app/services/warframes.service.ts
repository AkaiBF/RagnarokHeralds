import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WarframesService {

  constructor(public net:HttpClient) { }

  getWarframes() {
  	return this.net.get('https://ragnarokheralds.herokuapp.com/rhapi/v1/warframes/list')
  }

  save(data) {
    let headers = new HttpHeaders().set('Authorization', localStorage.getItem('rhusr'))
  	return this.net.post('https://ragnarokheralds.herokuapp.com/rhapi/v1/warframes/save', {data:data}, {headers:headers})
  }

  getSaved() {
    let headers = new HttpHeaders().set('Authorization', localStorage.getItem('rhusr'))
  	return this.net.get('https://ragnarokheralds.herokuapp.com/rhapi/v1/warframes/getmine', {headers:headers})
  }
}
