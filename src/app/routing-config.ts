import { FilterComponent } from './filter/filter.component';
import { QueryComponent } from './query/query.component';
import { Routes, RouterModule } from "@angular/router";
import { ForkjoinComponent } from './forkjoin/forkjoin.component';

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
    path: '', redirectTo: 'query', pathMatch: 'full'
  }
];

export const routing = RouterModule.forRoot(routes);
