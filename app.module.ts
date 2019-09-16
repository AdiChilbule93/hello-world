import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './views/layout/header/header.component';


// Bootstrap Components
import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';

// Material Components
import { AppMaterialModule } from './app-material/app-material.module';

// Other Components
import { OwlModule } from 'ngx-owl-carousel';
import { DataTablesModule } from 'angular-datatables';
import { FooterComponent } from './views/layout/footer/footer.component';
import { SidenavComponent } from './views/layout/sidenav/sidenav.component';
import { HomeComponent } from './views/home/home.component';
import { MatGridListModule } from '@angular/material';
import { HttpClientModule }    from '@angular/common/http';
import { HttpService }    from './http.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContactUsComponent } from './views/layout/contact-us/contact-us.component';
import { WalkThroughComponent } from './views/layout/walk-through/walk-through.component';
import { CookieService } from 'ngx-cookie-service';
import { TcoMenuComponent } from './views/layout/tco-menu/tco-menu.component';
import { FlexContactComponent } from './views/layout/flex-contact/flex-contact.component';
import { ReportsMenuComponent } from './views/layout/reports-menu/reports-menu.component';
import { VendorwiseSummaryComponent } from './vendorwise-summary/vendorwise-summary.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    HomeComponent,
    ContactUsComponent,
    WalkThroughComponent,
    TcoMenuComponent,
    FlexContactComponent,
    ReportsMenuComponent,
    VendorwiseSummaryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppBootstrapModule,
    AppMaterialModule,
    OwlModule,
    DataTablesModule,
    MatGridListModule,
    HttpClientModule,
    FlexLayoutModule,
  
  ],
  providers: [HttpService,CookieService ],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
