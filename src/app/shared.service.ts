import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { IWeather } from './interfaces/weather';

@Injectable()
export class SharedService {
    private weatherURL='http://api.openweathermap.org/data/2.5/weather?q='
    private appId='&APPID=baeb324c85346121d233f1e42b3e39ed';
    private movieURL="https://api.themoviedb.org/3/movie/550?api_key=c486adbd68986b92b29d3fe42070cb35/";
    private currencyURL="http://data.fixer.io/api/latest?access_key=ce9f78ab1a5858b7e227401ac865a3bd/";
    requestMade:number = 0;
    cityName:string;      

 
    constructor(private _http: HttpClient) { }

      findWeather(name){
        this.requestMade = this.requestMade + 1;
        return this._http.get(this.weatherURL + name + this.appId)
        .map(response  =>  { return console.log(response)} )
        .catch(error => Observable.throw("Error in fetching weather service"));
       }



       findMovie(movie){
         this.requestMade = this.requestMade + 1;
         return this._http.get(this.movieURL + movie)
         .map(response => {
           { return response => console.log(response)}
         })
         .catch(error => Observable.throw(error.json()));
       }

       getCurrencyExchRate(currency){
         this.requestMade = this.requestMade + 1;
         return this._http.get(this.currencyURL + currency)
         .map(response => {
           { return response => console.log(response)}
         })
         .catch(error => Observable.throw(error.json()));

     }

}



