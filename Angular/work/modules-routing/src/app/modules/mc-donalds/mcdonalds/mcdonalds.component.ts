import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mcdonalds',
  templateUrl: './mcdonalds.component.html',
  styleUrls: ['./mcdonalds.component.css']
})
export class McdonaldsComponent implements OnInit {
  menu: boolean = true;
  burgers: boolean = false;
  drinks: boolean = false;
  sweets: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  menusShow(): void {
    this.menu = true;
    this.burgers = false;
    this.drinks = false;
    this.sweets = false;
  }

  burgersShow(): void {
    this.menu = false;
    this.burgers = true;
    this.drinks = false;
    this.sweets = false;
  }

  drinksShow(): void {
    this.menu = false;
    this.burgers = false;
    this.drinks = true;
    this.sweets = false;
  }

  sweetsShow(): void {
    this.menu = false;
    this.burgers = false;
    this.drinks = false;
    this.sweets = true;
  }
}
