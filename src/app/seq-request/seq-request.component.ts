import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'cyl-seq-request',
  templateUrl: './seq-request.component.html',
  styleUrls: ['./seq-request.component.css']
})
export class SeqRequestComponent implements OnInit {
  result: any;
  constructor(private _customerService: CustomerService, private _productService: ProductsService) { }

  ngOnInit() {
    const customerSource = this._customerService.getOneCustomer();
    const productSource = this._productService.getOneProduct();

    const source =
      customerSource
        .switchMap(customer => productSource, (customer, product) => {
          console.log(`${customer.name} 買了 ${product.name}`);
            return `${customer.name} 買了 ${product.name}`;
        });

    source.subscribe(s =>{
      console.log(s);
      this.result = s;
    });
  }

}
