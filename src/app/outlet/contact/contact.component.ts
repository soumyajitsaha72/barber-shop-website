import { Component, OnInit } from '@angular/core';
import { BarberShop } from '../../shared/config/barber-shop.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactUs: {
    address: string;
    email: string;
    mobile: string;
  };

  constructor(private barberShopService: BarberShop) { }

  ngOnInit(): void {
    this.contactUs = this.barberShopService.contactUs;
  }

}
