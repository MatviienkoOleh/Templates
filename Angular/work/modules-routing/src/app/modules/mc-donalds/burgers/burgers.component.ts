import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-burgers',
  templateUrl: './burgers.component.html',
  styleUrls: ['./burgers.component.css']
})
export class BurgersComponent implements OnInit {
  bigTasty: string = 'assets/mcdonalds/burgers/nintchdbpict000317625990.jpg';
  doubleGamburger: string = 'assets/mcdonalds/burgers/images.jpeg';
  doubleChisburger: string = 'assets/mcdonalds/burgers/2acf8-6.png';

  constructor() { }

  ngOnInit(): void {
  }

}
