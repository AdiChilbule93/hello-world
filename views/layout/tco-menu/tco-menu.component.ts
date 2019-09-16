import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatDialog, MatTabChangeEvent } from '@angular/material';


@Component({
  selector: 'app-tco-menu',
  templateUrl: './tco-menu.component.html'
})
export class TcoMenuComponent implements OnInit {


  
  Custom_Duty: string = environment.custom_duty;



  safeSrc_cd: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer, public dialog: MatDialog) {

   
    this.safeSrc_cd = this.sanitizer.bypassSecurityTrustResourceUrl(this.Custom_Duty); 

  }

  ngOnInit() {

    this.setIFrameHeight();
   
  }

  setIFrameHeight() {
    // window.dispatchEvent(new Event('resize'));
    setTimeout(function () {
      var ah = window.screen.availHeight;
      var th = $(".iframematdash")[0].offsetTop;
      var mheight = ah - th - 120;
      var mgheight = ah - th - 223;
    

      $("#idAggSpend").height(mheight);

      $("#idGrpSpendPr").height(mgheight);
    }, 1000);
  }
  onLinkClick(event: MatTabChangeEvent) {
    this.setIFrameHeight();
    window.scrollTo(0,0);
    window.dispatchEvent(new Event('resize'));
    // console.log('event => ', event);
    // console.log('index => ', event.index);
    // console.log('tab => ', event.tab); 

    // if (event.index==5) {
    //   alert("index 5")
    //   window.scrollTo(0,0);
    // }
  }

}

