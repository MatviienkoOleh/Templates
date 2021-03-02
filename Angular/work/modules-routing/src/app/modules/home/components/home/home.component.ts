import { Component, OnInit } from '@angular/core';
import { convertToParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  coverOne: boolean = true; 
  coverTwo: boolean = false;

  ngOnInit():void {
  }

  constructor(private router: Router) {}

  menuOpen() {
    this.coverOne = false;
    this.coverTwo = true;
  }

  closeNavigationBar() {
    this.coverTwo = false;
    this.coverOne = true;
  }
}
