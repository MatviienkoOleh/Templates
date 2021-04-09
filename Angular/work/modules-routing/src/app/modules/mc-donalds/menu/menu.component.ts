import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  bigTasty: string = 'assets/mcdonalds/menu/584171543-big-tejsti-dgunior-bolshoj-makkombo-600x600-1.jpg';
  bigMack: string = 'assets/mcdonalds/menu/McDonalds,_Big_Mac_Meal.jpg';
  doubleChisburger: string = 'assets/mcdonalds/menu/17-doublecheese-menu-dostavka2021jpg.png';

  constructor() { }

  ngOnInit(): void {
  }

}
