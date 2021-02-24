import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  myimageOne: string = "assets/_yazykovoy_skandal_480x270.jpg"
  myimageTwo: string = "assets/vegan-plant-based-burger-king-1068x6011-1.jpg"
  myimageThree: string = "assets/1484672122587e4c7a5d5b3_1e0c9c11def481b66912d3cc57e8f683.jpg"
  myimageFour: string = "assets/img_for_fb_1200x630.jpg"
  myimageFive: string = "assets/orange-pizza-sushi-wok.jpg"
  myimageSix: string = "assets/unnamed (1).jpg"
  myimageO: string = "assets/51c7d329-51d7-43ce-9b5e-146414c6380c-83130af38ec305b65ea59005cd993a18bb01c416.jpeg"
  myimageT: string = "assets/fugu_f.jpg"
  myimageR: string = "assets/241586.png"
}
