import React, { FC, Ref } from 'react';
import { Box }            from '@mui/material';
import WeatherLoading     from './WeatherLoading';
import WeatherDetails     from './WeatherDetails';
import { useAppSelector } from '../../hooks/redux';
import CitiesList         from './CitiesList';

interface WeatherLoadingProps {
	inputRef: Ref<any>;
}

const InformationBlock: FC<WeatherLoadingProps> = ({ inputRef }) => {
	const { weather } = useAppSelector(state => state.weatherReducer);
	const isWeatherLoaded = Object.keys(weather).length > 0;

	return (
		<Box className="h-full min-h-800px overflow-y-auto bg-black md:backdrop-blur-3xl bg-opacity-80 md:bg-opacity-70 w-full md:min-w-2/5 md:w-2/5 p-8 sm:p-10 md:p-12 xl:px-16 2xl:px-20 flex flex-col justify-between text-gray-500">
			<Box className="flex flex-col h-1/2 mb-7 md:mb-12 md:max-lg:mb-6">
				<WeatherLoading inputRef={inputRef}/>
				<CitiesList weather={weather}/>
			</Box>
			<hr className="border-b-1 opacity-40"/>
			<Box className="h-1/2 flex flex-col justify-between mt-9 md:mt-12  md:max-lg:mt-6">
				{isWeatherLoaded &&
					<WeatherDetails weatherResponse={weather}/>}
				<hr className={`border-b-1 opacity-40 ${!isWeatherLoaded && 'mt-auto'}`}/>
			</Box>
		</Box>
	);
};

export default InformationBlock;