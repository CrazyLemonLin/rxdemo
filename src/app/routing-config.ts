import { FilterComponent } from './filter/filter.component';
import { QueryComponent } from './query/query.component';
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: 'query', component: QueryComponent
  },
  {
    path: 'filter', component: FilterComponent
  },
  {
    path: '', redirectTo: 'query', pathMatch: 'full'
  }
];

export const routing = RouterModule.forRoot(routes);
