import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs';
import { Forecast } from '../_models/forecast';

@Injectable({
  providedIn: 'root'
})
export class ForecastService{

  constructor(private http:HttpClient) { }

  getDataToday() {
    let url="https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/hp-daily-forecast-day0.json";
    return this.http.get(url).pipe(
      map((response: any) => {
        return response.data
      })
    )
  }

  getDataTomorrow() {
    let url="https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/hp-daily-forecast-day1.json";
    return this.http.get(url).pipe(
      map((response: any) => {
        return response.data
      })
    )
  }

  getDataIn2Days() {
    let url="https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/hp-daily-forecast-day2.json";
    return this.http.get(url).pipe(
      map((response: any) => {
        return response.data
      })
    )
  }

  getDataFromGlobalIdLocal(globalIdLocal: string) {
    let url=`https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/${globalIdLocal}.json`;
    return this.http.get(url).pipe(
      map((response: any) => {
        return response.data
      })
    )
  }
}
