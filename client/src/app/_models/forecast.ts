import { Distrits } from "./distrits";

export interface Forecast {
    precipitaProb: number;
    tMin: number;
    tMax: number;
    predWindDir: string;
    idWeatherType: number;
    classWindSpeed: number;
    longitude: number;
    globalIdLocal: number;
    latitude: number;
    
    local?: Distrits;
    idRegiao: number;
}