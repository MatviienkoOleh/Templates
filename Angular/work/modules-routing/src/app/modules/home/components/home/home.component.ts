import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  coverOne: boolean = true; 
  coverTwo: boolean = false;
  coverThree: boolean = true;
  coverFour: boolean = true;
  coverFive: boolean = true;
  coverSix: boolean = true;
  coverSeven: boolean = true;
  slider: boolean = true;

  imgOne: string = 'assets/home/background.jpg';
  imgTwo: string = 'assets/home/1490599919-125.jpg';
  imgThree: string = 'assets/home/ddbdd009c86fa3c6af8beb9cd73c87df.jpg';
  imgFour: string = 'assets/home/Bogdan_Plant_02.jpg';

  ngOnInit():void {
  }

  constructor() {}

  menuOpen() {
    this.slider = false;
    this.coverOne = false;
    this.coverThree = false;
    this.coverFour = false;
    this.coverFive = false;
    this.coverSix = false;
    this.coverSeven = false;
    this.coverTwo = true;
  }

  closeNavigationBar() {
    this.slider = true;
    this.coverTwo = false;
    this.coverOne = true;
    this.coverThree = true;
    this.coverFour = true;
    this.coverFive = true;
    this.coverSix = true;
    this.coverSeven = true;
  }
}
