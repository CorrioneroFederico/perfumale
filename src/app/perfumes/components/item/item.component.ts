import { Component, Input } from '@angular/core';

@Component({
  selector: 'perfumes-component-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {

  @Input()
  imagen!: string;

  get urlImagen(){
    return `assets/${this.imagen}.jpg`;
  }
}
