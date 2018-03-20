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
 
   //weatherInfo= <IWeather[]>;
   id_city:string;  
 
  constructor(private _sharedService: SharedService) { }   

      callWeatherService(){
        this._sharedService.findWeather(this.id_city)
        .subscribe( resWeatherInformation => {
            return resWeatherInformation;
          
          }           
        ) 
      }
    
  
}
  


