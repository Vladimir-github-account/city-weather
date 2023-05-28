import React, { FC }        from 'react';
import { IWeatherResponse } from '../types/weather';

interface WeatherItemProps {
	weatherResponse: IWeatherResponse,
}

const WeatherItem: FC<WeatherItemProps> = ({ weatherResponse }) => {
	const {
		lat, lon, current, name, hourly
	} = weatherResponse;
	console.log('render');
	return Object.keys(weatherResponse).length === 0
	       ? <h1>No data</h1>
	       : <div className="p-6 bg-amber-200 border border-blue-400 rounded-lg my-4 mx-3 flex flex-col justify-center">
		       <div className="flex align-center">
			       <p className="leading-10">
				       City: {name}, {current?.weather[0]?.description}
			       </p>
			       <img className="w-10 " src={`http://openweathermap.org/img/wn/${current?.weather[0]?.icon}.png`}
			            alt="img"/>
		       </div>
		       <p> Temperature: {current?.temp} °C</p>
		       <p> Wind speed: {hourly[0]?.wind_speed}m/s</p>
		       <p> Humidity: {hourly[0]?.humidity}%</p>
		       <p>Coordinates: {lat} {lon}</p>
	       </div>;
};

export default WeatherItem;
