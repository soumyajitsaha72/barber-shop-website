import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Barber } from 'src/app/shared/model/barber';

@Component({
  selector: 'app-barber-card',
  templateUrl: './barber-card.component.html',
  styleUrls: ['./barber-card.component.css']
})
export class BarberCardComponent implements OnInit {

  @Input() barber: Barber;

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  onClickBarberLink(id: number) {
    this.router.navigate(['/barbers',id]);
  }

}
