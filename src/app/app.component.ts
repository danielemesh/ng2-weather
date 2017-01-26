import { Component } from '@angular/core';
import { OpenWeatherService } from "./services/openWeather/open-weather.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [OpenWeatherService]
})
export class AppComponent {}
