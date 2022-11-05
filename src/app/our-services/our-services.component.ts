import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BarberShop } from '../shared/config/barber-shop.service';
import { Service } from '../shared/model/service';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css'],
})
export class OurServicesComponent implements OnInit {
  services: Service[];
  displaySeeMore: boolean;

  constructor(
    private barberShopService: BarberShop,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.route.data.subscribe((m) => {
    //   this.servicesSliceStart = m.servicesSliceStart;
    //   this.servicesSliceEnd = m.servicesSliceEnd;
    // });

    this.displaySeeMore = true;
    this.services = this.barberShopService.services;

    if (this.route.snapshot.routeConfig.path === 'services') {
      this.displaySeeMore = false;
    }
  }
}
