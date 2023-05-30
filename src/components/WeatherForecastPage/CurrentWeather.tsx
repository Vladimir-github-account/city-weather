import React              from 'react';
import { useAppSelector } from '../../hooks/redux';
import CurrentWeatherText from './CurrentWeatherText';
import { Box }            from '@mui/material';

const CurrentWeather = () => {
	const { weather, isLoading, error } = useAppSelector(state => state.weatherReducer);

	return (
		<Box className="w-10/12 min-h-screen flex flex-col">
			{isLoading
			 ? <div>Loading...</div>
			 : error
			   ? <h1>{error}</h1>
			   : <CurrentWeatherText weatherResponse={weather}/>
			}
		</Box>
	);
};

export default CurrentWeather;