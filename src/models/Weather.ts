export interface Weather {
    current: {
        tempF : number;
    },
    forecast: Forecast[];
}

export interface Forecast {
    time: string;
    tempF: number;
}