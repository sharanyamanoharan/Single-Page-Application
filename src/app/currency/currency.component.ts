import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { SharedService } from '../shared.service';
import { ICurrency } from '../interfaces/currency';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  currencyInfo:ICurrency;
  status:boolean;
  errorMessage: string;
  id_currency: string;
  _result:any;

  constructor(private _sharedService: SharedService) {
    this.status = false;
   }

  ngOnInit() {
  }

  callCurrencyService(){
    this._sharedService.getCurrencyExchRate(this.id_currency.toUpperCase())
    .subscribe(
      resCurrencyInfo => {
        this.currencyInfo = resCurrencyInfo,
        this.status = true;
        error => this.errorMessage = error;
       })
      }

    }
    
