import { Component, OnInit, Input } from '@angular/core';
import { weatherBit } from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {CityDetails} from '../models/city-details';
import {WeatherForecast} from '../models/weather-forecast';


@Component({
  selector: 'app-weather-forecast-list',
  templateUrl: './weather-forecast-list.component.html',
  styleUrls: ['./weather-forecast-list.component.css']
})
export class WeatherForecastListComponent implements OnInit {
  weatherBitUrl: string;
  weatherForecasts: any[];
  @Input() searchText: string;
  cityDetails: CityDetails;
  constructor(private http: HttpClient) {
    this.weatherForecasts = [];
    this.weatherBitUrl = ``;
    this.cityDetails = new CityDetails();
    this.wF = new WeatherForecast();
  }

  getWeather(){
    this.weatherBitUrl = `${weatherBit.urlBase}?city=${this.searchText}&key=${weatherBit.apikey}`;
    this.http.get(this.weatherBitUrl).subscribe( (results: any[]) => {
      console.log('WEATHER RESUTS ......');
      console.log(results);
      console.log('WEATHER RESULTS ......');
      this.weatherForecasts   = results['data'];
      this.cityDetails.cityName = results['city_name'];
      this.cityDetails.stateCode = results['state_code'];
    });

}




  ngOnInit() {
  }

}
