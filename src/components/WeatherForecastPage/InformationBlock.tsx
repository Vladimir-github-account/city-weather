import React, { FC, Ref } from 'react';
import { Box }            from '@mui/material';
import WeatherLoading     from './WeatherLoading';
import { useAppSelector } from '../../hooks/redux';
import CitiesList         from './CitiesList';
import WeatherData        from './WeatherData';

interface WeatherLoadingProps {
	inputRef: Ref<any>;
}

const InformationBlock: FC<WeatherLoadingProps> = ({ inputRef }) => {
	const { weather } = useAppSelector(state => state.weatherReducer);
	return (
		<Box className="h-full min-h-800px overflow-y-hidden bg-black md:backdrop-blur-3xl bg-opacity-80 md:bg-opacity-70 w-full md:min-w-2/5 md:w-2/5 p-8 sm:p-10 md:p-12 lg:max-2xl:py-8 xl:px-16 2xl:px-20 flex flex-col justify-between text-gray-500">
			<Box className="flex flex-col h-1/2 mb-7 md:mb-12 md:mb-6 2xl:mb-10">
				<WeatherLoading inputRef={inputRef}/>
				<CitiesList weather={weather}/>
			</Box>
			<hr className="border-b-1 opacity-40"/>
			<WeatherData weather={weather}/>
		</Box>
	);
};

export default InformationBlock;