import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './shared/pages/error404/error404.component';
import { PerfumeComponent } from './perfumes/pages/perfume/perfume.component';

const routes: Routes = [
  // {
  //   path: 'auth',
  //   loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  // },
  {
    path: 'perfumes',
    loadChildren: () => import('./perfumes/perfume.module').then(m => m.PerfumeModule)
  },
  { path: '', redirectTo: 'perfumes', pathMatch: 'full' },
  { path: '404', component: Error404Component },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
