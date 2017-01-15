import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private brandUrl: string = "http://openweathermap.org/";

  constructor() { }

  ngOnInit() {
  }

}
