import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RefuseComponent } from './refuse/refuse.component';
import { FoodComponent } from './food/food.component';



@NgModule({
  declarations: [RefuseComponent, FoodComponent],
  imports: [
    CommonModule
  ]
})
export class FoodModule { }
