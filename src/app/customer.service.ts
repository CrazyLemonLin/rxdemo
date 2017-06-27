import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CustomerService {

  apiUrl = './assets/api/customers.json';
  constructor(private http: Http) { }

  getCustomers(): Observable<any[]> {
    const source = this.http.get(this.apiUrl)
      .map(res => res.json());

    return source;
  }

  getOneCustomer(): Observable<any> {
    return this.getCustomers()
      .switchMap(s => s)
      .first();
  }
}
