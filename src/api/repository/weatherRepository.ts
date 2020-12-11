import axios from 'axios';
import {URL } from '../../constants'

export async function fetchWeather (){
    let config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    const response = await axios
        .get(URL+'/getWeather', config)
        .then((response) => response.data);
    return response;

}