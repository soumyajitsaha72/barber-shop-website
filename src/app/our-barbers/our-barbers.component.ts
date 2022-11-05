import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BarberShop } from 'src/app/shared/config/barber-shop.service';
import { Barber } from 'src/app/shared/model/barber';

@Component({
  selector: 'app-our-barbers',
  templateUrl: './our-barbers.component.html',
  styleUrls: ['./our-barbers.component.css'],
})
export class OurBarbersComponent implements OnInit {
  barbers: Barber[];
  displaySeeMore: boolean;

  constructor(
    private barberShopService: BarberShop,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.displaySeeMore = true;
    this.barbers = this.barberShopService.barbers;

    if (this.route.snapshot.routeConfig.path === 'barbers') {
      this.displaySeeMore = false;
    }
  }
}
