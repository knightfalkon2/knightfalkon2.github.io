import { Component, OnInit } from '@angular/core';
import { CurrentBitcoinService } from '../current-bitcoin.service';
import { isJsObject } from '@angular/core/src/change_detection/change_detection_util';

import { CurrentStocksService } from '../current-stocks.service';


@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {

  cStocks = [];
  stringStocks = "";

  constructor(private currentStocksService: CurrentStocksService) { }

  ngOnInit() {
  }


  getCurrentStocks(): void {
    this.currentStocksService.getCurrentStocks()
    .subscribe(
      (stocks: any[]) => {
        this.cStocks = stocks;
      },
      (error) => {
        console.log(error)
      }, () => {
        console.log('finished');
        this.stringStocks = JSON.stringify(this.cStocks);
      }
    );

    
  }

}
