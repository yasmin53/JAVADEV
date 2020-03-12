import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {StockExchange } from './models/stockexchanges';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockexchangeService {

  httpUrl='http://localhost:8002/stockexchanges/';

  constructor(private httpClient: HttpClient,@Inject(HttpClient) private ht) { }
  getAllStockExchanges(): Observable<StockExchange[]> {
    return this.httpClient.get<StockExchange[]>(this.httpUrl);
  }

  saveStockExchange(stockExchange:StockExchange):Observable<StockExchange>{
    return this.ht.post(this.httpUrl, stockExchange);
  }
  deleteStockExchange(id:number):Observable<StockExchange>{
    return this.ht.delete(`http://localhost:8002/stockexchanges/${id}`);
  }
  updateStockExchangeInfo(stockExchange :StockExchange):Observable<StockExchange>{
    return this.ht.put(`http://localhost:8002/stockexchanges` , stockExchange);
  }
  getStockExchangeById(id :number):Observable<StockExchange>{
    return this.ht.get(`http://localhost:8002/stockexchanges/${id}`);
  }
}
