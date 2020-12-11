export interface WeatherResponse {
    current: { [key : string] : number};
    forecast: ForecastResponse;
}

export interface ForecastResponse {
    forecastday: ForecastDay[];
}

export interface ForecastDay {
    date : Date;
    date_epoch: number;
    day: { [key : string] : number};
    astro: { [key : string] : number};
    hour : HourlyWeatherData[];
}

export interface HourlyWeatherData {
    time: string;
    temp_f: number;
}