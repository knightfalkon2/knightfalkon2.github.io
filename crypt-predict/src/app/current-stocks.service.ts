import { Injectable } from '@angular/core';
import { Response, Headers, Http } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CurrentStocksService {

  constructor(private http: Http) { }

  getCurrentStocks() {
    return  this.http.get('https://marketdata.websol.barchart.com/getQuote.json?apikey=1d7a3b06256b9bde9a218b59a82dd8f1&symbols=AAPL%2CGOOG&fields=fiftyTwoWkHigh%2CfiftyTwoWkHighDate%2CfiftyTwoWkLow%2CfiftyTwoWkLowDate&mode=I&jerq=false')  //change this when you find an api
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
