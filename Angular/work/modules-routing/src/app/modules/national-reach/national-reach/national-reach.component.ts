import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-national-reach',
  templateUrl: './national-reach.component.html',
  styleUrls: ['./national-reach.component.css']
})
export class NationalReachComponent implements OnInit {
  coverOne: boolean = true;
  menuPage: boolean = false;
  coverThree: boolean = true;
  footer: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  menuOpen(): void {
    this.footer = false;
    this.coverOne = false;
    this.coverThree = false;
    this.menuPage = true;
  }
  
  closeNavigationBar() {
    this.footer = true;
    this.coverOne = true;
    this.coverThree = true;
    this.menuPage = false;
  }
}
