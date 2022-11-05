import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BarberShop } from 'src/app/shared/config/barber-shop.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  firstName: string;
  lastName: string;

  constructor(private barberShopService: BarberShop) {}

  ngOnInit(): void {
    this.firstName = this.barberShopService.firstName;
    this.lastName = this.barberShopService.lastName;
  }
}
