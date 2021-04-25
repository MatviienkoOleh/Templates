import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NationalReachModule } from '../national-reach/national-reach.module';



@NgModule({
  declarations: [NavigationBarComponent, FooterComponent, NavigationComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports : [ 
    NavigationBarComponent,
    RouterModule,
    FooterComponent,
    NavigationComponent
  ]
})
export class SharedModule { }
