import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-udon',
  templateUrl: './udon.component.html',
  styleUrls: ['./udon.component.css']
})
export class UdonComponent implements OnInit {

  chickenUdon: string = 'assets/fugu/aed87abcfeb79bca52056ffb8b101815.jpg';
  beefUdon: string = 'assets/fugu/100336316-japanese-udon-noodles-with-beef-egg-green-onion-and-soup-in-a-brown-bowl.jpg';
  seeFoodUdon: string = 'assets/fugu/seafood-miso-noodle-soup-recipe-221.jpg';

  constructor() {}

  ngOnInit(): void {
  }

}
