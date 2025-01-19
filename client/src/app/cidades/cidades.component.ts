import { Component, OnInit } from '@angular/core';
import { DistritsService } from '../_services/distrits.service';
import { ForecastService } from '../_services/forecast.service';
import { HttpClient } from '@angular/common/http';
import { Distrits } from '../_models/distrits';
import { Forecast } from '../_models/forecast';

@Component({
  selector: 'app-cidades',
  templateUrl: './cidades.component.html',
  styleUrls: ['./cidades.component.css']
})
export class CidadesComponent implements OnInit {
  dataForecast: any[] = [];
  dataDistritsToday: Distrits[] = [];
  dataDistritsTomorrow: Distrits[] = [];
  dataDistritsIn2Days: Distrits[] = [];

  constructor (private distritsService: DistritsService, private forecastService: ForecastService, private http: HttpClient) {}
  
  ngOnInit(): void {
    this.getDataDistritsToday()
  }

  getDataDistritsToday() {
    // debugger
    this.distritsService.getData().subscribe((dataDistritsToday: any) => {
      // console.warn("Distrit data", dataDistrits)
      this.dataDistritsToday = dataDistritsToday.data;

      this.forecastService.getDataToday().subscribe((dataForecastToday: Forecast[]) => {
        // console.warn("Forecast data", dataForecast)

        dataForecastToday.forEach((element: Forecast) => {
          this.dataForecast.push({
            ...element,
            local: this.dataDistritsToday?.find(x => x.globalIdLocal == element.globalIdLocal),
            img: this.generateImage(element)
          });
        });

      })
    })
  }

  generateImage(item: Forecast){

    const hours = new Date().getHours()
    const isDay = hours > 6 && hours < 20;
    let img;
    const idWeatherType = item.idWeatherType < 10 ? 0 + item.idWeatherType.toString() : item.idWeatherType;

    if (isDay){
      img = 'assets/images/icons/w_ic_d_' + idWeatherType + 'anim.svg';
    } else {
      img = 'assets/images/icons/w_ic_n_' + idWeatherType + 'anim.svg';
    }

    return img;
  }

}
