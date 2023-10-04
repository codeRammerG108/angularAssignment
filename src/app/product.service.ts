import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  product: any = [];  
  constructor(private http: HttpClient) { }

  getProducts(): Observable <any> {
    return this.http.get<any[]>('https://dummyjson.com/products');
  }
}
