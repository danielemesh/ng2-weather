import { Component, OnInit } from '@angular/core';
import {OpenWeatherService} from "../../services/openWeather/open-weather.service";

@Component({
  selector: 'cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss'],
})
export class CitiesComponent implements OnInit {
  private cities: any[];
  private defaultCitiesIds: number[];

  constructor(private openWeatherService: OpenWeatherService) {
    this.defaultCitiesIds = [524901,703448,2643743];
  }

  ngOnInit() {
    this.getGroupForecasts().then(response => {
      console.log("response:" , response);
      this.cities = response.list;
    });
  }

  getGroupForecasts(): Promise<any> {
    return this.openWeatherService.getGroupForecasts(this.defaultCitiesIds);
  }
}
