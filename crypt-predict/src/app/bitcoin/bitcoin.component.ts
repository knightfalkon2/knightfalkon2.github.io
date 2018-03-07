import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { CurrentBitcoinService } from '../current-bitcoin.service';
import { isJsObject } from '@angular/core/src/change_detection/change_detection_util';


@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.component.html',
  styleUrls: ['./bitcoin.component.css']
})
export class BitcoinComponent implements OnInit {

  cBitCoin = [];
  stringBit = "";
  currencies = [];
  symbol = "";
  bitValue = 0;
  @ViewChild('output')output: string;
  constructor(private currentBitcoinService: CurrentBitcoinService) { }

  ngOnInit() {
    this.currentBitcoinService.getCurrentBitcoin()
    .subscribe(
      (bitCoin: any[]) => {
        this.cBitCoin = bitCoin;
        for(let i in this.cBitCoin) {
          this.currencies.push(i);
          // console.log("test");
          // console.log(i);
          // console.log("Here is the object" + JSON.stringify(this.cBitCoin[i]));
        }
      },
      (error) => {
        console.log(error)
      }, () => {
        console.log('finished');
        this.stringBit = JSON.stringify(this.cBitCoin);  
      }
    );
  }

  selected(event) {
    this.symbol = this.cBitCoin[event]["symbol"];
    this.bitValue = this.cBitCoin[event]["last"];
    this.bitValue.toFixed(2);
    // document.getElementById('output').innerHTML = this.symbol + JSON.stringify(this.cBitCoin[event]["last"]);
  }


  doStuff():void {
    console.log("dostuffed worked");
  }

}
