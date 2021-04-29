import { ViewportScroller } from '@angular/common';
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

  mainDiv:boolean = true;
  footer: boolean = true;
  plasticBox: boolean = false;
  cardboardBox: boolean = false;
  paperBox: boolean = false;
  woodBox: boolean = false;
  metalBox: boolean = false;
  otherBox: boolean = false;

  constructor(private viewportscroller: ViewportScroller) { }

  ngOnInit(): void {
    this.viewportscroller.scrollToPosition([0,0])
  }

  plasticBoxShow():void {
    this.plasticBox = true;
    this.mainDiv = false;
    this.footer = false;
  }
  plasticBoxHide():void {
    this.plasticBox = false;
    this.mainDiv = true;
    this.footer = true;
  }

  cardboardBoxShow():void {
    this.cardboardBox = true;
    this.mainDiv = false;
    this.footer = false;
  }
  cardboardBoxHide():void {
    this.cardboardBox = false;
    this.mainDiv = true;
    this.footer = true;
  }

  paperBoxShow():void {
    this.paperBox = true;
    this.mainDiv = false;
    this.footer = false;
  }
  paperBoxHide():void {
    this.paperBox = false;
    this.mainDiv = true;
    this.footer = true;
  }

  woodBoxShow(): void {
    this.woodBox = true;
    this.mainDiv = false;
    this.footer = false;
  }
  woodBoxHide(): void {
    this.woodBox = false;
    this.mainDiv = true;
    this.footer = true;
  }

  metalBoxShow(): void {
    this.metalBox = true;
    this.mainDiv = false;
    this.footer = false;
  }
  metalBoxHide(): void {
    this.metalBox = false;
    this.mainDiv = true;
    this.footer = true;
  }

  otherBoxShow(): void {
    this.otherBox = true;
    this.mainDiv = false;
    this.footer = false;
  }
  otherBoxHide(): void {
    this.otherBox = false;
    this.mainDiv = true;
    this.footer = true;
  }
}
