import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecyclingComponent } from './recycling/recycling.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [RecyclingComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class RecyclingModule { }
