import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sweets',
  templateUrl: './sweets.component.html',
  styleUrls: ['./sweets.component.css']
})
export class SweetsComponent implements OnInit {
  chocolateShake: string = "assets/mcdonalds/sweets/hqdefault.jpg";
  vanillaShake: string = "assets/mcdonalds/sweets/t-mcdonalds-Vanilla-McCafe-Shake-Medium.jpg";
  kiddieCone: string = "assets/mcdonalds/sweets/t-mcdonalds-Kiddie-Cone.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
