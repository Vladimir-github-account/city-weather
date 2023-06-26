import React, { FC, useRef } from 'react';
import { useAppSelector }    from '../hooks/redux';
import CurrentWeather        from './CurrentWeather';
import { Box }               from '@mui/material';
import InformationBlock      from './InformationBlock';
import { weatherMainEnum }   from '../types/weather';
import SearchButton          from './SearchButton';
import CurrentWeatherLoading from './CurrentWeatherLoading';

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

const WeatherForecast: FC = () => {
	const { weather, isLoading } = useAppSelector(state => state.weatherReducer);
	const BGImageNumber = Object.keys(weather).length ? getBGImageNumber(weather?.current?.weather[0]?.main) : 0;
	const ref = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
	const handleClick = () => {
		ref.current?.focus();
	};

	return (
		<Box
			className="flex relative flex-col md:flex-row w-full h-full bg-center bg-cover bg-no-repeat text-white overflow-x-hidden scroll-smooth"
			sx={{
				backgroundImage: {
					xs: `url(./${BGImageNumber}-mobile.jpg)`,
					md: `url(./${BGImageNumber}.jpg)`
				}
			}}>
			<Box className="w-full md:w-3/5 min-h-full flex flex-col">
				{isLoading
				 ? <CurrentWeatherLoading/>
				 : Object.keys(weather).length > 0 && <CurrentWeather weatherResponse={weather}/>
				}
			</Box>
			<InformationBlock inputRef={ref}/>
			<SearchButton handleClick={handleClick}/>
		</Box>
	);
};

export default WeatherForecast;