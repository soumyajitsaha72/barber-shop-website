import { Component, OnInit } from '@angular/core';
import { BarberShop } from 'src/app/shared/config/barber-shop.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  firstName: string;
  lastName: string;

  socialMediaLinks: {
    facebook: string;
    instagram: string;
    twitter: string;
    github: string;
  };

  constructor(private barberShopService: BarberShop) {}

  ngOnInit(): void {
    this.firstName = this.barberShopService.firstName;
    this.lastName = this.barberShopService.lastName;
    this.socialMediaLinks = this.barberShopService.socialMediaLinks;
  }
}
