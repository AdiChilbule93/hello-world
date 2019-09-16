import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { HttpXsrfTokenExtractor } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { MatSnackBar, MatDialog } from '@angular/material';
import { catchError, retry, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { environment } from 'src/environments/environment';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';





@Injectable({
  providedIn: 'root'
})
export class HttpService {

  Gen: string = environment.gen;
  Usrd: string = environment.usrd;
  Auth: string = environment.auth;

  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();


  errmsgGen = "";
  errmsgUsrd = "";
  errmsgAuth = "";

  private host = "";
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };
  safeSrc_gen: SafeResourceUrl;
  safeSrc_usrd: SafeResourceUrl;
  safeSrc_auth: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer, private http: HttpClient, private xsrf: HttpXsrfTokenExtractor, public snackBar: MatSnackBar, private dialog: MatDialog, private router: Router) {
    this.safeSrc_gen = this.sanitizer.bypassSecurityTrustResourceUrl(this.Gen);
    this.safeSrc_usrd = this.sanitizer.bypassSecurityTrustResourceUrl(this.Usrd);
    this.safeSrc_auth = this.sanitizer.bypassSecurityTrustResourceUrl(this.Auth);
  }
  getCall(url: string): Observable<any[]> {
    const p = url.indexOf('?') > 0 ? '&' : '?';
    const urll = this.host + url + p + 'saml2=disabled';
    //console.log("11", url, urll);
    //return this.http.get<any>(urll);
    return this.http.get<any>(urll).pipe(
      catchError(this.handleError<any>(url))
    );
  }
  getUsername(): any {
    const httpOptions = {
      withCredentials: true
    };

    var gen: any = this.safeSrc_gen['changingThisBreaksApplicationSecurity'];
    var usrd: any = this.safeSrc_usrd['changingThisBreaksApplicationSecurity'];
    var auth: any = this.safeSrc_auth['changingThisBreaksApplicationSecurity'];
    var that = this;
// debugger
    this.http.get<any>(gen, httpOptions).subscribe(dat => {

      // console.log(dat)
      var token = dat.Data;
      var ddata = { AuthToken: token };
      this.errmsgGen = dat.Message;

     
      that.ppost(usrd, ddata).subscribe(dat1 => {

        this.errmsgUsrd = dat1.message;

        var jwt = dat1.token;
        var name = dat1.domainID;
        $("#idUsername").text(name);

        var token = jwt.split("JWT ")[1];
        const httpOptio2 = {
          headers: new HttpHeaders({
            'x-access-token': token,
          })
        }
       
        that.http.get<any>(auth, httpOptio2).subscribe(data => {

          this.errmsgAuth = data.message;
          
         
        }, (err) => {

         
          that.changeMessage(err.message);
          this.snackBar.open(err.message, "Close", {
            duration: 4000
          });
        

          // $(".iframematdash").hide();
          // $(".menuToggle").hide();

        });

      }, (err) => {
       
        that.changeMessage(err.message);
        this.snackBar.open(err.message, "Close", {
          duration: 4000

        });
       
        // $(".iframematdash").hide();
        // $(".menuToggle").hide();
      });

    }, (err) => {
    
      that.changeMessage(err.message);
      this.snackBar.open(err.message, "Close", {
        duration: 4000
      });

    //  $(".iframematdash").hide();
    //  $(".menuToggle").hide();
    });
  }


  // handleError
  getCSRF(): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.host, {
      headers: new HttpHeaders({
        'Content-Type': 'application/atom+xml',
        'X-Requested-With': 'XMLHttpRequest',
        'DasaServiceVersion': '2.0',
        'x-csrf-token': 'Fetch'
      }),
      observe: 'response'
    });
  }
  ppost(url: string, data: any): any {


    const httpOptio = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.post<any>(url, data, httpOptio);
  }

  changeMessage(message: string): any {
    this.messageSource.next(message)
  }

  postErrorDialog(data): void {

  }


  private handleError<T>(result?: T) {

    return (error: any): Observable<T> => {
      // TODO: better job of transforming error for user consumption
      // console.log(' failed: ${error.message}`);
      this.snackBar.open(error.error.error.message.value, "", {
        duration: 2000
      });
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}