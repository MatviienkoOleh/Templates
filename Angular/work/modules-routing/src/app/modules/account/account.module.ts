import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './components/account/account.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [AccountComponent],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule
  ],
  exports: [
    AccountComponent
  ]
})
export class AccountModule { }
