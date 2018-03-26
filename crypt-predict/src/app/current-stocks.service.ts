import { Injectable } from '@angular/core';
import { Response, Headers, Http } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CurrentStocksService {

  constructor(private http: Http) { }

  headers = new Headers();

  createAuthorizationHeader(headers: Headers) {
    headers.append("Access-Control-Allow-Origin", "*"); 
  }

  getCurrentStocks() {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return  this.http.get('https://marketdata.websol.barchart.com/getQuote.json?apikey=1d7a3b06256b9bde9a218b59a82dd8f1&symbols=ZC*1,MMM,AXP,AAPL,BA,CAT,CVX,CSCO,KO,DIS,DWDP,XOM,GE,GS,HD,IBM,INTC,JNJ,JPM,MCD,MRK,MSFT,NKE,PFE,PG,TRV,UTX,UNH,VZ,V,WMT', {headers:headers})
    .map(
      (response: Response) => {
        const data = response.json();
        return data;
      }
    )
    .catch(
      (error: Response) => {
        return Observable.throw('Something went wrong');
      }
    );
  }

}
