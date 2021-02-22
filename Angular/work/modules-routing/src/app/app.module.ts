import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { modules } from './modules';
import { correctPath } from './services';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...modules
  ],
  providers: [
    ...correctPath
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
