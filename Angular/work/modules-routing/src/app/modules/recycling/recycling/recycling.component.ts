import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recycling',
  templateUrl: './recycling.component.html',
  styleUrls: ['./recycling.component.css']
})
export class RecyclingComponent implements OnInit {
  plastic: string = "assets/home/ourservices/recycle/541026b8-9f89-4056-96b1-f0a645811a4d-623x370.jpg";
  cardboard: string = "assets/home/ourservices/recycle/index1.jpeg";
  paper: string = "assets/home/ourservices/recycle/index.jpeg";
  wood: string = "assets/home/ourservices/recycle/imagesa.jpeg";
  metal: string = "assets/home/ourservices/recycle/Depositphotos_40012335_xl-2015_optimized.jpg";
  other: string = "assets/home/ourservices/recycle/Real-Recycle-scaled-e1591990675496-900x512.jpeg";

  plasticBox: boolean = false;
  cardboardBox: boolean = false;
  paperBox: boolean = false;
  woodBox: boolean = false;
  metalBox: boolean = false;
  otherBox: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  plasticBoxShow():void {
    this.plasticBox = true;
  }
  plasticBoxHide():void {
    this.plasticBox = false;
  }

  cardboardBoxShow():void {
    this.cardboardBox = true;
  }
  cardboardBoxHide():void {
    this.cardboardBox = false;
  }

  paperBoxShow():void {
    this.paperBox = true;
  }
  paperBoxHide():void {
    this.paperBox = false;
  }

  woodBoxShow(): void {
    this.woodBox = true;
  }
  woodBoxHide(): void {
    this.woodBox = false;
  }

  metalBoxShow(): void {
    this.metalBox = true;
  }
  metalBoxHide(): void {
    this.metalBox = false;
  }

  otherBoxShow(): void {
    this.otherBox = true;
  }
  otherBoxHide(): void {
    this.otherBox = false;
  }
}
