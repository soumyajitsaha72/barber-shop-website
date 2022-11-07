import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderComponent } from './loader/loader.component';
import { HomeComponent } from './outlet/home/home.component';
import { NavbarComponent } from './outlet/navbar/navbar.component';
import { FooterComponent } from './outlet/footer/footer.component';
import { FirstSectionComponent } from './outlet/home/first-section/first-section.component';
import { OurServicesComponent } from './outlet/our-services/our-services.component';
import { ContactUsComponent } from './outlet/home/contact-us/contact-us.component';
import { OurServicesCardComponent } from './outlet/our-services/our-services-card/our-services-card.component';
import { BarberCardComponent } from './outlet/our-barbers/barber-card/barber-card.component';
import { OutletComponent } from './outlet/outlet.component';
import { OurBarbersComponent } from './outlet/our-barbers/our-barbers.component';
import { AboutComponent } from './outlet/about/about.component';
import { ContactComponent } from './outlet/contact/contact.component';
import { BarberReadmeComponent } from './outlet/barber-readme/barber-readme.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

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
    AboutComponent,
    ContactComponent,
    BarberReadmeComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
