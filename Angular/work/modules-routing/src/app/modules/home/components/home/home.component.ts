import { Component, OnInit } from '@angular/core';
import { convertToParamMap, Router } from '@angular/router';

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

  menuOpen() {
    const cover: any = document.getElementById('cover');
    const coverTwo: any = document.getElementById('cover_two');

    cover.style.display = "none";
    coverTwo.style.display = "flex"
  }

  closeNavigationBar() {
    const cover: any = document.getElementById('cover');
    const coverTwo: any = document.getElementById('cover_two');

    coverTwo.style.display = "none";
    cover.style.display = "block";
  }
}
