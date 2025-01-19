import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './search/search.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ListComponent } from './list/list.component';
import { NgbModule, NgbTypeahead, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { WeatherinfoComponent } from './weatherinfo/weatherinfo.component';
import { HttpClientModule } from '@angular/common/http'
import { DistritsService } from './_services/distrits.service';
import { ForecastService } from './_services/forecast.service';
import { WeatherModalComponent } from './modals/weather-modal/weather-modal.component';
import { LocalDetailComponent } from './local-detail/local-detail.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { MapComponent } from './map/map.component';
import { BackComponent } from './back/back.component';
import { CidadesComponent } from './cidades/cidades.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { MarkerComponent } from './marker/marker.component';
import { DatePipe, JsonPipe } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SearchComponent,
    ListComponent,
    WeatherinfoComponent,
    WeatherModalComponent,
    LocalDetailComponent,
    HomeComponent,
    NotFoundComponent,
    MapComponent,
    BackComponent,
    CidadesComponent,
    AboutPageComponent,
    MarkerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    NgbModule,
    HttpClientModule,
    TabsModule.forRoot(),
    NgbTypeaheadModule,
    FormsModule,
    JsonPipe,
  ],
  providers: [
    DistritsService,
    ForecastService,
    DatePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
