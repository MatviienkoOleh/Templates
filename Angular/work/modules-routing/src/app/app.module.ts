import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { modules } from './modules';
import { correctPath } from './services';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...modules,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    ...correctPath
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
