import {WeatherAction, WeatherActionTypes} from "../../types/weather";
import {Dispatch} from "react";
import axios from "axios";

export const fetchWeather = () => {
    return async (dispatch: Dispatch<WeatherAction>) => {
        try {
            dispatch({type: WeatherActionTypes.FETCH_WEATHER})
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${702550}&appid=7835a6a688c283f2bf6badfb48857a56&&units=metric`)
            dispatch({type: WeatherActionTypes.FETCH_WEATHER_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({
                type: WeatherActionTypes.FETCH_WEATHER_ERROR,
                payload: 'Weather load error'
            })
        }
    }
}