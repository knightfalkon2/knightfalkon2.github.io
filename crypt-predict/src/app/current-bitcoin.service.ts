import { Injectable } from '@angular/core';
import { Response, Headers, Http } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CurrentBitcoinService {

  constructor(private http: Http) { }

  getCurrentBitcoin() {
    return  this.http.get('https://blockchain.info/ticker')
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
