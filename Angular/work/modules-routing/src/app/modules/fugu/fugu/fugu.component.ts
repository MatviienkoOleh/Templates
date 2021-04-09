import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fugu',
  templateUrl: './fugu.component.html',
  styleUrls: ['./fugu.component.css']
})
export class FuguComponent implements OnInit {
  rolls: boolean = true;
  udon: boolean = false;
  sushi: boolean = false;
  miso: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  rollsShow(): void {
    this.miso = false;
    this.udon = false;
    this.sushi = false;
    this.rolls = true;
  }

  udonShow(): void {
    this.miso = false;
    this.rolls = false;
    this.sushi = false;
    this.udon = true;
  }

  sushiShow():void {
    this.miso = false;
    this.rolls = false;
    this.udon = false; 
    this.sushi = true;
  }

  misoShow():void {
    this.rolls = false;
    this.sushi = false;
    this.udon = false;
    this.miso = true;
  }
}
