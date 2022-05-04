import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DynamicInterpolationModule } from 'angular-dynamic-interpolation';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DynamicInterpolationModule.forRoot(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
