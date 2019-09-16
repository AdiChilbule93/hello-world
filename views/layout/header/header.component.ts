import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { HttpService } from '../../../http.service';
import { environment as env } from 'src/environments/environment';

import { WalkThroughComponent } from '../walk-through/walk-through.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public env =env;

  pdfName='Self-Serve Analytics - Frequently Asked Questions V1.pdf';


  constructor(private HttpD: HttpService,public dialog: MatDialog) {

 // this.safeSrc_pdf=  this.sanitizer.bypassSecurityTrustResourceUrl(this.basePdf);
// console.log(this.safeSrc_pdf)

    
  }
  selected = 'Platform';

  sidenavtoggle(){
   
    $('body').toggleClass('nav-close');

  }

  
  sidenavClose(){
    $('body').addClass('nav-close');

  }


  
  ngOnInit() {
    $('body').addClass('nav-close');
  this.HttpD.getUsername();
    
    (function (window, document, undefined) {
      'use strict';
     

      // Initialize the media query
      const mediaQuery = window.matchMedia('(max-width: 768px)');

      // Add a listen event
      mediaQuery.addListener(doSomething);

      // Function to do something with the media query
      function doSomething(mediaQuery: any) {
        if (mediaQuery.matches) {
          $("body").addClass("nav-close");
        } else {
          //
          $("body").toggleClass("nav-close");
        }
      }

      // On load
      doSomething(mediaQuery);

      // Modernizr
      // window.addEventListener('resize', function() {
      //  if (Modernizr.mq('(min-width: 560px)')) {
      //    document.body.style.backgroundColor = 'CornflowerBlue';
      //  } else {
      //    document.body.style.backgroundColor = 'FireBrick';
      //  }
      // }, false);


      

    })(window, document);

   
  }
  openUserDialog(){

    
     this.dialog.open(WalkThroughComponent, {

      maxWidth: '100vw',
      maxHeight: '100vh',

      width: '120%',
      height: '120%',

      autoFocus: true
    });
  }



}
