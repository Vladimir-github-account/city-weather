import {WeatherAction, WeatherActionTypes} from "../../types/weather";
import {Dispatch} from "react";
import axios from "axios";

export const fetchWeather = (city: string) => {
    return async (dispatch: Dispatch<WeatherAction>) => {
        try {
            dispatch({type: WeatherActionTypes.FETCH_WEATHER})
            const cityCodResponse = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=1b923537dc27d9530021865c13301b15`)
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${cityCodResponse.data[0].lat}&lon=${cityCodResponse.data[0].lon}&exclude=minutely,daily}&appid=1b923537dc27d9530021865c13301b15&units=metric`)
            dispatch({type: WeatherActionTypes.FETCH_WEATHER_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({
                type: WeatherActionTypes.FETCH_WEATHER_ERROR,
                payload: 'Weather load error'
            })
        }
    }
}