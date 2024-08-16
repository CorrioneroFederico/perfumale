import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  imagenes: string[] = [
    "img1",
    "img2",
    "img3",
    "img4",
    "img5",
   ]
}
