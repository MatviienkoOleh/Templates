import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { McdonaldsComponent } from './mcdonalds/mcdonalds.component';
import { MenuComponent } from './menu/menu.component';
import { BurgersComponent } from './burgers/burgers.component';
import { DrinksComponent } from './drinks/drinks.component';
import { SweetsComponent } from './sweets/sweets.component';



@NgModule({
  declarations: [McdonaldsComponent, MenuComponent, BurgersComponent, DrinksComponent, SweetsComponent],
  imports: [
    CommonModule
  ]
})
export class McDonaldsModule { }
