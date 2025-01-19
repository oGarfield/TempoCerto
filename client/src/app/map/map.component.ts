import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';
import { DistritsService } from '../_services/distrits.service';
import { Distrits } from '../_models/distrits';
import { ForecastService } from '../_services/forecast.service';
import { Forecast } from '../_models/forecast';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  private map: any;
  dataDistrit: Distrits[] = [];
  dataForecast: Forecast[] = [];
  mapCoords: any[] = [];


  constructor (private distritService: DistritsService, private forecastService: ForecastService, private router: Router) {}

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 39.601, -8.322 ],
      zoom: 7,
      
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    this.distritService.getData().subscribe((dataDistrit: any) => {
      this.dataDistrit = dataDistrit.data;

        this.forecastService.getDataToday().subscribe((dataForecast: Forecast[]) => {
          dataForecast.forEach((forecast: Forecast) => {
            var icon = L.icon({
              iconUrl: this.generateIcon(forecast),
              // shadowUrl: 'leaf-shadow.png',
              iconSize:     [38, 38], // size of the icon
              shadowSize:   [50, 64], // size of the shadow
              iconAnchor:   [22, 35], // point of the icon which will correspond to marker's location
              shadowAnchor: [4, 62],  // the same for the shadow
              popupAnchor:  [-3, -25] // point from which the popup should open relative to the iconAnchor
            });
            const lat = forecast.latitude;
            const lon = forecast.longitude;
            const tempMax = forecast.tMax;
            const localData = this.dataDistrit?.find(x => x.globalIdLocal == forecast.globalIdLocal)

            const marker = L.marker([lat, lon], {icon:icon}); //, {icon:icon}
            marker.addTo(this.map);
            marker.bindPopup(localData?.local as any + " - " + tempMax as any + "ºC")

            marker.on('mouseover',function(ev) {
              marker.openPopup();
            });

            marker.on('mouseout',function(ev) {
              marker.closePopup();
            });

            marker.on('click', () => {
              this.router.navigate(['/cities/local-detail/' + localData?.globalIdLocal])
            })
          });
        })
    });

    tiles.addTo(this.map);
    
  }

    generateIcon(item: Forecast){

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
