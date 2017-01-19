import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class OpenWeatherService {

  private API_KEY: string = 'c5ac0098c8c7b7a5512b4679a5b11f9f';
  private BASE_URL: string = 'http://api.openweathermap.org/data/2.5/group?';

  constructor(private http: Http) {

  }

  getcityById(cityId: number): Promise<any> {
    return Promise.resolve(true);
  }



  getForecast(): Promise<any[]> {
    return this.http.get(`${this.BASE_URL}id=524901,703448,2643743&units=metric&appid=${this.API_KEY}`)
      .toPromise()
      .then(response => response.json());
  }

}
