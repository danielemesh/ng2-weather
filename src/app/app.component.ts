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
  defaultCityId: number;

  constructor(private openWeatherService: OpenWeatherService) {}

  ngOnInit() {
    this.defaultCityId = 294778;

    this.openWeatherService.getCityForecast(this.defaultCityId).then(city => {
      this.city = city;
      console.log("city: ", this.city);
    });
  }

  addCity(cityName): void {
    // Search for the city id in the city.list.json file

    // Extract city ID

    // Issue a request to the openWeather API to get the city forecast
    let newCity = this.openWeatherService.getCityForecast()
      .then(city => {
        newCity = city;

        console.log("newCity", newCity);
      });
  }
}
