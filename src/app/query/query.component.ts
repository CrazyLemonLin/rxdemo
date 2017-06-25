import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cyl-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {
  products: any;

  constructor(private http: Http) {

  }

  ngOnInit(): void {
    this.http.get("./assets/api/products.json")
      .map(res => res.json())
      .subscribe(products => this.products = products);
  }

}
