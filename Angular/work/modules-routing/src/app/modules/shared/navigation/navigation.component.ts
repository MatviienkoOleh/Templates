import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  coverOne:boolean = true;
  coverTwo:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  menuOpen(): void {
    this.coverOne = false;
    this.coverTwo = true;
  }

  closeNavigationBar(): void {
    this.coverOne = true;
    this.coverTwo = false;
  }
}
