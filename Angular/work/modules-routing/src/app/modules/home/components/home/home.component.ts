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
  backImage: boolean = true;

  ngOnInit():void {
  }

  constructor() {}

  menuOpen() {
    this.coverOne = false;
    this.coverTwo = true;
    this.backImage = false;
  }

  closeNavigationBar() {
    this.coverTwo = false;
    this.coverOne = true;
    this.backImage = true;
  }
}
