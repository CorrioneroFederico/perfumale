import { NgModule } from '@angular/core';

import { Error404Component } from './pages/error404/error404.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    Error404Component,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    NavbarComponent,
  ],
  imports:[],
  exports:[
    Error404Component,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    NavbarComponent,
  ]
})
export class SharedModule { }
