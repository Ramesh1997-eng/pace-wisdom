import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { POSITION_OPTIONS } from '@ng-web-apis/geolocation';
import { HttpClientModule, } from "@angular/common/http";
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCJT0OdVsA6yLkpJsCcF42dGWWXEM0STws'
    })
  ],
  providers: [
    {
      provide: POSITION_OPTIONS,
      useValue: { enableHighAccuracy: true, timeout: 5000, maximumAge: 60000 },
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
