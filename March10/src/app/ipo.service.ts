import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPO } from './models/ipos';

@Injectable({
  providedIn: 'root'
})
export class IpoService {
  httpUrl='http://localhost:8005/ipos/';

  constructor(private httpClient: HttpClient,@Inject(HttpClient) private ht) { }
  getAllIPOS(): Observable<IPO[]> {
    return this.httpClient.get<IPO[]>(this.httpUrl);
  }

  saveIPO(ipo:IPO):Observable<IPO>{
    return this.ht.post(this.httpUrl, ipo);
  }
  deleteIPO(id:number):Observable<IPO>{
    return this.ht.delete(`http://localhost:8005/ipos/${id}`);
  }
  updateIPOInfo(ipo :IPO):Observable<IPO>{
    return this.ht.put(`http://localhost:8005/ipos` , ipo);
  }
  getIPOById(id :number):Observable<IPO>{
    return this.ht.get(`http://localhost:8005/ipos/${id}`);
  }
}


