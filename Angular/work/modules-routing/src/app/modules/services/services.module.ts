import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './components/services/services.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { McdonaldsComponent } from '../mc-donalds/mcdonalds/mcdonalds.component';
import { FuguComponent } from '../fugu/fugu/fugu.component';
import { BurgerKingComponent } from '../burger-king/burger-king/burger-king.component';
import { TheCupComponent } from '../the-cup/the-cup/the-cup.component';
import { EdaComponent } from '../eda/eda/eda.component';
import { OrangeComponent } from '../orange/orange/orange.component';
import { FormComponent } from '../form/components/form/form.component';
import { ForestComponent } from '../forest/forest/forest.component';
import { SushiMasterComponent } from '../sushi-master/sushi-master/sushi-master.component';
import { HabibiComponent } from '../habibi/habibi/habibi.component';

const routesTwo: Routes = [
  { path: 'services/McDonalds', component: McdonaldsComponent},
  { path: 'services/Fugu', component: FuguComponent},
  { path: 'services/BurgerKing', component: BurgerKingComponent},
  { path: 'services/TheCup', component: TheCupComponent},
  { path: 'services/Food', component: EdaComponent},
  { path: 'services/Orange', component: OrangeComponent},
  { path: 'services/Forest', component: ForestComponent},
  { path: 'services/Sushi-Master', component: SushiMasterComponent},
  { path: 'services/Habibi', component: HabibiComponent},
];


@NgModule({
  declarations: [ServicesComponent],
  imports: [
    CommonModule,AppRoutingModule,
    RouterModule.forRoot(routesTwo),
  ]
})
export class ServicesModule { }
