import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganisationFormComponent } from './components/organisation-form/organisation-form.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { OrganisationAccountModule } from '../organisation-account/organisation-account.module';
import { OrganisationFormRegistrationComponent } from '../organisation-form-registration/components/organisation-form-registration/organisation-form-registration.component';
import { OrganisationAccountComponent } from '../organisation-account/components/organisation-account/organisation-account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routesTwo: Routes = [
  { path: 'organisationform', component: OrganisationFormComponent},
  { path: 'organisationform/registration', component: OrganisationFormRegistrationComponent},
];

@NgModule({
  declarations: [OrganisationFormComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule.forRoot(routesTwo),
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class OrganisationFormModule { }
