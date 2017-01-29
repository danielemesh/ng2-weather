import { Component, OnInit } from '@angular/core';
import { OpenWeatherService } from "./services/openWeather/open-weather.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [OpenWeatherService]
})
export class AppComponent implements OnInit {
  city: any;

  constructor(private openWeatherService: OpenWeatherService) {}

  ngOnInit() {
    this.openWeatherService.getCityForecast().then(res =>  {
      console.log("res", res);
      this.city = res;
    });
  }

  addCity(cityName): void {
    // Search for the city id in the city.list.json file

    // Extract city ID

    // Issue a request to the openWeather API to get the city forecast

    console.log("name", cityName);
  }
}
