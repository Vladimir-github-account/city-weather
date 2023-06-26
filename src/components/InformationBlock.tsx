import React, { FC, RefObject } from 'react';
import { Box }                  from '@mui/material';
import SearchInput              from './SearchInput';
import { useAppSelector }       from '../hooks/redux';
import CitiesList               from './CitiesList';
import WeatherData              from './WeatherData';
import { BrowserRouter }        from 'react-router-dom';

interface InformationBlockProps {
	inputRef: RefObject<HTMLInputElement | HTMLTextAreaElement>;
}

const InformationBlock: FC<InformationBlockProps> = ({ inputRef }) => {
	const { weather } = useAppSelector(state => state.weatherReducer);
	return (
		<BrowserRouter>
			<Box className="relative flex flex-col justify-between h-full min-h-800px overflow-hidden bg-black md:backdrop-blur-3xl bg-opacity-80 md:bg-opacity-70 w-full md:min-w-2/5 md:w-2/5 p-8 sm:p-10 md:py-12 md:px-8 lg:px-10 lg:max-2xl:py-8 xl:px-16 2xl:px-20 text-gray-500">
				<Box className="flex flex-col justify-between h-1/2 ">
					<SearchInput inputRef={inputRef}/>
					<CitiesList weather={weather}/>
					<hr className="border-b-1 opacity-40 mt-7 md:mt-6 2xl:mt-10"/>
				</Box>
				<WeatherData weather={weather}/>
			</Box>
		</BrowserRouter>
	);
};

export default InformationBlock;