import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { modules } from './modules';
import { HomepageComponent } from './modules/homepage/component/homepage/homepage.component';
import { FormComponent } from './modules/form/component/form/form.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'form', component: FormComponent },
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    ...modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
