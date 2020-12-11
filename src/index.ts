import express from "express";
import request from "request";
import cors from 'cors';
import {URL} from "./constants";
import {  formatData } from "./repository/WeatherRepository";
import { PORT } from "./constants";
import { WeatherResponse } from "./models/weatherRepositoryModel";

const app = express();
app.use(cors());

app.get("/getWeather", (req, resp) => {
    request(URL, (error : any, response : any, body : any)=> {
      if(error){
          resp.status(500).send(`Sorry! Unable to fetch data as we ran into an ${JSON.stringify(error.code)} error`)
      } else {
        const weather : WeatherResponse = JSON.parse(body);
        if(!weather.current &&  !weather.forecast){
          resp.status(500).send(`Sorry! Please try again`);
        } else {
          resp.status(200).json(formatData(weather));
        }
      }
  });
});

app.listen(PORT, ()=>console.log(`Server started running on port ${PORT}`));