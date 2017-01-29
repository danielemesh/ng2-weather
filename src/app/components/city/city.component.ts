import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  @Input() city;
  description: string;
  iconUrl: string;


  constructor() {}

  ngOnInit() {
    // this.description = this.getWeatherObject().description;
    // this.iconUrl = this.getWeatherObject().icon;
  }

  getWeatherObject(): any {
    return this.city.weather[0];
  }
}
