import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-barber-card',
  templateUrl: './barber-card.component.html',
  styleUrls: ['./barber-card.component.css']
})
export class BarberCardComponent implements OnInit {

  @Input() barber: {
    name: string;
    img: string;
    speciality: string;
    description: string;
  };

  constructor() { }

  ngOnInit(): void {
  }

}
