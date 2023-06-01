import React, { FC }      from 'react';
import { Box }            from '@mui/material';
import WeatherLoading     from './WeatherLoading';
import WeatherDetails     from './WeatherDetails';
import { useAppSelector } from '../../hooks/redux';
import CitiesList         from './CitiesList';

const InformationBlock: FC = () => {
	const { weather } = useAppSelector(state => state.weatherReducer);
	const isWeatherLoaded = Object.keys(weather).length > 0;
	return (
		<Box className="bg-black backdrop-blur-3xl bg-opacity-70 w-2/5 px-14 py-14 flex flex-col justify-between text-gray-500">
			<Box className="flex flex-col h-1/2 mb-12">
				<WeatherLoading/>
				<CitiesList weather={weather}/>
			</Box>
			<hr className="border-b-1 opacity-40 mt-auto"/>
			<Box className="h-1/2 flex flex-col justify-between mt-12">
				{isWeatherLoaded &&
					<WeatherDetails weatherResponse={weather}/>}
				<hr className={`border-b-1 opacity-40 ${!isWeatherLoaded && 'mt-auto'}`}/>
			</Box>
		</Box>
	);
};

export default InformationBlock;