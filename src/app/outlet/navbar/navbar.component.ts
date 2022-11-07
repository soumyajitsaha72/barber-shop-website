import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { BarberShop } from 'src/app/shared/config/barber-shop.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @ViewChild("toggle_div") toggleDiv : ElementRef;
  toggleNavElement: boolean;

  firstName: string;
  lastName: string;

  constructor(private barberShopService: BarberShop, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.toggleNavElement = false;
    this.firstName = this.barberShopService.firstName;
    this.lastName = this.barberShopService.lastName;
  }

  onClickNavbarToggle() {
    this.toggleNavElement = !this.toggleNavElement;
    if(this.toggleNavElement === true) {
      this.renderer.removeClass(this.toggleDiv.nativeElement,"hidden");
    }else {
      this.renderer.addClass(this.toggleDiv.nativeElement,"hidden");
    }
  }

  logoNavbarToggle() {
    this.toggleNavElement = false;
    this.renderer.addClass(this.toggleDiv.nativeElement,"hidden");
  }
}
