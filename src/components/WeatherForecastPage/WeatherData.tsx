import React, { FC }                    from 'react';
import { Box }                          from '@mui/material';
import WeatherDetails                   from './WeatherDetails';
import { IWeatherResponse }             from '../../types/weather';
import WeatherChart                     from '../WeatherChart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

interface CitiesListProps {
	weather: IWeatherResponse;
}

const WeatherData: FC<CitiesListProps> = ({ weather }) => {
	const isWeatherLoaded = Object.keys(weather).length > 0;
	return (
		<Box className="h-1/2 min-h-390px flex flex-col justify-between mt-9 md:mt-6 2xl:mt-10 overflow-x-auto overflow-y-hidden">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={(isWeatherLoaded && <WeatherDetails weatherResponse={weather}/>)}/>
					<Route path="/hourly" element={(isWeatherLoaded && <WeatherChart weatherResponse={weather}/>)}/>
				</Routes>
			</BrowserRouter>
			<hr className={`border-b-1 opacity-40 ${!isWeatherLoaded && 'mt-auto'}`}/>
		</Box>
	);
};

export default WeatherData;