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

  ngOnInit():void {
  }

  constructor() {}

  menuOpen() {
    this.coverOne = false;
    this.coverThree = false;
    this.coverFour = false;
    this.coverTwo = true;
  }

  closeNavigationBar() {
    this.coverTwo = false;
    this.coverOne = true;
    this.coverThree = true;
    this.coverFour = true;
  }
}
