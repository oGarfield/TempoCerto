import { Component, OnInit } from '@angular/core';
import { Distrits } from '../_models/distrits';
import { Forecast } from '../_models/forecast';
import { DistritsService } from '../_services/distrits.service';
import { ForecastService } from '../_services/forecast.service';
import { HttpClient } from '@angular/common/http';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { WeatherModalComponent } from '../modals/weather-modal/weather-modal.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  dataForecastToday: any[] = [];
  dataForecastTomorrow: any[] = [];
  dataForecastIn2Days: any[] = [];
  dataDistritsToday: Distrits[] = [];
  dataDistritsTomorrow: Distrits[] = [];
  dataDistritsIn2Days: Distrits[] = [];
  // activeTab: string = 'Today'
  // bsModalRef: BsModalRef<WeatherModalComponent> = new BsModalRef<WeatherModalComponent>();

  constructor (private forecastService: ForecastService, private distritService: DistritsService, private http: HttpClient) {}
  

  ngOnInit(){
    this.getDataDistritsToday();
    this.getDataDistritsTomorrow();
    this.getDataDistritsIn2Days();
  }

  // openWeatherModal() {
  //   this.bsModalRef = this.modalService.show(WeatherModalComponent);
  // }

  getDataDistritsToday() {
    // debugger
    this.distritService.getData().subscribe((dataDistritsToday: any) => {

      this.dataDistritsToday = dataDistritsToday.data;

      this.forecastService.getDataToday().subscribe((dataForecastToday: Forecast[]) => {

        dataForecastToday.forEach((element: Forecast) => {
          this.dataForecastToday.push({
            ...element,
            local: this.dataDistritsToday?.find(x => x.globalIdLocal == element.globalIdLocal),
            img: this.generateImage(element)
          });
        });

      })
    })
  }

  getDataDistritsTomorrow() {
    // debugger
    this.distritService.getData().subscribe((dataDistritsTomorrow: any) => {

      this.dataDistritsTomorrow = dataDistritsTomorrow.data;

      this.forecastService.getDataTomorrow().subscribe((dataForecastTomorrow: Forecast[]) => {

        dataForecastTomorrow.forEach((element: Forecast) => {
          this.dataForecastTomorrow.push({
            ...element,
            local: this.dataDistritsTomorrow?.find(x => x.globalIdLocal == element.globalIdLocal),
            img: this.generateImage(element)
          });
        });

      })
    })
  }

  getDataDistritsIn2Days() {
    // debugger
    this.distritService.getData().subscribe((dataDistritsIn2Days: any) => {

      this.dataDistritsIn2Days = dataDistritsIn2Days.data;

      this.forecastService.getDataIn2Days().subscribe((dataForecastIn2Days: Forecast[]) => {

        dataForecastIn2Days.forEach((element: Forecast) => {
          this.dataForecastIn2Days.push({
            ...element,
            local: this.dataDistritsIn2Days?.find(x => x.globalIdLocal == element.globalIdLocal),
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



  // weatherDay(day: string) {
  //   console.log('weatherDay function called');
  //   let i: number;
  //   let tabcontent: HTMLCollectionOf<Element>
  //   let tablinks: HTMLCollectionOf<Element>

  //   tabcontent = document.getElementsByClassName("tabcontent");
  //   for (i = 0; i < tabcontent.length; i++) {
  //     (tabcontent[i] as HTMLElement).style.display = "none";
  //   }

  //   tablinks = document.getElementsByClassName("tablinks");
  //   for (i = 0; i < tablinks.length; i++) {
  //     (tablinks[i] as HTMLElement).className = (tablinks[i] as HTMLElement).className.replace(" active", "");
  //   }

  //   (document.getElementById(day) as HTMLElement).style.display = "block";
  //   this.activeTab = day;
  // }

}
