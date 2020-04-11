import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrimariesService {

  constructor(public net:HttpClient) { }

  getPrimaries() {
  	return this.net.get('https://ragnarokheralds.herokuapp.com/rhapi/v1/primaries/list')
  }

  save(data) {
    let headers = new HttpHeaders().set('Authorization', localStorage.getItem('rhusr'))
  	return this.net.post('https://ragnarokheralds.herokuapp.com/rhapi/v1/primaries/save', {data:data}, {headers:headers})
  }

  getSaved() {
    let headers = new HttpHeaders().set('Authorization', localStorage.getItem('rhusr'))
  	return this.net.get('https://ragnarokheralds.herokuapp.com/rhapi/v1/primaries/getmine', {headers:headers})
  }
}
