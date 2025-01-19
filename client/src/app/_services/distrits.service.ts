import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DistritsService{

  constructor(private http:HttpClient) { }

  getData() {
    let url="https://api.ipma.pt/open-data/distrits-islands.json";
    return this.http.get(url).pipe()
  }
}
