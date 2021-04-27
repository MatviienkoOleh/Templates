import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [OurservicesComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class OurServicesModule { }
