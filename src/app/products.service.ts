import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';
import { Observable, Subject } from "rxjs";

@Injectable()
export class ProductsService {
  apiUrl = './assets/api/products.json';
  constructor(private httpService: Http) { }

  getProducts(): Observable<any[]> {
    const source = this.httpService.get(this.apiUrl)
      .map(res => res.json());
    return source;
  }

  filterProducts(keyword?: string) {
    return this.getProducts()
      .flatMap(s => s)
      .filter(p => {
        if (!keyword) return true;
        return p['name'].includes(keyword);
      })
      .toArray();
  }

  getOneProduct(): Observable<any> {
    return this.getProducts()
      .switchMap(s => s)
      .first();
  }
}
