import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit():void {
  }

  constructor(private router: Router) {}

  onNavigate(target: any) {
    if(target.value) {
      this.router.navigate([target.value]);
      return true;
    } else {
      return false;
    } 
  }
}
