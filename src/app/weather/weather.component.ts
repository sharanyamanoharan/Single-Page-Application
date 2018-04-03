import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { Response } from '@angular/http';
import { IWeather } from '../interfaces/weather';



@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {   
 
    weatherInfo:IWeather;
    status:boolean;
    id_city:string;  
    errorMessage:string;
 
  constructor(private _sharedService: SharedService) {
      this.status = false;
   }   

      callWeatherService(){
        this._sharedService.findWeather(this.id_city)
        .subscribe(resWeatherInformation => {
            this.weatherInfo = resWeatherInformation,
            this.status=true;
            error => this.errorMessage = error;
          
          }           
        ) 
      }
    
  
}
  


