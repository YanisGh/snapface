import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/component/landing-page/landing-page.component';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


//Mettre les dates en fr 
// import { LOCALE_ID, NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppComponent } from './app.component';
// import { FaceSnapComponent } from './face-snap/face-snap.component';
// import { registerLocaleData } from '@angular/common';
// import * as fr from '@angular/common/locales/fr';

// @NgModule({
//   declarations: [
//     AppComponent,
//     FaceSnapComponent
//   ],
//   imports: [
//     BrowserModule
//   ],
//   providers: [
//     { provide: LOCALE_ID, useValue: 'fr-FR'}
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule {
//   constructor() {
//     registerLocaleData(fr.default);
//   }
// }