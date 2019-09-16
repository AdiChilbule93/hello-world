import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatDialog, MatTabChangeEvent } from '@angular/material';


@Component({
  selector: 'app-reports-menu',
  templateUrl: './reports-menu.component.html'
})
export class ReportsMenuComponent implements OnInit {
  
  

  Weekly_Commitment_Summary: string = environment.weekly_commitment_summary;


  safeSrc_ws: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer, public dialog: MatDialog) {

   
    this.safeSrc_ws = this.sanitizer.bypassSecurityTrustResourceUrl(this.Weekly_Commitment_Summary); 

  }

  ngOnInit() {
   

    this.setIFrameHeight();
   
  }

  setIFrameHeight() {
    // window.dispatchEvent(new Event('resize'));
     setTimeout(function () {
      var ah = window.screen.availHeight;
      var th = $(".iframematdash")[0].offsetTop;
      var mheight = ah - th - 20;
      var mgheight = ah - th - 223;
    

      $("#idAggSpend").height(mheight);

      $("#idGrpSpendPr").height(mgheight);
    }, 1000);
  }
  onLinkClick(event: MatTabChangeEvent) {
    this.setIFrameHeight();
    window.scrollTo(0,0);
    window.dispatchEvent(new Event('resize'));
    console.log('event => ', event);
    
  }

}



