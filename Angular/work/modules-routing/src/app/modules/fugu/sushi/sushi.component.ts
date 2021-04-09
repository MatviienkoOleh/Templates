import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sushi',
  templateUrl: './sushi.component.html',
  styleUrls: ['./sushi.component.css']
})
export class SushiComponent implements OnInit {

  salmon: string = "assets/fugu/salmon-nigiri-sushi_17766-11.jpg";
  tuna: string = "assets/fugu/tuna-nigiri.jpg";
  shrimp: string = "assets/fugu/суши-с-креветкой.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
