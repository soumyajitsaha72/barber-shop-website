import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './outlet/about/about.component';
import { BarberReadmeComponent } from './outlet/barber-readme/barber-readme.component';
import { ContactComponent } from './outlet/contact/contact.component';
import { HomeComponent } from './outlet/home/home.component';
import { OurBarbersComponent } from './outlet/our-barbers/our-barbers.component';
import { OurServicesComponent } from './outlet/our-services/our-services.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'services',
    component: OurServicesComponent,
  },
  {
    path: 'barbers',
    component: OurBarbersComponent,
  },
    {
    path: 'barbers/:id',
    component: BarberReadmeComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path:'**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
