import { Component, OnInit } from '@angular/core';
import { BarberShop } from 'src/app/shared/config/barber-shop.service';

@Component({
  selector: 'app-second-section',
  templateUrl: './second-section.component.html',
  styleUrls: ['./second-section.component.css']
})
export class SecondSectionComponent implements OnInit {

  barbers: {
    name: string;
    img: string;
    speciality: string;
    description: string;
  }[];

  constructor(private barberShopService: BarberShop) { }

  ngOnInit(): void {
    this.barbers = this.barberShopService.barbers;
  }

}
