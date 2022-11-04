import { Component, OnInit } from '@angular/core';
import { BarberShop } from '../shared/config/barber-shop.service';
import { Service } from '../shared/model/service';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css']
})
export class OurServicesComponent implements OnInit {

  services: Service[];

  constructor(private barberShopService: BarberShop) { }

  ngOnInit(): void {
    this.services = this.barberShopService.services;
  }

}
