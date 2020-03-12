import { Injectable, Inject } from '@angular/core';
import { StockPrice } from './models/stockprices';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockpriceService {

  httpUrl='http://localhost:8003/stockprices/';

  constructor(private httpClient: HttpClient,@Inject(HttpClient) private ht) { }
  getAllStockPrices(): Observable<StockPrice[]> {
    return this.httpClient.get<StockPrice[]>(this.httpUrl);
  }

  saveStockPrice(stockPrice:StockPrice):Observable<StockPrice>{
    return this.ht.post(this.httpUrl, stockPrice);
  }
  deleteStockPrice(id:number):Observable<StockPrice>{
    return this.ht.delete(`http://localhost:8003/stockprices/${id}`);
  }
  updateStockPriceInfo(stockPrice :StockPrice):Observable<StockPrice>{
    return this.ht.put(`http://localhost:8003/stockprices` , stockPrice);
  }
  getStockPriceById(id :number):Observable<StockPrice>{
    return this.ht.get(`http://localhost:8003/stockprices/${id}`);
  }
  //updateStockSheet(formData:FormData): Observable<object>
 // {
//
 // }
}
