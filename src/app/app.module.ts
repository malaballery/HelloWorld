import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { DriversListComponent } from './drivers-list/drivers-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { CarItemComponent } from './cars-list/car-item/car-item.component';
import { DriverItemComponent } from './drivers-list/driver-item/driver-item.component';
import { FormsModule } from '@angular/forms';
import { DataService } from './services/data.service';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarsListComponent,
    DriversListComponent,
    HomePageComponent,
    FourOhFourComponent,
    CarItemComponent,
    DriverItemComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: "fr-FR" }, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
