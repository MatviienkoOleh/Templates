import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fugu',
  templateUrl: './fugu.component.html',
  styleUrls: ['./fugu.component.css']
})
export class FuguComponent implements OnInit {

  filadelfia: string = 'assets/fugu/filadelfiya.500x500.png';
  california: string = 'assets/fugu/Roll-kaliforniya.jpg'


  rolls: boolean = true;
  udon: boolean = false;
  sushi: boolean = false;
  miso: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  rollsShow(): void {
    this.udon = false;
    this.sushi = false;
    this.rolls = true;
  }

  udonShow(): void {
    this.rolls = false;
    this.sushi = false;
    this.udon = true;
  }

  sushiShow():void {
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
