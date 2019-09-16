import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";
import "owl.carousel";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { environment } from "src/environments/environment";
import { MatDialog, MatTabChangeEvent, MatSnackBar } from "@angular/material";


@Component({
  selector: "app-home",
  templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

  Plan_vs_Actual: string = environment.plan_vs_actual;
  Variance_Summary: string = environment.variance_summary;
  Variance_Details: string = environment.variance_details;
  Pricing_Trends: string = environment.pricing_trends;
  Spend_Baseline: string = environment.spend_baseline;
  Vendor_Relations: string = environment.vendor_relations;
  Vendor_Clustering: string = environment.vendor_clustering;
  Commercial_Terms: string = environment.commercial_terms;
  Stock_Consumption: string = environment.stock_Consumption;
  Custom_Duty: string = environment.custom_duty;


  safeSrc_pv: SafeResourceUrl;
  safeSrc_vs: SafeResourceUrl;
  safeSrc_vd: SafeResourceUrl;
  safeSrc_pt: SafeResourceUrl;
  safeSrc_sb: SafeResourceUrl;
  safeSrc_vr: SafeResourceUrl;
  safeSrc_vc: SafeResourceUrl;
  safeSrc_ct: SafeResourceUrl;
  safeSrc_sc: SafeResourceUrl;
  safeSrc_cd: SafeResourceUrl;
  safeSrc_super: SafeResourceUrl;


  constructor(private sanitizer: DomSanitizer, public dialog: MatDialog,  public snackBar: MatSnackBar) {

  
    // this.safeSrc_pv = this.sanitizer.bypassSecurityTrustResourceUrl(this.Plan_vs_Actual);
    this.safeSrc_vs = this.sanitizer.bypassSecurityTrustResourceUrl(this.Variance_Summary);
    this.safeSrc_vd = this.sanitizer.bypassSecurityTrustResourceUrl(this.Variance_Details);
    this.safeSrc_pt = this.sanitizer.bypassSecurityTrustResourceUrl(this.Pricing_Trends);
    this.safeSrc_sb = this.sanitizer.bypassSecurityTrustResourceUrl(this.Spend_Baseline);
    this.safeSrc_vr = this.sanitizer.bypassSecurityTrustResourceUrl(this.Vendor_Relations);
    this.safeSrc_vc = this.sanitizer.bypassSecurityTrustResourceUrl(this.Vendor_Clustering);
    this.safeSrc_ct = this.sanitizer.bypassSecurityTrustResourceUrl(this.Commercial_Terms);
    this.safeSrc_sc = this.sanitizer.bypassSecurityTrustResourceUrl(this.Stock_Consumption);
    this.safeSrc_cd = this.sanitizer.bypassSecurityTrustResourceUrl(this.Custom_Duty);
 

  }

  ngOnInit() {
    this.setIFrameHeight();
    $('body').addClass('nav-close');
    
  }

  setIFrameHeight() {
   debugger
    this.safeSrc_pv = this.sanitizer.bypassSecurityTrustResourceUrl(this.Plan_vs_Actual);
    localStorage.setItem('PA', this.Plan_vs_Actual);
    localStorage.setItem('VS', this.Variance_Summary);
    localStorage.setItem('VD', this.Variance_Details);
    localStorage.setItem('PT', this.Pricing_Trends);
    localStorage.setItem('SB', this.Spend_Baseline);
    localStorage.setItem('VR', this.Vendor_Relations);
    localStorage.setItem('VC', this.Vendor_Clustering);
    localStorage.setItem('CT', this.Commercial_Terms);
    localStorage.setItem('SC', this.Stock_Consumption);
    localStorage.setItem('CD', this.Custom_Duty);


    setTimeout(function () {

      
      var ah = window.screen.availHeight;
      var th = $(".iframematdash")[0].offsetTop;
      var mheight = ah - th - 125;
      var mgheight = ah - th - 104;
       var superhe=ah-th+40;
      
      $("#idaggSpend").height(superhe);
      $("#idAggSpend").height(mheight);
      $("#idGrpSpendPr").height(mgheight);


      debugger
      var x = (document.getElementById("idAggSpend") as HTMLIFrameElement).src;
    var y=localStorage.getItem("PA");
    var a=localStorage.getItem("VS");
    var b=localStorage.getItem("VD");
    var c=localStorage.getItem("PT");
    var d=localStorage.getItem("SB");
    var e=localStorage.getItem("VR");
    var f=localStorage.getItem("VC");
    var g=localStorage.getItem("CT");
    var h=localStorage.getItem("SC");
    var i=localStorage.getItem("CD");
   


     console.log(x);
      if (x==y || x==a ){
        alert( "  true " ) 
      
      }else{
        alert( " false  ")    
      }

    }, 1000);

  }
  onLinkClick(event: MatTabChangeEvent) {
    this.setIFrameHeight();

    window.scrollTo(0, 0);
    window.dispatchEvent(new Event('resize'));
 


  }


 }





