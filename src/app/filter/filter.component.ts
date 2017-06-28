import { Subject } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cyl-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  products$: Observable<any[]>;

  keyword = '';
  private filterStream = new Subject<string>();

  constructor(private _productService: ProductsService) { }

  ngOnInit() {
    this.products$ =
      this.filterStream
        .debounceTime(700)
        .filter(keyword => keyword.length >= 2 || keyword.length === 0)
        .distinctUntilChanged()
        .startWith('')
        .flatMap(keyword => {
          return this._productService.filterProducts(keyword);
        });
  }

  onKeywordChange(keyword: string) {
    this.keyword = keyword;
    this.filterStream.next(keyword);
  }
}
