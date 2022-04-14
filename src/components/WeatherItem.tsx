import React, {FC} from 'react';
import {IWeatherResponse} from "../types/weather";

interface WeatherItemProps {
    weatherResponse: any,
}

const WeatherItem: FC<WeatherItemProps> = ({weatherResponse}) => {
    const {
      lat, lon, current
    } = weatherResponse;
    return (
        <div>
            <p>
                {`City , temperature ${current?.temp}`}
            </p>
            <p>Coordinates {lat} {lon}</p>
        </div>
    );
};

export default WeatherItem;
