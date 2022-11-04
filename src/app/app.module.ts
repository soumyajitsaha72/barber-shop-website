import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderComponent } from './loader/loader.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { FooterComponent } from './home/footer/footer.component';
import { FirstSectionComponent } from './home/first-section/first-section.component';
import { SecondSectionComponent } from './home/second-section/second-section.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { ThirdSectionComponent } from './home/third-section/third-section.component';
import { OurServicesCardComponent } from './home/third-section/our-services-card/our-services-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    FirstSectionComponent,
    SecondSectionComponent,
    OurServicesComponent,
    ContactUsComponent,
    ThirdSectionComponent,
    OurServicesCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
