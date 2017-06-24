import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';
import { Observable, Subject } from "rxjs";

@Injectable()
export class ProductsService {

  constructor(private httpService: Http) { }

  getProducts(keyword?: string): Observable<any> {

    return this.httpService.get("./assets/api/products.json")
      .map(res => res.json());
  }
}
