import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from '../account/components/account/account.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RegistrationComponent } from '../registration/components/registration/registration.component';

const routesOne: Routes = [
  { path: 'form/account', component: AccountComponent},
  { path: 'form/registration', component: RegistrationComponent},
];

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule.forRoot(routesOne)
  ]
})
export class FormModule { }
