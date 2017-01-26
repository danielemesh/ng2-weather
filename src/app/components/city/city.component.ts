import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  @Input() city;
  description: string;

  constructor() { }

  ngOnInit() {
    this.description = this.city.weather[0].description;
  }



}
