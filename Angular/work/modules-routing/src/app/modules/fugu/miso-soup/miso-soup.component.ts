import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-miso-soup',
  templateUrl: './miso-soup.component.html',
  styleUrls: ['./miso-soup.component.css']
})
export class MisoSoupComponent implements OnInit {

  tonjiru: string = 'assets/fugu/204.jpg';
  assari: string = 'assets/fugu/Clam-Miso-Soup-0110-I-1-500x375.jpg';
  vegan: string = 'assets/fugu/basic-miso-soup-3377886_09-5b3f7fb6c9e77c00378bf68f.jpg';


  constructor() { }

  ngOnInit(): void {
  }

}
