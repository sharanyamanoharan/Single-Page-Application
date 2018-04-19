import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { IWeather } from './interfaces/weather';
import { ICurrency } from './interfaces/currency';

@Injectable()
export class SharedService {
    private weatherURL='http://api.openweathermap.org/data/2.5/weather?q='
    private appId='&units=metric&APPID=baeb324c85346121d233f1e42b3e39ed';
    private findMovieURL = "http://www.omdbapi.com/?apikey=bf520c74&t=";    
    private currencyURL="http://api.fixer.io/latest?symbols=";
    requestMade:number = 0;
         

 
    constructor(private _http: Http) { }     

       findWeather(name){
        this.requestMade = this.requestMade + 1;
        return this._http.get(this.weatherURL + name + this.appId)
        .map(this.extractData)
        .catch(this.handleError);
       }

       extractData(res:Response) {
         let body = res.json();
         console.log("in the extract data function" + body);
         return body || {}
       }

       handleError(error:any){
         let errMsg = (error.message) ? error.message:error.status ?
          `${error.statusText} - ${error.statusText}`:'Server error';
          return Observable.throw(errMsg);
       }


       getCurrencyExchRate(currency){
        this.requestMade = this.requestMade + 1;
        return this._http.get(this.currencyURL + currency)
        .map(response => {
          { return response.json()}
        })
        .catch(error => Observable.throw(error.json()));

    }

       findMovie(movie){
         this.requestMade = this.requestMade + 1;
         return this._http.get(this.findMovieURL + movie)
         .map(response => {
           { return response.json()}
         })
         .catch(error => Observable.throw(error.json()));
       }

      

}



