import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './components/account/account.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from '../favorites/favorites/favorites.component';
import { QrcodeComponent } from '../qrcode/qrcode/qrcode.component';


const routesOne: Routes = [
  { path: 'form/account/favorites', component: FavoritesComponent},
  { path: 'form/account/QRcode', component: QrcodeComponent},
];

@NgModule({
  declarations: [AccountComponent],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routesOne),
  ],
  exports: [
    AccountComponent
  ]
})
export class AccountModule { }
function routesTwo(routesTwo: any): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}

