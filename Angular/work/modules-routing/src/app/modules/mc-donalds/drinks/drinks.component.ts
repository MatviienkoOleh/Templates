import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {
  cocaCola: string = "assets/mcdonalds/drinks/333973051-koka-kola-0-4l-600x600.jpg";
  sprite: string = "assets/mcdonalds/drinks/(mcdonalds)_sprajt_malenkij.jpeg";
  fanta: string = "assets/mcdonalds/drinks/411939992-fanta-0-4l-600x600.jpg";
  
  constructor() { }

  ngOnInit(): void {
  }

}
