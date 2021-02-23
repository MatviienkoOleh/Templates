import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CorrectPathGuard } from './guards/correct-path.guard';
import { AccessoriesComponent } from './modules/accessories/components/accessories/accessories.component';
import { AccountComponent } from './modules/account/components/account/account.component';
import { FAQComponent } from './modules/faq/components/faq/faq.component';
import { FormComponent } from './modules/form/components/form/form.component';
import { HomeComponent } from './modules/home/components/home/home.component'
import { ServicesComponent } from './modules/services/components/services/services.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'form', component: FormComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'FAQ', component: FAQComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
