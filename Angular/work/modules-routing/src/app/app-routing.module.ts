import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CorrectPathGuard } from './guards/correct-path.guard';
import { AccessoriesComponent } from './modules/accessories/components/accessories/accessories.component';
import { AccountComponent } from './modules/account/components/account/account.component';
import { FAQComponent } from './modules/faq/components/faq/faq.component';
import { FoodComponent } from './modules/food/food/food.component';
import { FormComponent } from './modules/form/components/form/form.component';
import { HomeComponent } from './modules/home/components/home/home.component'
import { McdonaldsComponent } from './modules/mc-donalds/mcdonalds/mcdonalds.component';
import { NationalReachComponent } from './modules/national-reach/national-reach/national-reach.component';
import { OrganisationFormComponent } from './modules/organisation-form/components/organisation-form/organisation-form.component';
import { OurservicesComponent } from './modules/our-services/ourservices/ourservices.component';
import { RecyclingComponent } from './modules/recycling/recycling/recycling.component';
import { RefuseComponent } from './modules/refuse/refuse/refuse.component';
import { RegistrationComponent } from './modules/registration/components/registration/registration.component';
import { ServicesComponent } from './modules/services/components/services/services.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'form', component: FormComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'FAQ', component: FAQComponent},
  { path: 'organisationform', component: OrganisationFormComponent},
  { path: 'home/ourservices', component: OurservicesComponent},
  { path: 'home/nationalreach', component: NationalReachComponent},
  { path: 'home/ourservices/recycling', component: RecyclingComponent},
  { path: 'home/ourservices/food', component: FoodComponent },
  { path: 'home/ourservices/refuse', component: RefuseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
