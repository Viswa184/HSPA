import { Component } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrl: './property-card.component.css'
}) // emaindho telvadhu
export class PropertyCardComponent {

  Property:any ={
    "Id":1,
    "Name":"Birla House",
    "Type":"House",
    "Price":12000
  }


}
