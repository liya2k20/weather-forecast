import { Forecast, Weather } from "../models/Weather";
import { WeatherResponse } from "../models/weatherRepositoryModel";

export const formatData = (weatherResponse : WeatherResponse)  => {
    let forecastArray : Forecast[] = [];
    weatherResponse.forecast.forecastday.map((forecastDay) => {
         forecastDay.hour.forEach((hour) => {
            forecastArray.push({time: hour.time, tempF: hour.temp_f});
    });
    console.log("forecastArray "+JSON.stringify(forecastArray));
    return forecastArray;
});
const weather: Weather = {
    current: {
        tempF: weatherResponse.current.temp_f
    },
    forecast: forecastArray
};
return weather
}
