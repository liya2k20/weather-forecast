export interface WeatherResponse {
    current: {
        tempF : number;
    },
    forecast: ForecastResponse[];
}

export interface ForecastResponse {
    time: string;
    tempF: number;
}