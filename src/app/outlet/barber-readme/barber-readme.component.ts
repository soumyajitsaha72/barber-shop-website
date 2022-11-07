import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BarberShop } from '../../shared/config/barber-shop.service';
import { Barber } from '../../shared/model/barber';

@Component({
  selector: 'app-barber-readme',
  templateUrl: './barber-readme.component.html',
  styleUrls: ['./barber-readme.component.css']
})
export class BarberReadmeComponent implements OnInit {
  barber : Barber;

  constructor(private route: ActivatedRoute, private barberShopService: BarberShop) { }

  ngOnInit(): void {
    this.route.params.subscribe(r => {
      this.barber = this.barberShopService.barbers.find(b => b.id === parseInt(r.id));
    });
  }

}
