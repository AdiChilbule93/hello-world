import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ContactUsComponent } from './views/layout/contact-us/contact-us.component';
import { WalkThroughComponent } from './views/layout/walk-through/walk-through.component';
import { TcoMenuComponent } from './views/layout/tco-menu/tco-menu.component';
import { FlexContactComponent } from './views/layout/flex-contact/flex-contact.component';
import { ReportsMenuComponent } from './views/layout/reports-menu/reports-menu.component';
import { VendorwiseSummaryComponent } from './vendorwise-summary/vendorwise-summary.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'walk-through',
    component: WalkThroughComponent
  },
  {
    path: 'tco',
    component: TcoMenuComponent
  },
  {
    path: 'contact',
    component: FlexContactComponent
  },
  {
    path: 'Weekly-Summary',
    component: ReportsMenuComponent
  },
  {
    path: 'Vendorwise-Summary',
    component: VendorwiseSummaryComponent
  }
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true,scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
