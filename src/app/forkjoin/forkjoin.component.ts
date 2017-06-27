import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { CustomerService } from '../customer.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'cyl-forkjoin',
  templateUrl: './forkjoin.component.html',
  styleUrls: ['./forkjoin.component.css']
})
export class ForkjoinComponent implements OnInit {

  customers = [];
  products =[];
  constructor(private productService:ProductsService,private customerService:CustomerService) { }

  ngOnInit() {
    const customerSource =
      this.customerService.getCustomers();
    const productSource = this.productService.getProducts();

    Observable.forkJoin([customerSource,productSource])
    .subscribe(s =>{
      this.customers = s[0];
      this.products = s[1];
    });
  }

}
