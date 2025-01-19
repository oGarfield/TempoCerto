import { Component, OnInit } from '@angular/core';
import { Distrits } from './_models/distrits';
import { Forecast } from './_models/forecast';
import { DistritsService } from './_services/distrits.service';
import { ForecastService } from './_services/forecast.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Metereologia';

  constructor (private forecast:ForecastService, private district:DistritsService) {
  }

  // dataForecast: Forecast[] = [];
  // dataDistrits: Distrits[] = [];

  // ngOnInit(){
  //   this.forecast.getData().subscribe((dataForecast) => {
  //     console.warn("Forecast data", dataForecast)
  //   })

  //   this.district.getData().subscribe((dataDistrits) => {
  //     console.warn("Distrit data", dataDistrits)
  //   })
  // }
}
