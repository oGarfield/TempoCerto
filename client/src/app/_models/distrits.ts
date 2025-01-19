import { Forecast } from "./forecast";

export interface Distrits {
    idRegiao: number;
    idAreaAviso: string;
    idConcelho: number;
    globalIdLocal: number;
    latitude: number;
    idDistrito: number;
    local: string;
    longitude: number;

    tMax?: Forecast;
    precipitaProb?: Forecast;
    predWindDir?: Forecast;
}