import React                             from 'react';
import { useAppSelector }                from '../../hooks/redux';
import CurrentWeatherText                from './CurrentWeatherText';
import { Box }                           from '@mui/material';
import InformationBlock                  from './InformationBlock';
import { weatherMainEnum }               from '../../types/weather';
import { currentWeatherContainerStyles } from '../styles';

function getBGImageNumber(currentWeather: string) {
	switch (currentWeather) {
		case weatherMainEnum.RAIN:
			return 1;
		case weatherMainEnum.CLOUDS:
			return 2;
		case weatherMainEnum.CLEAR:
			return 3;
		default:
			return 0;
	}
}

const CurrentWeather = () => {
	const { weather, isLoading, error } = useAppSelector(state => state.weatherReducer);
	const BGImageNumber = Object.keys(weather).length ? getBGImageNumber(weather?.current?.weather[0]?.main) : 0;
	return (
		<Box sx={{ ...currentWeatherContainerStyles, backgroundImage: `url(./${BGImageNumber}.jpg)`, }}>
			<Box className="w-10/12 min-h-screen flex flex-col">
				{isLoading
				 ? <div>Loading...</div>
				 : error
				   ? <h1>{error}</h1>
				   : <CurrentWeatherText weatherResponse={weather}/>
				}
			</Box>
			<InformationBlock/>
		</Box>
	);
};

export default CurrentWeather;