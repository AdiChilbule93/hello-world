import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor() { }


  ngOnInit() {

  
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
          $("body").removeClass("nav-close");
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


    this.sidenav_Toggle();
  }


  sidenav_Toggle(){
    
    $('body').addClass('nav-close');
  }



  sidenavClose(){
    $('body').addClass('nav-close');

  }

}