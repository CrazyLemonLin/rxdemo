import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'cyl-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {
  products: any;

  constructor(private _productService:ProductsService) {

  }

  ngOnInit(): void {
    this.products = this._productService.getProducts();
  }

}
