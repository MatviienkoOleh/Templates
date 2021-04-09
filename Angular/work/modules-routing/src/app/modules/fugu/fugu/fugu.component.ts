import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fugu',
  templateUrl: './fugu.component.html',
  styleUrls: ['./fugu.component.css']
})
export class FuguComponent implements OnInit {

  filadelfia: string = 'assets/fugu/filadelfiya.500x500.png';

  constructor() { }

  ngOnInit(): void {
  }

}
