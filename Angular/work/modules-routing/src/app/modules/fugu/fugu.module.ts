import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FuguComponent } from './fugu/fugu.component';
import { UdonComponent } from './udon/udon.component';
import { SushiComponent } from './sushi/sushi.component';
import { MisoSoupComponent } from './miso-soup/miso-soup.component';
import { RollsComponent } from './rolls/rolls.component';



@NgModule({
  declarations: [FuguComponent, UdonComponent, SushiComponent, MisoSoupComponent, RollsComponent],
  imports: [
    CommonModule
  ]
})
export class FuguModule { }
