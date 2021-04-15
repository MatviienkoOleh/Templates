import { Component, OnInit } from '@angular/core';
import { convertToParamMap, Router } from '@angular/router';
import { GetDataService } from 'src/app/services/get-data.service';

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

  imgOne: string = 'assets/home/background.jpg';
  imgTwo: string = 'assets/home/1490599919-125.jpg';
  imgThree: string = "assets/home/csm_IMG_7738_1_24490e9b1f.webp";
  imgFour: string = "assets/home/5e398d89bbcce-bogdan-zavod3455_1200.webp"

  ngOnInit():void {
  }

  constructor() {}

  menuOpen() {
    this.coverOne = false;
    this.coverThree = false;
    this.coverFour = false;
    this.coverFive = false;
    this.coverSix = false;
    this.coverSeven = false;
    this.coverTwo = true;
  }

  closeNavigationBar() {
    this.coverTwo = false;
    this.coverOne = true;
    this.coverThree = true;
    this.coverFour = true;
    this.coverFive = true;
    this.coverSix = true;
    this.coverSeven = true;
  }
}
