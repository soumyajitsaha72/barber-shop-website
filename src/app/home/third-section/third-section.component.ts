import { Component, OnInit } from '@angular/core';
import { BarberShop } from 'src/app/shared/config/barber-shop.service';
import { Service } from 'src/app/shared/model/service';

@Component({
  selector: 'app-third-section',
  templateUrl: './third-section.component.html',
  styleUrls: ['./third-section.component.css']
})
export class ThirdSectionComponent implements OnInit {

  services: Service[];

  constructor(private barberShopService: BarberShop) { }

  ngOnInit(): void {
    this.services = this.barberShopService.services;
  }

}
