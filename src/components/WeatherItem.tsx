import React, {FC} from 'react';
import {IWeatherResponse} from "../types/weather";

interface WeatherItemProps {
    weatherResponse: IWeatherResponse,
}

const WeatherItem: FC<WeatherItemProps> = ({weatherResponse}) => {
    const {
        name,
        clouds,
        id,
        main,
        cod,
        wind,
        coord,
        weather,
        sys
    } = weatherResponse;
    return (
        <div>
            <p>
                {`City ${name}, temperature ${main?.temp} ${weather?.[0].description}`}
            </p>
            <p>Coordinates {sys?.country} {coord?.lon} {coord?.lat}</p>
        </div>
    );
};

export default WeatherItem;