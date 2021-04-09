import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rolls',
  templateUrl: './rolls.component.html',
  styleUrls: ['./rolls.component.css']
})
export class RollsComponent implements OnInit {

  filadelfia: string = 'assets/fugu/filadelfiya.500x500.png';
  california: string = 'assets/fugu/Roll-kaliforniya.jpg';
  spiderRoll: string = 'assets/fugu/image10-2.jpeg';

  constructor() { }

  ngOnInit(): void {
  }

}
