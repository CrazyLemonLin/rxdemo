import { routing } from './routing-config';
import { ProductsService } from './products.service';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component';
import { QueryComponent } from './query/query.component';
import { ForkjoinComponent } from './forkjoin/forkjoin.component';
import { CustomerService } from './customer.service';
import { SeqRequestComponent } from './seq-request/seq-request.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    QueryComponent,
    ForkjoinComponent,
    SeqRequestComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    FormsModule
  ],
  providers: [ProductsService, CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
