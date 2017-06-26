import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CustomerService {

  constructor(private http: Http) { }

  getCustomers() {
    const source = this.http.get('./assets/api/customers.json')
      .map(res => res.json());

    return source;
  }
}
