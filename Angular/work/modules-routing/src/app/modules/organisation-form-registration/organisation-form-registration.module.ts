import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganisationFormRegistrationComponent } from './components/organisation-form-registration/organisation-form-registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [OrganisationFormRegistrationComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class OrganisationFormRegistrationModule { }
