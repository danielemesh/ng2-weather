import { Component, OnInit } from '@angular/core';
import {OpenWeatherService} from "../../services/openWeather/open-weather.service";

@Component({
  selector: 'cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss'],
})
export class CitiesComponent implements OnInit {
  private cities: any[];

  constructor(private _openWeatherService: OpenWeatherService) { }

  ngOnInit() {
    console.log("init");
    this.cities = this.getCities();
  }

  getCities(): [any] {
    console.log("getCities()");
    return this._openWeatherService.getCities();
  }

}
