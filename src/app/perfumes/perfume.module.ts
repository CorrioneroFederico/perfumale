import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfumeRoutingModule } from './perfume-routing.module';
import { PerfumeComponent } from './pages/perfume/perfume.component';
import { ListComponent } from './pages/list/list.component';
import { NewComponent } from './pages/new/new.component';
import { SearchComponent } from './pages/search/search.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { SharedModule } from '../shared/shared.module';
import { ItemComponent } from './components/item/item.component';


@NgModule({
  declarations: [
    PerfumeComponent,
    ListComponent,
    NewComponent,
    SearchComponent,
    LayoutComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    PerfumeRoutingModule,
    SharedModule
  ]
})
export class PerfumeModule { }
