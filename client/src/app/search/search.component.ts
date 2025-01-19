import { Component, OnInit } from '@angular/core';
import { faSearchengin } from '@fortawesome/free-brands-svg-icons';
import { Observable, OperatorFunction, debounceTime, distinctUntilChanged, map } from 'rxjs';
import { ForecastService } from '../_services/forecast.service';
import { DistritsService } from '../_services/distrits.service';
import { HttpClient } from '@angular/common/http';
import { Distrits } from '../_models/distrits';
import { Forecast } from '../_models/forecast';
import { Router } from '@angular/router';

const citiesMap: Record<string, number> = {
    'Aveiro': 1010500,
    'Beja': 1020500,
    'Braga': 1030300,
    'Bragança': 1040200,
    'Castelo Branco': 1050200,
    'Coimbra': 1060300,
    'Évora': 1070500,
    'Faro': 1080500,
    'Sagres': 1080501,
    'Guarda': 1090300,
    'Penhas Douradas': 1090601,
    'Leiria': 1100900,
    'Lisboa': 1110600,
    'Portalegre': 1121400,
    'Porto': 1131200,
    'Santarém': 1141600,
    'Setúbal': 1151200,
    'Sines': 1151201,
    'Viana do Castelo': 1160900,
    'Vila Real': 1171400,
    'Viseu': 1182300,
    'Funchal': 2310100,
    'Porto Santo': 2320101,
    'Ponta Delgada': 3420100,
    'Angra do Heroísmo': 3430100,
    'Horta': 3440100,
    'Santa Cruz das Flores': 3450100
};

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
faSearch = faSearchengin;
public model: any;
distrits: Distrits[] = [];
distrit: Distrits | undefined;
forecasts: any[] = [];
cities: string[] = Object.keys(citiesMap);

constructor (private forecastService: ForecastService, private distritsService: DistritsService, private http: HttpClient, private router: Router ) {}

search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
	text$.pipe(
		debounceTime(200),
		distinctUntilChanged(),
		map((term) =>
			term.length < 2 ? [] : this.cities.filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10),
		),
	);


onSearchSelect(city: string) {
	const globalIdLocal = citiesMap[city];
	if (globalIdLocal) {
		this.router.navigate(['/cities/local-detail', globalIdLocal]);
	} else {
		alert('Cidade não encontrada');
	}
	}

ngOnInit(): void {}

}
