import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Distrits } from '../_models/distrits';
import { Forecast } from '../_models/forecast';
import { DistritsService } from '../_services/distrits.service';
import { ForecastService } from '../_services/forecast.service';
import { DatePipe } from '@angular/common';

declare var angular: any;

@Component({
  selector: 'app-local-detail',
  templateUrl: './local-detail.component.html',
  styleUrls: ['./local-detail.component.css'],
})
export class LocalDetailComponent implements OnInit{
  distrits: Distrits[] = [];
  distrit: Distrits | undefined;
  forecasts: any[] = [];
  todayDate: Date | null;
  tomorrowDate: Date | null;
  twoDaysDate: Date | null;
  threeDaysDate: Date | null;
  fourDaysDate: Date | null;
  // forecast: Forecast | undefined;

  constructor (private distritsService: DistritsService, private forecastService: ForecastService, private route: ActivatedRoute, private datePipe: DatePipe) {
    const today = new Date();
    today.setDate(today.getDate());
    
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    const twoDays = new Date();
    twoDays.setDate(twoDays.getDate() + 2);

    const threeDays = new Date();
    threeDays.setDate(threeDays.getDate() + 3);

    const fourDays = new Date();
    fourDays.setDate(fourDays.getDate() + 4);

    this.todayDate = today ? new Date(today) : null;
    this.tomorrowDate = tomorrow;
    this.twoDaysDate = twoDays;
    this.threeDaysDate = threeDays;
    this.fourDaysDate = fourDays;
  }

  ngOnInit(): void {
    this.localInfo();
  }

  localInfo() {
    // debugger
    const globalIdLocal = this.route.snapshot.paramMap.get('globalIdLocal');
    if (!globalIdLocal) return;
    this.distritsService.getData().subscribe((distrits: any) => {
      this.distrits = distrits.data
      this.distrit = this.distrits.find(x => x.globalIdLocal == Number(globalIdLocal))

      this.forecastService.getDataFromGlobalIdLocal(globalIdLocal).subscribe((forecasts: Forecast[]) => {
        debugger
          forecasts.forEach((element: Forecast) => {
            this.forecasts.push({
              ...element,
              local: this.distrits.find(x => x.globalIdLocal == element.globalIdLocal),
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
