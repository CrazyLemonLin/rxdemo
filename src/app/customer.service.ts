import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CustomerService {

  constructor(private http: Http) { }

  getCustomers():Observable<any[]> {
    const source = this.http.get('./assets/api/customers.json')
      .map(res => res.json());

    return source;
  }
}
