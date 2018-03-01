import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { StocksComponent } from './stocks/stocks.component';
import { BitPredictComponent } from './bit-predict/bit-predict.component';
import { StockPredictComponent } from './stock-predict/stock-predict.component';
import { CurrentBitcoinService } from './current-bitcoin.service';
import { CurrentStocksService } from './current-stocks.service';
import { HttpModule } from '@angular/http';

const appRoutes: Routes = [
  { path: 'bitcoin', component: BitcoinComponent },
  { path: 'stocks', component: StocksComponent },
  { path: 'bit-predict', component: BitPredictComponent },
  { path: 'stock-predict', component: StockPredictComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    BitcoinComponent,
    StocksComponent,
    BitPredictComponent,
    StockPredictComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule
  ],
  providers: [CurrentBitcoinService, CurrentStocksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
