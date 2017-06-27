import { FilterComponent } from './filter/filter.component';
import { QueryComponent } from './query/query.component';
import { Routes, RouterModule } from "@angular/router";
import { ForkjoinComponent } from './forkjoin/forkjoin.component';
import { SeqRequestComponent } from './seq-request/seq-request.component';

const routes: Routes = [
  {
    path: 'query', component: QueryComponent
  },
  {
    path: 'filter', component: FilterComponent
  },
  {
    path:'forkjoin' , component:ForkjoinComponent
  },
  {
    path:'seqreq' , component:SeqRequestComponent
  },
  {
    path: '', redirectTo: 'query', pathMatch: 'full'
  }
];

export const routing = RouterModule.forRoot(routes);
