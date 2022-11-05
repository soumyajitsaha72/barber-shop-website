import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OurBarbersComponent } from './our-barbers/our-barbers.component';
import { OurServicesComponent } from './our-services/our-services.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: OurServicesComponent,
  },
  {
    path: 'services',
    component: OurServicesComponent,
    // data: {
    //   servicesSliceStart: -5,
    //   servicesSliceEnd: -4,
    // },
  },
  {
    path: 'barbers',
    component: OurBarbersComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
