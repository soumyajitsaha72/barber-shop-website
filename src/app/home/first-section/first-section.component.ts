import { Component, OnInit } from '@angular/core';
import { BarberShop } from 'src/app/shared/config/barber-shop.service';

@Component({
  selector: 'app-first-section',
  templateUrl: './first-section.component.html',
  styleUrls: ['./first-section.component.css'],
})
export class FirstSectionComponent implements OnInit {
  firstName: string;
  lastName: string;
  tagline: string;
  landingPageServices: {
    name: string;
    imgUrl: string;
    price: number;
  }[];

  constructor(private barberShopService: BarberShop) {}

  ngOnInit(): void {
    this.firstName = this.barberShopService.firstName;
    this.lastName = this.barberShopService.lastName;
    this.tagline = this.barberShopService.tagLine;
    this.landingPageServices = this.barberShopService.landingPageServices;
  }
}
