import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cyl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  products: any[];

  constructor(private http: Http) {

  }

  ngOnInit(): void {
    this.http.get("./assets/api/products.json")
      .map(res => res.json())
      .subscribe(products => this.products = products);
  }
}
