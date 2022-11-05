import { Component, Input, OnInit } from '@angular/core';
import { Service } from 'src/app/shared/model/service';

@Component({
  selector: 'app-our-services-card',
  templateUrl: './our-services-card.component.html',
  styleUrls: ['./our-services-card.component.css']
})
export class OurServicesCardComponent implements OnInit {
  @Input() service: Service;

  constructor() { }

  ngOnInit(): void {
  }

}
