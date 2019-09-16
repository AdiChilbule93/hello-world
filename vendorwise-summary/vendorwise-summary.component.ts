import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatDialog} from '@angular/material';



@Component({
  selector: 'app-vendorwise-summary',
  templateUrl: './vendorwise-summary.component.html'

})
export class VendorwiseSummaryComponent implements OnInit {

  Vendorwise_Summary: string = environment.vendorwise_summary;


  safeSrc_wvs: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer, public dialog: MatDialog) {

   
    this.safeSrc_wvs = this.sanitizer.bypassSecurityTrustResourceUrl(this.Vendorwise_Summary); 

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


}


