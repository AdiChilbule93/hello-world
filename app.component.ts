import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

import * as $ from 'jquery';
import { HeaderComponent } from './views/layout/header/header.component';
import { WalkThroughComponent } from './views/layout/walk-through/walk-through.component';
import { MatDialog } from '@angular/material';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewInit {
  title = 'Platform Name';



  onDeactivate() {
    document.body.scrollTop = 0;
    // Alternatively, you can scroll to top by using this other call:
    // window.scrollTo(0, 0)
  }
  ngAfterViewInit() {


    this.cookieService.deleteAll('/ ', '/');
    this.WalkThroughDialog();
    $('#awz-preloader').delay(350).fadeOut(function () {
      $('body').delay(350).css({ overflow: 'visible' });
    });
  }

  @ViewChild(HeaderComponent) child: HeaderComponent;


  constructor(private router: Router, public dialog: MatDialog, private cookieService: CookieService, private http: HttpClient) {


    router.events.subscribe((event: Event) => {

      if (event instanceof NavigationStart) {
        // Show loading indicator

        this.child.sidenavtoggle();

      }

      if (event instanceof NavigationEnd) {
        // Hide loading indicator


      }

      if (event instanceof NavigationError) {
        // Hide loading indicator

        // Present error to user
        // console.log(event.error);
      }
    });
  }

  WalkThroughDialog(): void {

    this.dialog.open(WalkThroughComponent, {

      maxWidth: '100vw',
      maxHeight: '100vh',

      width: '120%',
      height: '120%',

      autoFocus: true
    });

  }
}