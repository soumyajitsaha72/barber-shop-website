import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderComponent } from './loader/loader.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { FooterComponent } from './home/footer/footer.component';
import { FirstSectionComponent } from './home/first-section/first-section.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { OurServicesCardComponent } from './our-services/our-services-card/our-services-card.component';
import { BarberCardComponent } from './our-barbers/barber-card/barber-card.component';
import { OutletComponent } from './outlet/outlet.component';
import { OurBarbersComponent } from './our-barbers/our-barbers.component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    FirstSectionComponent,
    OurServicesComponent,
    ContactUsComponent,
    OurServicesCardComponent,
    BarberCardComponent,
    OutletComponent,
    OurBarbersComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
