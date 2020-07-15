import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weatherReport;
  cityNameEntered = "";
  isSearched = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.isSearched = false;
  }

  getWeatherData(cityName): any {
    this.cityNameEntered = cityName;
    return this.http.get(`http://localhost:1234/weatherDetail/${cityName}`)
      .subscribe((data) => {
        this.weatherReport = data;
        this.isSearched = true;
      }, error => {
        this.isSearched = false;
      });
  }
}
