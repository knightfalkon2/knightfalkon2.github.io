import { Component, OnInit, AfterViewInit } from '@angular/core';
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

  constructor(private currentBitcoinService: CurrentBitcoinService) { }

  ngOnInit() {
  }

  ngAfterVieewInit() {
    this.currentBitcoinService.getCurrentBitcoin()
    .subscribe(
      (bitCoin: any[]) => {
        this.cBitCoin = bitCoin;
      },
      (error) => {
        console.log(error)
      }, () => {
        console.log('finished');
        this.stringBit = JSON.stringify(this.cBitCoin);        
      }
    );
  }

  getCurrentBitcoin(): void {
    this.currentBitcoinService.getCurrentBitcoin()
    .subscribe(
      (bitCoin: any[]) => {
        this.cBitCoin = bitCoin;
      },
      (error) => {
        console.log(error)
      }, () => {
        console.log('finished');
        this.stringBit = JSON.stringify(this.cBitCoin);        
      }
    );

  }

}
