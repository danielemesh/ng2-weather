import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class OpenWeatherService {

  private API_KEY: string = "c5ac0098c8c7b7a5512b4679a5b11f9f";
  private BASE_URL: string = "http://api.openweathermap.org/data/2.5";
  private ENDPOINT_GROUP: string = "group";

  constructor(private http: Http) { }

  getcityById(cityId: number): Promise<any> {
    return Promise.resolve(true);
  }

  getGroupForecasts(groupIds: number[]): Promise<any> {
    let ids = groupIds.join(",");

    return this.http.get(`${this.BASE_URL}/${this.ENDPOINT_GROUP}?appid=${this.API_KEY}&id=${ids}&units=metric`)
      .toPromise()
      .then(response => response.json());
  }

}
