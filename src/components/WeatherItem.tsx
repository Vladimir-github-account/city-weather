import React, {FC} from 'react';
import {IWeatherResponse} from "../types/weather";

interface WeatherItemProps {
    weatherResponse: IWeatherResponse,
}

const WeatherItem: FC<WeatherItemProps> = ({weatherResponse}) => {
    const {
        lat, lon, current, name
    } = weatherResponse;

    return Object.keys(weatherResponse).length === 0
        ? <h1>No data</h1>
        : <div>
            <p>
                City: {name} Temperature: {current?.temp}
            </p>
            <p>Coordinates {lat} {lon}</p>
        </div>
};

export default WeatherItem;
