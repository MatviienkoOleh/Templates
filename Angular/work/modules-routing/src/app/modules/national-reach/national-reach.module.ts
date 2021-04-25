import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NationalReachComponent } from './national-reach/national-reach.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [NationalReachComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class NationalReachModule { }
