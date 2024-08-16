import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './pages/layout/layout.component';
import { NewComponent } from './pages/new/new.component';
import { SearchComponent } from './pages/search/search.component';
import { ListComponent } from './pages/list/list.component';
import { PerfumeComponent } from './pages/perfume/perfume.component';

const routes: Routes = [
  { path: '', component: LayoutComponent,
    children: [
      { path: 'new-perfume', component: NewComponent },
      { path: 'search', component: SearchComponent },
      { path: 'list', component: ListComponent },
      { path: 'edit/:id', component: NewComponent },
      { path: ':id', component: PerfumeComponent },
      { path: '**', redirectTo: 'list' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfumeRoutingModule { }
